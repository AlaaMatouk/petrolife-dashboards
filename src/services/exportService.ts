import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { fetchCurrentCompany } from './firestore';

export interface TransactionData {
  id: string;
  operationName: string;
  operationType: string;
  date: string;
  balance: string;
  debit: string;
  sourceType?: 'driver-transfer' | 'wallet-charge';
  rawDate?: any;
}

export interface ExportFilters {
  timePeriod: string;
  operationType: string;
  operationName: string;
  reportType: string;
}

/**
 * Export wallet reports to Excel or PDF
 * @param transactions - Array of transaction data
 * @param filters - Current filter settings
 * @param format - Export format ('excel' or 'pdf')
 */
export const exportWalletReport = async (
  transactions: TransactionData[],
  filters: ExportFilters,
  format: 'excel' | 'pdf'
) => {
  try {
    const reportType = filters.reportType;
    const templateFile = reportType === 'تحليلي' 
      ? '/src/constants/detailed-wallet-report.xlsx'
      : '/src/constants/total-wallet-report.xlsx';

    if (format === 'excel') {
      await exportToExcel(transactions, filters, templateFile);
    } else {
      await exportToPDF(transactions, filters, templateFile);
    }
  } catch (error) {
    console.error('Export error:', error);
    throw new Error('فشل في تصدير التقرير');
  }
};

/**
 * Export data to Excel using new template structure
 */
const exportToExcel = async (
  transactions: TransactionData[],
  filters: ExportFilters,
  _templatePath: string
) => {
  try {
    // Get current company data
    const companyData = await fetchCurrentCompany();

    // Create new workbook from scratch
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([]);

    const reportType = filters.reportType;
    
    if (reportType === 'تحليلي') {
      // Analytical report - detailed data
      await createDetailedReport(worksheet, transactions, filters, companyData);
    } else {
      // Detailed report - summary data
      await createSummaryReport(worksheet, transactions, filters, companyData);
    }

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Wallet Report');

    // Generate filename with current date
    const currentDate = new Date().toISOString().split('T')[0];
    const filename = `wallet-report-${reportType}-${currentDate}.xlsx`;

    // Save the workbook
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    saveAs(blob, filename);
  } catch (error) {
    console.error('Excel export error:', error);
    throw error;
  }
};

/**
 * Create detailed report (تحليلي) with proper structure
 */
