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

    // Save the workbook with cell styles
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array', cellStyles: true });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    saveAs(blob, filename);
  } catch (error) {
    console.error('Excel export error:', error);
    throw error;
  }
};

/**
 * Helper function to create a cell with RTL alignment
 */
const createRTLCell = (value: string | number, type: 's' | 'n' = 's') => {
  return {
    v: value,
    t: type,
    s: {
      alignment: {
        horizontal: 'right',
        vertical: 'center',
        readingOrder: 2  // RTL reading order
      }
    }
  };
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
  worksheet['C1'] = createRTLCell('شركة بترولايف');
  worksheet['D1'] = createRTLCell(''); // Merge with C1
  worksheet['C2'] = createRTLCell('بترو لايف');
  worksheet['D2'] = createRTLCell(''); // Merge with C2
  worksheet['C3'] = createRTLCell(`السجل التجاري : ${commercialRegister}`);
  worksheet['D3'] = createRTLCell(''); // Merge with C3
  worksheet['C4'] = createRTLCell(`الرقم الضريبي : ${taxNumber}`);
  worksheet['D4'] = createRTLCell(''); // Merge with C4

  // Top Middle (F & G & H columns) - Logo placeholders
  worksheet['F1'] = createRTLCell('[LOGO-2]');
  worksheet['G1'] = createRTLCell(''); // Merge with F1
  worksheet['H1'] = createRTLCell(''); // Merge with F1
  worksheet['F2'] = createRTLCell('[LOGO-3]');
  worksheet['G2'] = createRTLCell(''); // Merge with F2
  worksheet['H2'] = createRTLCell(''); // Merge with F2
  worksheet['F3'] = createRTLCell('Insert logos');
  worksheet['G3'] = createRTLCell('from static');
  worksheet['H3'] = createRTLCell('folder');

  // Top Right (J & K columns) - Merged cells
  worksheet['J1'] = createRTLCell('petrolife co.');
  worksheet['J2'] = createRTLCell('petro life');
  worksheet['J3'] = createRTLCell(`CR: ${commercialRegister}`);
  worksheet['J4'] = createRTLCell(`vat :${taxNumber}`);
  
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
  
  // Left side - Labels on left (C), values on right (D), merge rows 6-7
  worksheet['C6'] = createRTLCell('اسم العميل');
  worksheet['D6'] = createRTLCell(companyName);
  worksheet['C7'] = createRTLCell('رقم العميل');
  worksheet['D7'] = createRTLCell(clientNumber);
  
  // Merge C6:D6 and C7:D7
  worksheet['!merges'].push(
    { s: { r: 5, c: 2 }, e: { r: 5, c: 3 } }, // C6:D6
    { s: { r: 6, c: 2 }, e: { r: 6, c: 3 } }  // C7:D7
  );

  // Right side - Labels on right (K), values on left (J), merge rows 6-7
  worksheet['J6'] = createRTLCell('السجل التجاري :');
  worksheet['K6'] = createRTLCell(commercialRegister);
  worksheet['J7'] = createRTLCell('الرقم الضريبي :');
  worksheet['K7'] = createRTLCell(taxNumber);
  
  // Merge J6:K6 and J7:K7
  worksheet['!merges'].push(
    { s: { r: 5, c: 9 }, e: { r: 5, c: 10 } }, // J6:K6
    { s: { r: 6, c: 9 }, e: { r: 6, c: 10 } }  // J7:K7
  );

  // FINAL PART - Report title and table
  
  // Report title (row 9)
  worksheet['F9'] = createRTLCell('التقرير التفصيلي للمحفظة');

  // Table headers (row 11) - Each header takes two columns - RTL order
  worksheet['C11'] = createRTLCell('المبلغ');
  worksheet['E11'] = createRTLCell('المرفق');
  worksheet['G11'] = createRTLCell('اسم الشخص');
  worksheet['I11'] = createRTLCell('اسم الشركة');
  worksheet['K11'] = createRTLCell('الحالة');
  worksheet['M11'] = createRTLCell('نوع العملية');
  worksheet['O11'] = createRTLCell('رقم العملية');
  worksheet['Q11'] = createRTLCell('التاريخ');
  
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

  // Add transaction data starting from row 12 - Each data cell takes two columns - RTL order
  transactions.forEach((transaction, index) => {
    const row = 12 + index;
    
    // Data in first column of each pair, merge with second column - reversed order
    worksheet[`C${row}`] = createRTLCell(transaction.debit);
    worksheet[`E${row}`] = createRTLCell('');
    worksheet[`G${row}`] = createRTLCell('AdminX');
    worksheet[`I${row}`] = createRTLCell(transaction.operationName || 'Alkafa\'a');
    worksheet[`K${row}`] = createRTLCell('accepted');
    worksheet[`M${row}`] = createRTLCell(transaction.operationType);
    worksheet[`O${row}`] = createRTLCell(transaction.id);
    worksheet[`Q${row}`] = createRTLCell(formatSimpleDate(transaction.date));
    
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
  worksheet['C1'] = createRTLCell('شركة بترولايف');
  worksheet['D1'] = createRTLCell('');
  worksheet['C2'] = createRTLCell('بترو لايف');
  worksheet['D2'] = createRTLCell('');
  worksheet['C3'] = createRTLCell(`السجل التجاري : ${commercialRegister}`);
  worksheet['D3'] = createRTLCell('');
  worksheet['C4'] = createRTLCell(`الرقم الضريبي : ${taxNumber}`);
  worksheet['D4'] = createRTLCell('');

  // Top Middle (F & G & H columns) - Logo placeholders
  worksheet['F1'] = createRTLCell('[LOGO-2]');
  worksheet['G1'] = createRTLCell('');
  worksheet['H1'] = createRTLCell('');
  worksheet['F2'] = createRTLCell('[LOGO-3]');
  worksheet['G2'] = createRTLCell('');
  worksheet['H2'] = createRTLCell('');
  worksheet['F3'] = createRTLCell('Insert logos');
  worksheet['G3'] = createRTLCell('from static');
  worksheet['H3'] = createRTLCell('folder');

  // Top Right (J & K columns) - Merged cells
  worksheet['J1'] = createRTLCell('petrolife co.');
  worksheet['J2'] = createRTLCell('petro life');
  worksheet['J3'] = createRTLCell(`CR: ${commercialRegister}`);
  worksheet['J4'] = createRTLCell(`vat :${taxNumber}`);
  
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
  
  // Left side - Labels on left (C), values on right (D), merge rows 6-7
  worksheet['C6'] = createRTLCell('اسم العميل');
  worksheet['D6'] = createRTLCell(companyName);
  worksheet['C7'] = createRTLCell('رقم العميل');
  worksheet['D7'] = createRTLCell(clientNumber);
  
  // Merge C6:D6 and C7:D7
  worksheet['!merges'].push(
    { s: { r: 5, c: 2 }, e: { r: 5, c: 3 } }, // C6:D6
    { s: { r: 6, c: 2 }, e: { r: 6, c: 3 } }  // C7:D7
  );

  // Right side - Labels on right (K), values on left (J), merge rows 6-7
  worksheet['J6'] = createRTLCell('السجل التجاري :');
  worksheet['K6'] = createRTLCell(commercialRegister);
  worksheet['J7'] = createRTLCell('الرقم الضريبي :');
  worksheet['K7'] = createRTLCell(taxNumber);
  
  // Merge J6:K6 and J7:K7
  worksheet['!merges'].push(
    { s: { r: 5, c: 9 }, e: { r: 5, c: 10 } }, // J6:K6
    { s: { r: 6, c: 9 }, e: { r: 6, c: 10 } }  // J7:K7
  );

  // FINAL PART - Report title and summary table
  
  // Report title (row 9)
  worksheet['F9'] = createRTLCell('التقرير الإجمالي للمحفظة');

  // Summary table headers (row 11) - Each header takes two columns - RTL order
  worksheet['C11'] = createRTLCell('المبلغ');
  worksheet['E11'] = createRTLCell('الكمية');
  worksheet['G11'] = createRTLCell('نوع العملية');
  
  // Merge each header across two columns
  worksheet['!merges'].push(
    { s: { r: 10, c: 2 }, e: { r: 10, c: 3 } }, // C11:D11
    { s: { r: 10, c: 4 }, e: { r: 10, c: 5 } }, // E11:F11
    { s: { r: 10, c: 6 }, e: { r: 10, c: 7 } }  // G11:H11
  );

  // Summary data (row 12) - Each data cell takes two columns - RTL order
  worksheet['C12'] = createRTLCell(totalAmount.toFixed(2), 'n');
  worksheet['E12'] = createRTLCell(transactionCount.toString());
  worksheet['G12'] = createRTLCell(`${transactionCount} ${operationType}`);
  
  // Merge data cells across two columns
  worksheet['!merges'].push(
    { s: { r: 11, c: 2 }, e: { r: 11, c: 3 } }, // C12:D12
    { s: { r: 11, c: 4 }, e: { r: 11, c: 5 } }, // E12:F12
    { s: { r: 11, c: 6 }, e: { r: 11, c: 7 } }  // G12:H12
  );

  // Total row (row 13) - Each data cell takes two columns - RTL order
  worksheet['C13'] = createRTLCell(totalAmount.toFixed(2), 'n');
  worksheet['G13'] = createRTLCell('الاجمالي');
  
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

/**
 * Generic export function for any data table with company data
 * @param data - Array of data objects to export
 * @param columns - Column headers for the table
 * @param filename - Name of the exported file
 * @param format - Export format ('excel' or 'pdf')
 * @param reportTitle - Title for the report
 */
export const exportDataTable = async (
  data: any[],
  columns: { key: string; label: string }[],
  filename: string,
  format: 'excel' | 'pdf',
  reportTitle: string = 'تقرير البيانات'
) => {
  try {
    // Fetch company data
    const company = await fetchCurrentCompany();
    
    if (format === 'excel') {
      await exportTableToExcel(data, columns, company, filename, reportTitle);
    } else {
      await exportTableToPDF(data, columns, company, filename, reportTitle);
    }
  } catch (error) {
    console.error('Export error:', error);
    throw new Error('فشل في تصدير البيانات');
  }
};

/**
 * Export table data to Excel with company header
 */
const exportTableToExcel = async (
  data: any[],
  columns: { key: string; label: string }[],
  company: any,
  filename: string,
  reportTitle: string
) => {
  try {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([]);
    
    let currentRow = 0;
    
    // Add report title
    XLSX.utils.sheet_add_aoa(worksheet, [[reportTitle]], { origin: { r: currentRow, c: 0 } });
    currentRow += 2;
    
    // Add company information header
    if (company) {
      const companyInfo = [
        ['معلومات الشركة'],
        ['اسم الشركة:', company.brandName || company.name || '-'],
        ['البريد الإلكتروني:', company.email || '-'],
        ['رقم الهاتف:', company.phoneNumber || '-'],
        ['العنوان:', company.address || '-'],
        ['السجل التجاري:', company.commercialRegistrationNumber || '-'],
        ['الرقم الضريبي:', company.vatNumber || '-'],
        ['الرصيد الحالي:', `${company.balance || 0} ر.س`],
        [''], // Empty row
      ];
      
      XLSX.utils.sheet_add_aoa(worksheet, companyInfo, { origin: { r: currentRow, c: 0 } });
      currentRow += companyInfo.length + 1;
    }
    
    // Add table headers - reversed for RTL
    const headers = columns.map(col => col.label).reverse();
    XLSX.utils.sheet_add_aoa(worksheet, [headers], { origin: { r: currentRow, c: 0 } });
    currentRow += 1;
    
    // Add table data - reversed for RTL
    const rows = data.map(item => 
      columns.map(col => {
        const value = item[col.key];
        // Handle nested objects
        if (typeof value === 'object' && value !== null) {
          if (value.text) return value.text;
          if (value.name) return value.name;
          return JSON.stringify(value);
        }
        return value || '-';
      }).reverse()
    );
    
    XLSX.utils.sheet_add_aoa(worksheet, rows, { origin: { r: currentRow, c: 0 } });
    
    // Apply RTL alignment to all cells
    const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        if (worksheet[cellAddress] && typeof worksheet[cellAddress] === 'object') {
          worksheet[cellAddress].s = {
            alignment: {
              horizontal: 'right',
              vertical: 'center',
              readingOrder: 2
            }
          };
        }
      }
    }
    
    // Set column widths
    const colWidths = columns.map(() => ({ wch: 20 }));
    worksheet['!cols'] = colWidths;
    
    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
    
    // Generate filename with current date
    const currentDate = new Date().toISOString().split('T')[0];
    const fullFilename = `${filename}-${currentDate}.xlsx`;
    
    // Save the workbook with cell styles
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array', cellStyles: true });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    saveAs(blob, fullFilename);
  } catch (error) {
    console.error('Excel export error:', error);
    throw error;
  }
};

/**
 * Export table data to PDF with company header
 */
const exportTableToPDF = async (
  data: any[],
  columns: { key: string; label: string }[],
  company: any,
  filename: string,
  reportTitle: string
) => {
  try {
    const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape orientation
    
    let yPosition = 10;
    
    // Add report title
    pdf.setFontSize(16);
    pdf.text(reportTitle, pdf.internal.pageSize.getWidth() - 10, yPosition, { align: 'right' });
    yPosition += 10;
    
    // Add company information
    if (company) {
      pdf.setFontSize(10);
      const companyInfo = [
        `اسم الشركة: ${company.brandName || company.name || '-'}`,
        `البريد الإلكتروني: ${company.email || '-'}`,
        `رقم الهاتف: ${company.phoneNumber || '-'}`,
        `الرصيد: ${company.balance || 0} ر.س`,
      ];
      
      companyInfo.forEach(info => {
        pdf.text(info, pdf.internal.pageSize.getWidth() - 10, yPosition, { align: 'right' });
        yPosition += 6;
      });
      
      yPosition += 5;
    }
    
    // Prepare table data
    const tableHeaders = columns.map(col => col.label);
    const tableRows = data.map(item => 
      columns.map(col => {
        const value = item[col.key];
        // Handle nested objects
        if (typeof value === 'object' && value !== null) {
          if (value.text) return value.text;
          if (value.name) return value.name;
          return '-';
        }
        return value || '-';
      })
    );
    
    // Add table using autoTable
    (pdf as any).autoTable({
      head: [tableHeaders],
      body: tableRows,
      startY: yPosition,
      styles: {
        font: 'helvetica',
        halign: 'center',
      },
      headStyles: {
        fillColor: [79, 91, 179],
        textColor: [255, 255, 255],
        fontSize: 10,
      },
      margin: { top: 10, right: 10, bottom: 10, left: 10 },
    });
    
    // Generate filename with current date
    const currentDate = new Date().toISOString().split('T')[0];
    const fullFilename = `${filename}-${currentDate}.pdf`;
    
    // Save the PDF
    pdf.save(fullFilename);
  } catch (error) {
    console.error('PDF export error:', error);
    throw error;
  }
};
