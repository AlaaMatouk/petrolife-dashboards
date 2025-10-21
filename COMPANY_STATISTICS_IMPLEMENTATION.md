# Company Statistics Implementation

## Overview

Successfully implemented company-specific statistics for the company details page. The statistics cards now display data based on the selected company, showing real-time information from Firestore.

## Features Implemented

### 1. Company-Specific Statistics Function

Created `fetchCompanyStatistics(companyId)` in `firestore.ts` that:

- Fetches company data by ID from Firestore
- Retrieves and filters all cars belonging to the company
- Retrieves and filters all drivers belonging to the company
- Calculates statistics based on the company's data

### 2. Statistics Calculated

#### 1. Drivers Statistics (السائقين)

- **Active Drivers**: Count of drivers with `isActive === true`
- **Inactive Drivers**: Count of drivers with `isActive === false`
- **Total**: Total number of drivers for the company

#### 2. Subscribed Cars (السيارات المشتركة)

- **By Size**: Cars with active subscriptions categorized into:
  - VIP
  - كبيرة (Large)
  - متوسطة (Medium)
  - صغيرة (Small)
- **Total**: Total number of subscribed cars

#### 3. Total Cars (اجمالي السيارات)

- **By Size**: All cars categorized into:
  - VIP
  - كبيرة (Large)
  - متوسطة (Medium)
  - صغيرة (Small)
- **Total**: Total number of all cars for the company

#### 4. Total Fuel Cost (اجمالي تكلفة الوقود)

- **Diesel** (ديزل): Cost in SAR
- **Gasoline 95** (بنزين 95): Cost in SAR
- **Gasoline 91** (بنزين 91): Cost in SAR
- **Total**: Total fuel cost
- _(Currently showing 0 - to be implemented with fuel transaction data)_

#### 5. Total Liters (اجمالي اللترات)

- **Diesel** (ديزل): Volume in liters
- **Gasoline 95** (بنزين 95): Volume in liters
- **Gasoline 91** (بنزين 91): Volume in liters
- **Total**: Total fuel volume
- _(Currently showing 0 - to be implemented with fuel transaction data)_

#### 6. Wallet Balance (رصيد المحفظة)

- Displays company's current wallet balance
- Shows amount in SAR (ر.س) with thousands separator

#### 7. Tire Change Operations (عمليات تغيير الاطارات)

- Operations categorized by car size
- _(Currently showing 0 - to be implemented with service data)_

#### 8. Car Wash Operations (عمليات غسيل السيارات)

- Operations categorized by car size
- _(Currently showing 0 - to be implemented with service data)_

#### 9. Oil Change Operations (عمليات تغيير الزيوت)

- Operations categorized by car size
- _(Currently showing 0 - to be implemented with service data)_

### 3. Data Filtering Logic

#### Company Identification

Companies are identified by matching their email across collections:

```typescript
const companyEmail = companyData.email || "";
```

#### Cars Filtering

Cars are filtered by matching:

```typescript
const carEmail =
  carData.email || carData.companyEmail || carData.createdUserId || "";
if (
  carEmail &&
  companyEmail &&
  carEmail.toLowerCase() === companyEmail.toLowerCase()
) {
  // Include this car
}
```

#### Drivers Filtering

Drivers are filtered by matching:

```typescript
const driverCompanyEmail =
  driverData.createdUserId || driverData.email || driverData.companyEmail || "";
if (
  driverCompanyEmail &&
  companyEmail &&
  driverCompanyEmail.toLowerCase() === companyEmail.toLowerCase()
) {
  // Include this driver
}
```

### 4. UI Implementation

#### CompanyInfo Component Updates

- Added `useState` for managing statistics data and loading state
- Added `useEffect` to fetch statistics when component mounts
- Integrated loading spinner while fetching data
- Passed company-specific statistics to `StatsCardsSection`

#### Loading State

```typescript
{
  isLoadingStats ? (
    <div className="flex items-center justify-center py-10">
      <div className="animate-spin rounded-full h-8 w-8..."></div>
      <p>جاري تحميل الإحصائيات...</p>
    </div>
  ) : (
    <StatsCardsSection statsData={companyStats} />
  );
}
```

## Technical Implementation

### File Changes

#### `src/services/firestore.ts`

- Added `fetchCompanyStatistics(companyId)` function
- Fetches company document from Firestore
- Queries `companies-cars` and `companies-drivers` collections
- Filters data by company email
- Categorizes and counts based on criteria
- Returns formatted statistics array

#### `src/components/AdminDashboard/pages/companies/CompanyInfo.tsx`

- Import `fetchCompanyStatistics` from firestore service
- Added state management for statistics
- Added `useEffect` hook to load statistics on mount
- Replaced static `statsData` with dynamic `companyStats`
- Added loading indicator

### Statistics Data Structure