const createDetailedReport = async (
  worksheet: XLSX.WorkSheet,
  transactions: TransactionData[],
  _filters: ExportFilters,
  companyData: any
) => {
  // Extract company information
  const companyName = companyData?.brandName || companyData?.name || companyData?.email || 'N/A';
  const commercialRegister = companyData?.commercialRegister || companyData?.cr || '123456789';
  const taxNumber = companyData?.taxNumber || companyData?.vat || companyData?.taxId || '123456789';
  const clientNumber = companyData?.id || companyData?.uid || 'N/A';

  // Create the template structure as specified
  
  // TOP PART (B to L columns, 1 to 5 rows)
  
  // Top Left (C & D columns)
  worksheet['C1'] = { v: 'شركة بترولايف', t: 's' };
  worksheet['D1'] = { v: '', t: 's' }; // Merge with C1
  worksheet['C2'] = { v: 'بترو لايف', t: 's' };
  worksheet['D2'] = { v: '', t: 's' }; // Merge with C2
  worksheet['C3'] = { v: `السجل التجاري : ${commercialRegister}`, t: 's' };
  worksheet['D3'] = { v: '', t: 's' }; // Merge with C3
  worksheet['C4'] = { v: `الرقم الضريبي : ${taxNumber}`, t: 's' };
  worksheet['D4'] = { v: '', t: 's' }; // Merge with C4

  // Top Middle (F & G & H columns) - Logo placeholders
  worksheet['F1'] = { v: '[LOGO-2]', t: 's' };
  worksheet['G1'] = { v: '', t: 's' }; // Merge with F1
  worksheet['H1'] = { v: '', t: 's' }; // Merge with F1
  worksheet['F2'] = { v: '[LOGO-3]', t: 's' };
  worksheet['G2'] = { v: '', t: 's' }; // Merge with F2
  worksheet['H2'] = { v: '', t: 's' }; // Merge with F2
  worksheet['F3'] = { v: 'Insert logos', t: 's' };
  worksheet['G3'] = { v: 'from static', t: 's' };
  worksheet['H3'] = { v: 'folder', t: 's' };

  // Top Right (J & K columns) - Merged cells
  worksheet['J1'] = { v: 'petrolife co.', t: 's' };
  worksheet['J2'] = { v: 'petro life', t: 's' };
  worksheet['J3'] = { v: `CR: ${commercialRegister}`, t: 's' };
  worksheet['J4'] = { v: `vat :${taxNumber}`, t: 's' };
  
  // Set merge ranges for J & K columns in rows 1-3
  if (!worksheet['!merges']) {
    worksheet['!merges'] = [];
  }
  worksheet['!merges'].push(
    { s: { r: 0, c: 9 }, e: { r: 0, c: 10 } }, // J1:K1
    { s: { r: 1, c: 9 }, e: { r: 1, c: 10 } }, // J2:K2  
    { s: { r: 2, c: 9 }, e: { r: 2, c: 10 } }  // J3:K3
  );

  // SECOND PART - Middle section
  
  // Left side - Move labels to column D, values to column C, merge rows 6-7
  worksheet['C6'] = { v: companyName, t: 's' };
  worksheet['D6'] = { v: 'اسم العميل', t: 's' };
  worksheet['C7'] = { v: clientNumber, t: 's' };
  worksheet['D7'] = { v: 'رقم العميل', t: 's' };
  
  // Merge C6:D6 and C7:D7
  worksheet['!merges'].push(
    { s: { r: 5, c: 2 }, e: { r: 5, c: 3 } }, // C6:D6
    { s: { r: 6, c: 2 }, e: { r: 6, c: 3 } }  // C7:D7
  );

  // Right side - Move labels to column K, values to column J, merge rows 6-7
  worksheet['J6'] = { v: commercialRegister, t: 's' };
  worksheet['K6'] = { v: 'السجل التجاري :', t: 's' };
  worksheet['J7'] = { v: taxNumber, t: 's' };
  worksheet['K7'] = { v: 'الرقم الضريبي :', t: 's' };
  
  // Merge J6:K6 and J7:K7
  worksheet['!merges'].push(
    { s: { r: 5, c: 9 }, e: { r: 5, c: 10 } }, // J6:K6
    { s: { r: 6, c: 9 }, e: { r: 6, c: 10 } }  // J7:K7
  );

  // FINAL PART - Report title and table
  
  // Report title (row 9)
  worksheet['F9'] = { v: 'التقرير التفصيلي للمحفظة', t: 's' };

  // Table headers (row 11) - Each header takes two columns
  worksheet['C11'] = { v: 'التاريخ', t: 's' };
  worksheet['E11'] = { v: 'رقم العملية', t: 's' };
  worksheet['G11'] = { v: 'نوع العملية', t: 's' };
  worksheet['I11'] = { v: 'الحالة', t: 's' };
  worksheet['K11'] = { v: 'اسم الشركة', t: 's' };
  worksheet['M11'] = { v: 'اسم الشخص', t: 's' };
  worksheet['O11'] = { v: 'المرفق', t: 's' };
  worksheet['Q11'] = { v: 'المبلغ', t: 's' };
  
  // Merge each header across two columns
  worksheet['!merges'].push(
    { s: { r: 10, c: 2 }, e: { r: 10, c: 3 } }, // C11:D11
    { s: { r: 10, c: 4 }, e: { r: 10, c: 5 } }, // E11:F11
    { s: { r: 10, c: 6 }, e: { r: 10, c: 7 } }, // G11:H11
    { s: { r: 10, c: 8 }, e: { r: 10, c: 9 } }, // I11:J11
    { s: { r: 10, c: 10 }, e: { r: 10, c: 11 } }, // K11:L11
    { s: { r: 10, c: 12 }, e: { r: 10, c: 13 } }, // M11:N11
    { s: { r: 10, c: 14 }, e: { r: 10, c: 15 } }, // O11:P11
    { s: { r: 10, c: 16 }, e: { r: 10, c: 17 } }  // Q11:R11
  );

  // Add transaction data starting from row 12 - Each data cell takes two columns
  transactions.forEach((transaction, index) => {
    const row = 12 + index;
    
    // Data in first column of each pair, merge with second column
    worksheet[`C${row}`] = { v: formatSimpleDate(transaction.date), t: 's' };
    worksheet[`E${row}`] = { v: transaction.id, t: 's' };
    worksheet[`G${row}`] = { v: transaction.operationType, t: 's' };
    worksheet[`I${row}`] = { v: 'accepted', t: 's' };
    worksheet[`K${row}`] = { v: transaction.operationName || 'Alkafa\'a', t: 's' };
    worksheet[`M${row}`] = { v: 'AdminX', t: 's' };
    worksheet[`O${row}`] = { v: '', t: 's' };
    worksheet[`Q${row}`] = { v: transaction.debit, t: 's' };
    
    // Merge each data cell across two columns
    if (!worksheet['!merges']) {
      worksheet['!merges'] = [];
    }
    worksheet['!merges'].push(
      { s: { r: row - 1, c: 2 }, e: { r: row - 1, c: 3 } }, // C:D
      { s: { r: row - 1, c: 4 }, e: { r: row - 1, c: 5 } }, // E:F
      { s: { r: row - 1, c: 6 }, e: { r: row - 1, c: 7 } }, // G:H
      { s: { r: row - 1, c: 8 }, e: { r: row - 1, c: 9 } }, // I:J
      { s: { r: row - 1, c: 10 }, e: { r: row - 1, c: 11 } }, // K:L
      { s: { r: row - 1, c: 12 }, e: { r: row - 1, c: 13 } }, // M:N
      { s: { r: row - 1, c: 14 }, e: { r: row - 1, c: 15 } }, // O:P
      { s: { r: row - 1, c: 16 }, e: { r: row - 1, c: 17 } }  // Q:R
    );
  });

  // Set worksheet range - Extended to accommodate wider table
  const lastRow = 12 + transactions.length - 1;
  worksheet['!ref'] = `B1:R${lastRow}`;
};

