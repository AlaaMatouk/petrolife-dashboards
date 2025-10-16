# Data Sources Mapping - Petrolife Dashboards

This document shows exactly where each screen gets its data from in Firestore, including collection names and filters.

---

## 1. **Dashboard (لوحة التحكم)**
**Screen:** `ComprehensiveDashboard.tsx`

### Data Sources:

#### A. Wallet Balance (رصيد محفظتي)
- **Collection:** `companies`
- **Filter:** `uid == currentUser.uid` OR `email == currentUser.email` OR `createdUserId == currentUser.email`
- **Field Used:** `balance`
- **Function:** `fetchCurrentCompany()` (called in `AuthListener.tsx`)

#### B. Fuel Statistics (اجمالي اللترات المستهلكة + التكلفة الإجمالية للوقود)
- **Collection:** `orders`
- **Filter:** `companyUid == currentUser.uid`
- **Fields Used:** 
  - Fuel Type: `selectedOption.name.ar`, `selectedOption.name.en`, `selectedOption.label`, `service.title.ar`, `service.title.en`
  - Litres: `totalLitre`
  - Cost: `totalPrice`
- **Function:** `fetchOrders()` → `calculateFuelStatistics()`
- **Grouping:** By fuel type (ديزل, بنزين 91, بنزين 95)

#### C. Car Wash Statistics (عمليات غسيل السيارات)
- **Collection:** `orders`
- **Filter:** 
  1. `companyUid == currentUser.uid`
  2. Category contains car wash keywords (غسيل سيارة, Car Wash, wash)
- **Fields Used:**
  - Car Size: `car.size`, `order.size`
  - Total Cost: `totalPrice`
- **Function:** `fetchOrders()` → `calculateCarWashStatistics()`
- **Grouping:** By car size (صغيرة, متوسطة, كبيرة, VIP)

#### D. Oil Change Statistics (تغييرات الزيوت)
- **Collection:** `orders`
- **Filter:**
  1. `companyUid == currentUser.uid`
  2. Service/category name contains oil keywords:
     - Arabic: "زيت بترولايف", "زيت محرك موبيل", "زيت"
     - English: "Petrolife Oil", "Mobil motor oil", "oil"
- **Fields Used:**
  - Litres: `totalLitre`, `quantity`, `cartItems[0].quantity`
- **Function:** `fetchOrders()` → `calculateOilChangeStatistics()`
- **Display:** Total litres of oil changes

---

## 2. **Wallet Screen (محفظتي)**
**Screen:** `Wallet.tsx` → `TransactionListSection.tsx`

### Data Sources:

#### A. Financial Transactions (المعاملات المالية)
- **Collection:** `orders`
- **Filter:** `companyUid == currentUser.uid`
- **Fields Used:**
  - Operation Name: `assignedDriver.name`
  - Operation Type: `service.title.ar`, `service.title.en`
  - Date: `createdDate`
  - Operation Number: `id`
  - Operation Value: `totalPrice`
- **Function:** `fetchOrders()`
- **Additional:** Enriched with driver data from `companies-drivers` collection
- **Pagination:** 10 items per page

#### B. Fuel Statistics (Same as Dashboard)
- Same as Dashboard fuel statistics above

---

## 3. **Wallet Charge Requests (طلبات شحن المحفظة)**
**Screen:** `WalletChargeRequests.tsx` → `ContentSection.tsx`

### Data Source:
- **Collection:** `companies-wallets-requests`
- **Filter:** `requestedUser.email == currentUser.email`
- **Fields Used:**
  - Request ID: `id`
  - Status: `status` (mapped: "accepted" → "مكتمل")
  - Request Date: `requestDate`
  - Amount: `value` or `amount`
  - Old Balance: `requestedUser.balance`
  - Type: `type`
- **Function:** `fetchWalletChargeRequests()`
- **Pagination:** 10 items per page

---

## 4. **Wallet Reports (تقرير المحفظة)**
**Screen:** `WalletReports.tsx` → `TransactionHistorySection.tsx`

### Data Sources:

#### A. Transaction History (سجل المعاملات)
- **Collection:** `companies-drivers-transfer`
- **Filter:** `createdUser.email == currentUser.email`
- **Fields Used:**
  - Balance: `car.balance`
  - Debit: `value`
  - Operation Name: `car.name.ar`
  - Operation Type: `fuelType` or `periodName`
  - Date: `createdDate`
  - Operation ID: `id`
- **Function:** `fetchCompaniesDriversTransfer()`
- **Pagination:** 10 items per page

#### B. Client Info (بيانات العميل)
- **Collection:** `companies`
- **Filter:** `email == currentUser.email` OR `uId == currentUser.uid`
- **Fields Used:**
  - City: `formattedLocation.address.city`
  - Tax Number: `vatNumber`
  - Client Code: `uId`
  - Phone: `phoneNumber`
  - Commercial Record: `commercialRegistrationNumber`
  - Client Name: `name` or `brandName`
- **Function:** `fetchCurrentCompany()`

---

## 5. **Financial Reports (التقارير المالية)**
**Screen:** `FinancialReports.tsx` → `DataTableSection.tsx`

### Data Sources:

#### A. Report Data (جدول التقارير)
- **Collection:** `orders`
- **Filter:** `companyUid == currentUser.uid`
- **Fields Used:**
  - City: `city.name`, `carStation.city.name.ar`
  - Station Name: `carStation.name`
  - Date: `createdDate`
  - Operation Number: `id`
  - Quantity: `cartItems[0].quantity`, `totalLitre`
  - Product Name: `cartItems[0].name.ar`
  - Product Number: `cartItems[0].onyxProductId`
  - Product Type: `cartItems[0].category.majorTypeEnum`
  - Driver Name: `assignedDriver.name`
  - Driver Code: `assignedDriver.id`
- **Function:** `fetchFinancialReportData()`
- **Pagination:** 10 items per page

#### B. Client Info (بيانات العميل)
- Same as Wallet Reports client info above

---

## 6. **Fuel Delivery Requests (طلبات توصيل الوقود)**
**Screen:** `DeliveryFuelRequests.tsx` → `OrderDetailsSection.tsx`

### Data Source:
- **Collection:** `orders`
- **Filter:** 
  1. `companyUid == currentUser.uid`
  2. **AND** (`service.title.ar == "توصيل الوقود"` OR `service.title.en == "Fuel Delivery"`)
  3. **AND** (`service.desc.ar == "عند الطلب وفي أي وقت وفي أي مكان"` OR `service.desc.en == "On-demand, anytime anywhere."`)
- **Fields Used:**
  - Order Number: `id`
  - Date: `createdDate`
  - Driver: `assignedDriver.name`
  - Status: `status` (pending, in progress, delivered, completed, cancelled, rejected)
  - Address: `location.address`, `location.description`, `selectedLocation.address`
  - Priority: `priority`
- **Function:** `fetchOrders()` (with additional filtering in component)
- **Additional:** Enriched with driver data from `companies-drivers`
- **Pagination:** 10 items per page

---

## 7. **Store (المتجر)**
**Screen:** `StoreScreen.tsx` → `ProductFilterSection.tsx`

### Data Source:
- **Collection:** `products`
- **Filter:** None (fetches all products)
- **Fields Used:**
  - Title: `title.ar`, `title.en`
  - Description: `desc.ar`, `desc.en`
  - Category: `category.ar`, `category.en`
  - Price: `price`
  - Image: `image`
  - Quantity: `quantity`
- **Function:** `fetchProducts()`
- **Pagination:** 10 items per page

---

## 8. **Subscriptions (الاشتراكات)**
**Screen:** `Subscriptions.tsx` → `SubscriptionListSection.tsx`

### Data Source:
- **Collection:** `subscriptions`
- **Filter:** `createdUserId == currentUser.uid`
- **Fields Used:**
  - Plan Name: `planName`
  - Price: `price`
  - Created Date: `createdDate`
  - Period (Days): `periodValueInDays`
- **Calculated:** 
  - Expiry Date: `createdDate + periodValueInDays`
- **Function:** `fetchUserSubscriptions()`
- **Pagination:** 10 items per page

---

