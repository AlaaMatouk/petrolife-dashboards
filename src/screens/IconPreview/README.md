# Icon Preview System

This system provides a comprehensive way to manage and preview all icons used in the PetroLife dashboard application.

## Features

- **Visual Preview**: See all icons in a grid layout with their actual appearance
- **Search & Filter**: Find icons by name, filename, or category
- **Category Organization**: Icons are organized into logical categories (vehicles, navigation, financial, etc.)
- **Copy to Clipboard**: Easy copying of icon filenames for use in code
- **Usage Examples**: Each icon shows example code for implementation
- **Auto-updating**: When new icons are added, they automatically appear in the preview

## Accessing the Icon Preview

Navigate to `/icons` in your application to view the icon preview page.

## Adding New Icons

1. **Add the icon file**: Place your new SVG icon in `src/assets/imgs/icons/`
2. **Update the icon list**: Add the filename to the `ICON_LIST` array in `src/utils/icons.ts`
3. **Categorize the icon** (optional): Add the icon to the appropriate category in `ICON_CATEGORIES` in `src/utils/icons.ts`
4. **Test**: The icon will automatically appear in the preview page

## Using Icons in Components

```tsx
// Basic usage
<img src="/src/assets/imgs/icons/icon-name.svg" alt="Icon description" />

// With utility function
import { getIconPath } from '../utils/icons';
<img src={getIconPath('icon-name.svg')} alt="Icon description" />
```

## Icon Categories

- **Navigation**: Arrows, directional indicators
- **Vehicles**: Cars, trucks, vehicle-related icons
- **Dashboard**: Analytics, dashboard-specific icons
- **Users**: User groups, account settings
- **Financial**: Money, currency, invoices
- **Locations**: Pins, stations, buildings
- **Actions**: Search, notifications, downloads
- **Energy**: Battery, power, fuel-related icons
- **General**: Calendar and other general purpose icons

## File Naming Convention

Icons should follow this naming pattern:
- Use kebab-case (lowercase with hyphens)
- Include color suffix when applicable (e.g., `-orange`, `-green`)
- Be descriptive of the icon's purpose
- End with `.svg` extension

Examples:
- `car-side-orange.svg`
- `battery-orange.svg`
- `left-arrow.svg`
- `user-group.svg`

## Utility Functions

The `src/utils/icons.ts` file provides several utility functions:

- `getIconPath(filename)`: Get the full path for an icon
- `getDisplayName(filename)`: Convert filename to display name
- `getIconCategory(filename)`: Get the category for an icon
- `processIcons(iconList)`: Process icon list into IconInfo objects
- `filterIcons(icons, searchTerm)`: Filter icons by search term
- `getIconsByCategory(category)`: Get icons by category
- `copyToClipboard(text)`: Copy text to clipboard

## Development Notes

- The icon preview page is designed for development use and should not be exposed in production
- Icons are loaded dynamically, so the page will always show the current state of the icons directory
- The system is designed to be easily maintainable and scalable as the icon library grows