```typescript
const statsData = [
  // 1. Drivers
  {
    title: "السائقين",
    categories: [
      { name: "السائقين النشطين", count: activeDrivers },
      { name: "السائقين الغير نشطين", count: inactiveDrivers },
    ],
    total: { name: "الاجمالي", count: companyDrivers.length },
    icon: "drivers",
  },
  // 2. Subscribed Cars
  {
    title: "السيارات المشتركة",
    categories: [
      { name: "VIP", count: subscribedCarSizes.VIP },
      { name: "كبيرة", count: subscribedCarSizes.كبيرة },
      { name: "متوسطة", count: subscribedCarSizes.متوسطة },
      { name: "صغيرة", count: subscribedCarSizes.صغيرة },
    ],
    total: { name: "الاجمالي", count: subscribedCars.length },
    icon: "cars",
  },
  // 3. Total Cars
  {
    title: "اجمالي السيارات",
    categories: [
      { name: "VIP", count: carSizes.VIP },
      { name: "كبيرة", count: carSizes.كبيرة },
      { name: "متوسطة", count: carSizes.متوسطة },
      { name: "صغيرة", count: carSizes.صغيرة },
    ],
    total: { name: "الاجمالي", count: companyCars.length },
    icon: "cars",
  },
  // 4. Total Fuel Cost
  {
    title: "اجمالي تكلفة الوقود",
    breakdown: [
      {
        type: "ديزل",
        amount: "0",
        color: "text-color-mode-text-icons-t-orange",
      },
      {
        type: "بنزين 95",
        amount: "0",
        color: "text-color-mode-text-icons-t-red",
      },
      {
        type: "بنزين 91",
        amount: "0",
        color: "text-color-mode-text-icons-t-green",
      },
    ],
    total: { name: "الاجمالي", count: 0 },
    icon: "fuel-cost",
  },
  // 5. Total Liters
  {
    title: "اجمالي اللترات",
    breakdown: [
      {
        type: "ديزل",
        amount: "0 .L",
        color: "text-color-mode-text-icons-t-orange",
      },
      {
        type: "بنزين 95",
        amount: "0 .L",
        color: "text-color-mode-text-icons-t-red",
      },
      {
        type: "بنزين 91",
        amount: "0 .L",
        color: "text-color-mode-text-icons-t-green",
      },
    ],
    total: { name: "الاجمالي", count: 0 },
    icon: "fuel-liters",
  },
  // 6. Wallet Balance
  {
    title: "رصيد المحفظة",
    amount: formatNumber(walletBalance),
    icon: "wallet",
    type: "wallet",
  },
  // 7-9. Service Operations (Tires, Car Wash, Oil Change)
  {
    title: "عمليات تغيير الاطارات",
    categories: [
      { name: "VIP", count: 0 },
      { name: "كبيرة", count: 0 },
      { name: "متوسطة", count: 0 },
      { name: "صغيرة", count: 0 },
    ],
    options: ["الافراد", "الشركات"],
    icon: "tires",
  },
  // ... (car wash and oil change follow same pattern)
];
```

## Data Flow

1. **Component Mounts**

   - `CompanyInfo` component receives `companyData` prop
   - `useEffect` triggers on mount or when `companyData.id` changes

2. **Fetch Statistics**

   - Calls `fetchCompanyStatistics(companyData.id)`
   - Fetches company document from Firestore
   - Queries cars and drivers collections in parallel
   - Filters results by company email

3. **Process Data**

   - Categorizes cars by size using `normalizeCarSize()`
   - Counts active/inactive drivers
   - Extracts wallet balance

4. **Display Results**
   - Updates `companyStats` state
   - Sets `isLoadingStats` to false
   - `StatsCardsSection` renders with company-specific data

## Performance Optimizations

### Parallel Queries

```typescript
const [carsSnapshot, driversSnapshot] = await Promise.all([
  getDocs(collection(db, "companies-cars")),
  getDocs(collection(db, "companies-drivers")),
]);
```

### Single Iteration

- Each collection is iterated only once
- Filtering and categorization happen in the same loop

### Memoization

- `useEffect` dependency on `companyData?.id` prevents unnecessary refetches
- Statistics only reload when company changes

## Error Handling

### Graceful Failures

```typescript
try {
  const stats = await fetchCompanyStatistics(companyData.id);
  setCompanyStats(stats);
} catch (error) {
  console.error("Error loading company statistics:", error);
  // Component continues to render without crashing
}
```

### Console Logging

- Detailed logs for debugging
- Shows company ID, counts, and categorizations

## Use Cases

### Admin Dashboard

- View detailed statistics for a specific company
- Compare metrics across different companies
- Monitor company performance in real-time

### Company Management

- Track number of active/inactive drivers
- Monitor fleet composition by car size
- Check wallet balance status

## Benefits

1. **Real-Time Data**: Statistics reflect current Firestore data
2. **Company-Specific**: Each company sees only their own data
3. **Detailed Breakdown**: Categorized by meaningful metrics
4. **Performance**: Optimized with parallel queries
5. **User Experience**: Loading states provide feedback
6. **Reusable**: Same logic can be applied to other dashboards

## Future Enhancements

### Potential Improvements

1. **Caching**: Cache statistics to reduce Firestore reads
2. **Historical Data**: Show trends over time
3. **Comparison**: Compare with other companies or periods
4. **Export**: Export statistics to PDF/Excel
5. **Filters**: Filter statistics by date range or status

### Additional Metrics

1. **Fuel Consumption**: Total fuel consumed by company
2. **Revenue**: Total revenue generated
3. **Subscription Status**: Current plan and expiry
4. **Recent Activity**: Latest transactions/operations

## Conclusion

The company statistics implementation is now fully functional with:

- ✅ Company-specific data fetching from Firestore
- ✅ Real-time statistics calculation
- ✅ Cars categorized by size (VIP, Large, Medium, Small)
- ✅ Drivers categorized by status (Active, Inactive)
- ✅ Wallet balance display
- ✅ Loading states and error handling
- ✅ Optimized parallel queries
- ✅ Email-based filtering across collections

The implementation follows best practices for React hooks, async operations, and Firestore queries, providing a solid foundation for company-specific analytics.