/**
 * Create summary report (تفصيلي) with proper structure
 */
const createSummaryReport = async (
  worksheet: XLSX.WorkSheet,
  transactions: TransactionData[],
  filters: ExportFilters,
  companyData: any
) => {
  // Extract company information
  const companyName = companyData?.brandName || companyData?.name || companyData?.email || 'N/A';
  const commercialRegister = companyData?.commercialRegister || companyData?.cr || '123456789';
  const taxNumber = companyData?.taxNumber || companyData?.vat || companyData?.taxId || '123456789';
  const clientNumber = companyData?.id || companyData?.uid || 'N/A';

  // Calculate summary data
  const totalAmount = transactions.reduce((sum, transaction) => {
    const amount = parseFloat(transaction.debit.replace(/,/g, '')) || 0;
    return sum + amount;
  }, 0);

  const transactionCount = transactions.length;
  const operationType = filters.operationType === 'الكل' ? 'Wallet Requests' : filters.operationType;

  // Create the same template structure as detailed report
  
  // TOP PART (B to L columns, 1 to 5 rows)
  
  // Top Left (C & D columns)
  worksheet['C1'] = { v: 'شركة بترولايف', t: 's' };
  worksheet['D1'] = { v: '', t: 's' };
  worksheet['C2'] = { v: 'بترو لايف', t: 's' };
  worksheet['D2'] = { v: '', t: 's' };
  worksheet['C3'] = { v: `السجل التجاري : ${commercialRegister}`, t: 's' };
  worksheet['D3'] = { v: '', t: 's' };
  worksheet['C4'] = { v: `الرقم الضريبي : ${taxNumber}`, t: 's' };
  worksheet['D4'] = { v: '', t: 's' };

  // Top Middle (F & G & H columns) - Logo placeholders
  worksheet['F1'] = { v: '[LOGO-2]', t: 's' };
  worksheet['G1'] = { v: '', t: 's' };
  worksheet['H1'] = { v: '', t: 's' };
  worksheet['F2'] = { v: '[LOGO-3]', t: 's' };
  worksheet['G2'] = { v: '', t: 's' };
  worksheet['H2'] = { v: '', t: 's' };
  worksheet['F3'] = { v: 'Insert logos', t: 's' };
  worksheet['G3'] = { v: 'from static', t: 's' };
  worksheet['H3'] = { v: 'folder', t: 's' };

  // Top Right (J & K columns) - Merged cells
  worksheet['J1'] = { v: 'petrolife co.', t: 's' };
  worksheet['J2'] = { v: 'petro life', t: 's' };
  worksheet['J3'] = { v: `CR: ${commercialRegister}`, t: 's' };
  worksheet['J4'] = { v: `vat :${taxNumber}`, t: 's' };
  
  // Set merge ranges for J & K columns in rows 1-3
  if (!worksheet['!merges']) {
    worksheet['!merges'] = [];
  }
  worksheet['!merges'].push(
    { s: { r: 0, c: 9 }, e: { r: 0, c: 10 } }, // J1:K1
    { s: { r: 1, c: 9 }, e: { r: 1, c: 10 } }, // J2:K2  
    { s: { r: 2, c: 9 }, e: { r: 2, c: 10 } }  // J3:K3
  );

  // SECOND PART - Middle section
  
  // Left side - Move labels to column D, values to column C, merge rows 6-7
  worksheet['C6'] = { v: companyName, t: 's' };
  worksheet['D6'] = { v: 'اسم العميل', t: 's' };
  worksheet['C7'] = { v: clientNumber, t: 's' };
  worksheet['D7'] = { v: 'رقم العميل', t: 's' };
  
  // Merge C6:D6 and C7:D7
  worksheet['!merges'].push(
    { s: { r: 5, c: 2 }, e: { r: 5, c: 3 } }, // C6:D6
    { s: { r: 6, c: 2 }, e: { r: 6, c: 3 } }  // C7:D7
  );

  // Right side - Move labels to column K, values to column J, merge rows 6-7
  worksheet['J6'] = { v: commercialRegister, t: 's' };
  worksheet['K6'] = { v: 'السجل التجاري :', t: 's' };
  worksheet['J7'] = { v: taxNumber, t: 's' };
  worksheet['K7'] = { v: 'الرقم الضريبي :', t: 's' };
  
  // Merge J6:K6 and J7:K7
  worksheet['!merges'].push(
    { s: { r: 5, c: 9 }, e: { r: 5, c: 10 } }, // J6:K6
    { s: { r: 6, c: 9 }, e: { r: 6, c: 10 } }  // J7:K7
  );

  // FINAL PART - Report title and summary table
  
  // Report title (row 9)
  worksheet['F9'] = { v: 'التقرير الإجمالي للمحفظة', t: 's' };

  // Summary table headers (row 11) - Each header takes two columns
  worksheet['C11'] = { v: 'نوع العملية', t: 's' };
  worksheet['E11'] = { v: 'الكمية', t: 's' };
  worksheet['G11'] = { v: 'المبلغ', t: 's' };
  
  // Merge each header across two columns
  worksheet['!merges'].push(
    { s: { r: 10, c: 2 }, e: { r: 10, c: 3 } }, // C11:D11
    { s: { r: 10, c: 4 }, e: { r: 10, c: 5 } }, // E11:F11
    { s: { r: 10, c: 6 }, e: { r: 10, c: 7 } }  // G11:H11
  );

  // Summary data (row 12) - Each data cell takes two columns
  worksheet['C12'] = { v: `${transactionCount} ${operationType}`, t: 's' };
  worksheet['E12'] = { v: transactionCount.toString(), t: 's' };
  worksheet['G12'] = { v: totalAmount.toFixed(2), t: 'n' };
  
  // Merge data cells across two columns
  worksheet['!merges'].push(
    { s: { r: 11, c: 2 }, e: { r: 11, c: 3 } }, // C12:D12
    { s: { r: 11, c: 4 }, e: { r: 11, c: 5 } }, // E12:F12
    { s: { r: 11, c: 6 }, e: { r: 11, c: 7 } }  // G12:H12
  );

  // Total row (row 13) - Each data cell takes two columns
  worksheet['C13'] = { v: 'الاجمالي', t: 's' };
  worksheet['G13'] = { v: totalAmount.toFixed(2), t: 'n' };
  
  // Merge total row cells across two columns
  worksheet['!merges'].push(
    { s: { r: 12, c: 2 }, e: { r: 12, c: 3 } }, // C13:D13
    { s: { r: 12, c: 6 }, e: { r: 12, c: 7 } }  // G13:H13
  );

  // Set worksheet range - Extended to accommodate wider table
  worksheet['!ref'] = 'B1:H13';
};

