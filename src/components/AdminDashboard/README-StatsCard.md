# StatsCardsSection Component

A reusable component for displaying statistics cards in a grid layout with support for categories, breakdowns, and interactive options.

## Features

- ✅ **Fully Reusable**: Pass custom data via props
- ✅ **Type-Safe**: Complete TypeScript support
- ✅ **Flexible Layout**: Supports multiple card types (categories, breakdowns, simple amounts)
- ✅ **Interactive Options**: Cards can have selectable options
- ✅ **Responsive**: Adapts to different screen sizes (1 col on mobile, 2 on tablet, 3 on desktop)

## Usage

### Basic Example

```tsx
import StatsCardsSection from './components/AdminDashboard/StatsCardsSection';
import { Car } from 'lucide-react';

const myStatsData = [
  {
    title: "السائقين",
    categories: [
      { name: "سائقو الشركات", count: 3500 },
      { name: "سائقونا بتوصيل الوقود", count: 220 },
    ],
    total: { name: "الاجمالي", count: 3720 },
    icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
  },
  // ... more stats
];

function MyDashboard() {
  return (
    <StatsCardsSection 
      statsData={myStatsData} 
      defaultSelectedOptions={{ 0: 1 }}
    />
  );
}
```

## Props

### `StatsCardsSectionProps`

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `statsData` | `StatData[]` | Yes | - | Array of statistics data to display |
| `defaultSelectedOptions` | `{ [key: number]: number }` | No | `{}` | Default selected option index for cards with options |

## Data Structure

### `StatData` Interface

```typescript
interface StatData {
  title: string;                    // Card title
  icon: React.ReactNode;            // Icon component
  categories?: StatCategory[];      // Categories with counts
  breakdown?: StatBreakdown[];      // Breakdown with colored items
  total?: StatTotal;                // Total summary
  options?: string[];               // Selectable options
  amount?: string;                  // Simple amount display
  type?: string;                    // Card type identifier
}
```

### Supporting Interfaces

```typescript
interface StatCategory {
  name: string;
  count: number;
}

interface StatBreakdown {
  type: string;
  amount: string;
  color: string;  // Tailwind color class
}

interface StatTotal {
  name: string;
  count: number;
}
```

## Card Types

### 1. Categories Card
Display multiple categories with counts:
```typescript
{
  title: "المستخدمين",
  categories: [
    { name: "مزودي الخدمة", count: 84 },
    { name: "افراد", count: 4256 },
  ],
  icon: <Users className="w-5 h-5" />,
}
```

### 2. Breakdown Card
Display fuel or other breakdowns with colored labels:
```typescript
{
  title: "اجمالي تكلفة الوقود",
  breakdown: [
    { type: "ديزل", amount: "6500", color: "text-orange-500" },
    { type: "بنزين 95", amount: "5000", color: "text-red-500" },
  ],
  total: { name: "الاجمالي", count: 13700 },
  icon: <DollarSign className="w-5 h-5" />,
}
```

### 3. Simple Amount Card
Display a single value:
```typescript
{
  title: "رصيد محافظ العملاء",
  amount: "720,250",
  icon: <Wallet className="w-5 h-5" />,
  type: "wallet",
}
```

### 4. Card with Options
Add selectable option buttons:
```typescript
{
  title: "الاشتراكات",
  categories: [
    { name: "Premium", count: 125 },
    { name: "Classic", count: 524 },
  ],
  options: ["الافراد", "الشركات"],
  icon: <RocketLaunchIcon className="w-5 h-5" />,
}
```

## File Structure

```
src/components/AdminDashboard/
├── StatsCardsSection.tsx    # Main reusable component
├── statsData.tsx            # Example data configuration
├── Index.tsx                # Dashboard page using the component
└── README.md               # This documentation
```

## Customization

### Custom Data Source
Create your own data file:

```typescript
// myCustomStats.ts
import { StatData } from './StatsCardsSection';
import { TrendingUp } from 'lucide-react';

export const customStatsData: StatData[] = [
  {
    title: "My Custom Stat",
    categories: [
      { name: "Category 1", count: 100 },
      { name: "Category 2", count: 200 },
    ],
    icon: <TrendingUp className="w-5 h-5" />,
  },
];
```

Then use it:
```tsx
import { customStatsData } from './myCustomStats';

<StatsCardsSection statsData={customStatsData} />
```

### Styling
The component uses Tailwind CSS classes. You can customize colors and styles by modifying the theme or using custom color classes in your data.

## Example: Dynamic Data

```tsx
import { useState, useEffect } from 'react';
import StatsCardsSection from './StatsCardsSection';

function DynamicDashboard() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetchStatsData().then(data => setStats(data));
  }, []);

  return <StatsCardsSection statsData={stats} />;
}
```

## Notes

- Icons can be from any icon library (lucide-react, heroicons, etc.)
- All text supports RTL (Right-to-Left) for Arabic content
- The component maintains its own state for option selection
- Cards with `total` will display the total in the header