## 9. **Petrolife Station Locations (مواقع محطات بترولايف)**
**Screen:** `PerolifeStationLocations.tsx` → `ControlPanelSection.tsx`

### Data Sources:

#### A. Station Data
- **Collection:** `carstations`
- **Filter:** None (fetches all stations)
- **Fields Used:**
  - Station Code: `id` or `placeId`
  - City: `formattedLocation.address.city`, `address.city`
  - Company: `name` or `email`
  - Status: `status` or `isActive`

#### B. Consumption Calculation
- **Collection:** `orders`
- **Filter:** `companyUid == currentUser.uid`
- **Join Logic:** Match `carStation.email` in orders with `email` in carstations
- **Calculation:** Sum of `quantity × price` or `totalLitre` for matched stations
- **Function:** `fetchCarStationsWithConsumption()`
- **Pagination:** 10 items per page

---

## 10. **Drivers (السائقين)**
**Screen:** `Drivers.tsx` → `DataTableSection.tsx`

### Data Source:
- **Collection:** `companies-drivers`
- **Filter:** `companyUid == currentUser.uid` OR `createdUser.email == currentUser.email`
- **Fields Used:**
  - Driver Code: `id`
  - Driver Name: `name`
  - Phone: `phoneNumber`
  - Address: `address`
  - Fuel Type: `fuelType`
  - Financial Value: `balance`
  - Car Number: Associated from `companies-cars`
  - Status: `isActive`
- **Function:** `fetchCompaniesDrivers()`
- **Pagination:** 10 items per page

---

## 11. **Cars (السيارات)**
**Screen:** `Cars.tsx` → `CarListSection.tsx`

### Data Source:
- **Collection:** `companies-cars`
- **Filter:** `companyUid == currentUser.uid` OR `createdUser.email == currentUser.email`
- **Fields Used:**
  - Car Number: `plateNumber`
  - Car Name: `name`
  - Brand: `brand`
  - Model: `model`
  - Year: `year`
  - Fuel Type: `fuelType`
  - Category: `category`, `size`
  - Status: `isActive`
- **Function:** `fetchCompaniesCars()` (called in component directly)
- **Pagination:** 10 items per page

---

## 12. **Money Refund Requests (طلبات استرداد الأموال)**
**Screen:** `MoneyRefundRequests.tsx` → `RequestHistorySection.tsx`

### Data Source:
- **Currently:** Using dummy/mock data
- **Expected Collection:** Would be `refund-requests` or similar
- **Pagination:** 10 items per page

---

## Summary of Collections Used:

| Collection Name | Used In | Filter Field(s) |
|----------------|---------|-----------------|
| `companies` | Dashboard, Wallet Reports, Financial Reports, Auth | `uid`, `email`, `createdUserId` |
| `orders` | Dashboard, Wallet, Financial Reports, Fuel Delivery, Station Locations | `companyUid` |
| `companies-drivers` | Drivers, Orders enrichment | `companyUid`, `createdUser.email` |
| `companies-cars` | Cars | `companyUid`, `createdUser.email` |
| `companies-wallets-requests` | Wallet Charge Requests | `requestedUser.email` |
| `companies-drivers-transfer` | Wallet Reports | `createdUser.email` |
| `products` | Store | None (all) |
| `subscriptions` | Subscriptions | `createdUserId` |
| `carstations` | Station Locations | None (all) |

---

## Key Filter Patterns:

### 1. **Company-Level Data** (Most Common)
```javascript
where('companyUid', '==', currentUser.uid)
```

### 2. **Email-Based Filter**
```javascript
where('email', '==', currentUser.email)
// OR
where('createdUser.email', '==', currentUser.email)
// OR  
where('requestedUser.email', '==', currentUser.email)
```

### 3. **User ID Filter**
```javascript
where('createdUserId', '==', currentUser.uid)
```

### 4. **Multi-Field Fallback** (Company)
```javascript
// Try UID first
where('uid', '==', currentUser.uid)
// Then email
where('email', '==', currentUser.email)
// Then createdUserId
where('createdUserId', '==', currentUser.email)
```

---

## Date Created: October 13, 2025
## Last Updated: October 13, 2025