/**
 * Format date to simple format to avoid column overflow
 */
const formatSimpleDate = (dateString: string): string => {
  try {
    // Extract date part from the formatted string
    const dateMatch = dateString.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    if (dateMatch) {
      const [, day, month, year] = dateMatch;
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    
    // If no match, try to parse as Date
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString().split('T')[0]; // YYYY-MM-DD format
    }
    
    return dateString.substring(0, 10); // Take first 10 characters
  } catch (error) {
    return dateString.substring(0, 10); // Fallback
  }
};

/**
 * Export data to PDF by converting Excel to PDF
 */
const exportToPDF = async (
  transactions: TransactionData[],
  filters: ExportFilters,
  _templatePath: string
) => {
  try {
    // Get current company data
    const companyData = await fetchCurrentCompany();

    // Create new workbook from scratch
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([]);

    const reportType = filters.reportType;
    
    if (reportType === 'تحليلي') {
      await createDetailedReport(worksheet, transactions, filters, companyData);
    } else {
      await createSummaryReport(worksheet, transactions, filters, companyData);
    }

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Wallet Report');

    // Convert Excel to HTML table
    const html = XLSX.utils.sheet_to_html(worksheet, { 
      id: 'wallet-report-table',
      header: '',
      footer: ''
    });

    // Create a temporary container for the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '-9999px';
    document.body.appendChild(tempDiv);

    // Convert HTML to canvas then to PDF
    const canvas = await html2canvas(tempDiv, {
      scale: 2,
      useCORS: true,
      allowTaint: true
    });

    // Remove temporary element
    document.body.removeChild(tempDiv);

    // Create PDF
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape orientation
    
    const imgWidth = 297; // A4 width in mm
    const pageHeight = 210; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add new pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Generate filename and save
    const currentDate = new Date().toISOString().split('T')[0];
    const filename = `wallet-report-${reportType}-${currentDate}.pdf`;
    
    pdf.save(filename);
  } catch (error) {
    console.error('PDF export error:', error);
    throw error;
  }
};

/**
 * Get filtered transactions based on current filters
 */
export const getFilteredTransactions = (
  transactions: TransactionData[],
  filters: ExportFilters
): TransactionData[] => {
  return transactions.filter(transaction => {
    // Filter by time period
    if (filters.timePeriod !== 'الكل') {
      const transactionDate = transaction.rawDate;
      if (transactionDate) {
        const date = transactionDate.toDate ? transactionDate.toDate() : new Date(transactionDate);
        const now = new Date();
        const daysDiff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        
        switch (filters.timePeriod) {
          case 'اخر اسبوع':
            if (daysDiff > 7) return false;
            break;
          case 'اخر 30 يوم':
            if (daysDiff > 30) return false;
            break;
          case 'اخر 6 شهور':
            if (daysDiff > 180) return false;
            break;
          case 'اخر 12 شهر':
            if (daysDiff > 365) return false;
            break;
        }
      }
    }

    // Filter by operation type
    if (filters.operationType !== 'الكل' && transaction.operationType !== filters.operationType) {
      return false;
    }

    // Filter by operation name
    if (filters.operationName !== 'الكل' && transaction.operationName !== filters.operationName) {
      return false;
    }

    return true;
  });
};
