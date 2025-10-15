# Excel Export Update Summary

## Overview
Updated the Excel export functionality to match the new template structure with proper formatting and layout.

## Changes Made

### 1. **Top Section (Rows 1-4)**

#### Left Side (C & D columns)
- شركة بترولايف (Row 1)
- بترو لايف (Row 2)
- السجل التجاري : 123456789 (Row 3)
- الرقم الضريبي : 123456789 (Row 4)

#### Middle Section (F & G & H columns)
- LOGO-2 placeholder (Row 1)
- LOGO-3 placeholder (Row 2)
- Note: (See static/img/) (Row 3)
- **Logos Available**: `static/img/logo-2.png` and `static/img/logo-3.png`

#### Right Side (J & K columns)
- petrolife co. (Row 1)
- petro life (Row 2)
- CR: 123456789 (Row 3)
- vat: 123456789 (Row 4)

### 2. **Client Information Section (Rows 6-7)**

#### Left Side (C & D columns)
- اسم العميل: [Company Name from data] (Row 6)
- رقم العميل: [Client Number from data] (Row 7)

#### Right Side (J & K columns)
- السجل التجاري : [Commercial Register from data] (Row 6)
- الرقم الضريبي : [Tax Number from data] (Row 7)

### 3. **Report Title and Table (Row 9 onwards)**

#### Detailed Report (تحليلي)
- **Title**: "التقرير التفصيلي للمحفظة" (Row 9, centered)
- **Headers** (Row 11):
  - التاريخ (Date)
  - رقم العملية (Operation ID)
  - نوع العملية (Operation Type)
  - الحالة (Status)
  - اسم الشركة (Company Name)
  - المبلغ (Amount)

#### Summary Report (إجمالي)
- **Title**: "التقرير الإجمالي للمحفظة" (Row 9, centered)
- **Headers** (Row 11):
  - نوع العملية (Operation Type)
  - الكمية (Quantity)
  - المبلغ (Amount)
- **Total Row** (Row 14): Shows الإجمالي (Total)

### 4. **Column Width Optimization**

All columns now have proper widths to prevent text overflow:
- Date columns: 15 characters width
- ID columns: 25 characters width
- Type columns: 20 characters width
- Amount columns: 15 characters width
- Spacing columns: 5 characters width

### 5. **RTL Support**

All cells are configured with RTL (Right-to-Left) alignment:
```typescript
alignment: {
  horizontal: 'right',
  vertical: 'center',
  readingOrder: 2  // RTL reading order
}
```

## Data Sources

The export now pulls the following data from company records:
- **Company Name**: `companyData.brandName || companyData.name || companyData.email`
- **Commercial Register**: `companyData.commercialRegister || companyData.cr`
- **Tax Number**: `companyData.taxNumber || companyData.vat || companyData.taxId`
- **Client Number**: `companyData.id || companyData.uid`

## File Structure

```
Top Section (Rows 1-4)
├── Left: Arabic company info (C & D)
├── Middle: Logo placeholders (F & G & H)
└── Right: English company info (J & K)

Client Info (Rows 6-7)
├── Left: Client name & number (C & D)
└── Right: CR & VAT numbers (J & K)

Report Section (Row 9+)
├── Title (Row 9, centered F-H)
└── Data Table (Row 11+)
```

## Logo Implementation Notes

### Current Implementation
- Logo area is left empty (blank cells in F, G, H columns, rows 1-3)
- Cells are merged to create space for manual logo insertion after export
- Users can manually add logos to the exported Excel file if needed

### Logo Files Available (for manual insertion)
- `static/img/logo-2.png`
- `static/img/logo-3.png`

### Future Enhancement Options
To automatically embed images in Excel, you would need:
1. **ExcelJS Library**: A more feature-rich alternative to xlsx that supports images
2. **Implementation**: 
   ```typescript
   import ExcelJS from 'exceljs';
   const imageId = workbook.addImage({
     filename: 'static/img/logo-2.png',
     extension: 'png',
   });
   worksheet.addImage(imageId, 'F1:H2');
   ```

## Testing

To test the new export format:
1. Navigate to the Wallet Reports section
2. Apply any filters (time period, operation type, etc.)
3. Click the Excel export button
4. Verify the following:
   - ✅ Company info appears in top left (Arabic)
   - ✅ Logo placeholders appear in middle
   - ✅ Company info appears in top right (English)
   - ✅ Client data populates correctly
   - ✅ Report title is centered
   - ✅ Table columns don't overlap
   - ✅ All text is right-aligned (RTL)
   - ✅ Column widths are appropriate

## Files Modified
- `src/services/exportService.ts` - Updated all export functions:
  - `createDetailedReport()` - Wallet detailed report
  - `createSummaryReport()` - Wallet summary report
  - `exportTableToExcel()` - Generic table export for all other screens

## Benefits
1. **Better Readability**: Proper column widths prevent text overflow
2. **Professional Layout**: Structured header with company branding areas
3. **Data Integration**: Automatically pulls client data from Firestore
4. **RTL Support**: Proper Arabic text alignment
5. **Consistency**: ALL export buttons use the same header structure
6. **Universal Application**: Works for all screens (Wallet Reports, Drivers, Cars, etc.)

## All Export Buttons Updated

The new template format is now used by ALL export buttons across the application:

### ✅ Screens Using Updated Export Format:
1. **Wallet Reports** - Uses `exportWalletReport()` with detailed/summary options
2. **Drivers** - Uses `exportDataTable()` with driver information
3. **Cars** - Uses `exportDataTable()` with vehicle information
4. **Financial Reports** - Uses `exportDataTable()`
5. **Charge Requests** - Uses `exportDataTable()`
6. **Money Refund Requests** - Uses `exportDataTable()`
7. **Subscriptions** - Uses `exportDataTable()`
8. **Delivery Fuel Requests** - Uses `exportDataTable()`

All exports now include:
- Professional header with company information (Arabic & English)
- Client details section
- Centered report title
- Properly spaced columns
- RTL text alignment

