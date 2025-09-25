# Theme System Documentation

This document describes the centralized theme system implemented for the Petrolife Dashboard project.

## Overview

The theme system provides a centralized way to manage colors, typography, spacing, and other design tokens throughout the application. This ensures consistency and makes it easy to maintain and update the design system.

## Structure

The theme system is organized into several files:

- `src/theme/colors.ts` - Color definitions and utilities
- `src/theme/typography.ts` - Font families, sizes, and typography scales
- `src/theme/spacing.ts` - Spacing, border radius, shadows, and other layout values
- `src/theme/index.ts` - Main export file that combines all theme definitions
- `src/utils/theme.ts` - Utility functions for working with theme values

## Usage

### Colors

The color system includes:

- **Primary colors**: Main brand colors with 50-900 scale
- **Secondary colors**: Supporting colors with 50-900 scale
- **Status colors**: Success, warning, error colors
- **Neutral colors**: Grays, black, white
- **Semantic colors**: Text, border, background colors

#### Using Colors in Components

```tsx
// Using CSS variables (recommended for Tailwind classes)
<div className="bg-primary-500 text-white border border-light">
  Content
</div>

// Using theme utilities
import { themeColors } from '../utils/theme';

<div style={{ color: themeColors.primary }}>
  Content
</div>
```

#### Available Color Classes

- `bg-primary-{50-900}` - Primary background colors
- `text-primary-{50-900}` - Primary text colors
- `border-primary-{50-900}` - Primary border colors
- `bg-secondary-{50-900}` - Secondary background colors
- `text-secondary-{50-900}` - Secondary text colors
- `bg-success-{50-900}` - Success colors
- `bg-warning-{50-900}` - Warning colors
- `bg-error-{50-900}` - Error colors
- `text-primary` - Primary text color
- `text-secondary` - Secondary text color
- `text-tertiary` - Tertiary text color
- `border-light` - Light border color
- `border-medium` - Medium border color
- `border-dark` - Dark border color

### Typography

The typography system includes:

- **Font families**: Tajawal (primary), Inter (secondary), system fonts
- **Font sizes**: xs to 6xl scale
- **Font weights**: thin to black
- **Typography scales**: Predefined combinations for different text styles

#### Using Typography

```tsx
// Using Tailwind classes
<h1 className="font-tajawal text-2xl font-bold">
  Heading
</h1>

// Using existing design system classes
<p className="font-body-body-2 text-color-mode-text-icons-t-primary-gray">
  Body text
</p>
```

#### Available Typography Classes

- `font-tajawal` - Tajawal font family
- `font-inter` - Inter font family
- `font-system` - System font family
- `text-xs` to `text-6xl` - Font sizes
- `font-thin` to `font-black` - Font weights

### Spacing and Layout

The spacing system includes:

- **Spacing scale**: 0 to 96 with 4px base unit
- **Border radius**: none to full
- **Shadows**: sm to 2xl with custom shadow variables
- **Z-index**: Predefined z-index values

#### Using Spacing

```tsx
// Using Tailwind classes
<div className="p-4 m-2 rounded-lg shadow-md">
  Content
</div>

// Using CSS variables
<div style={{ 
  padding: 'var(--dimensions-size-base)',
  borderRadius: 'var(--corner-radius-medium)',
  boxShadow: 'var(--shadow-md)'
}}>
  Content
</div>
```

## CSS Variables

The theme system defines CSS variables in `tailwind.css` that can be used throughout the application:

### Color Variables
- `--border-light`, `--border-medium`, `--border-dark`
- `--text-primary`, `--text-secondary`, `--text-tertiary`
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`

### Usage in CSS
```css
.custom-component {
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  box-shadow: var(--shadow-md);
}
```

## Migration from Hardcoded Values

The following hardcoded values have been replaced with theme variables:

### Colors
- `#5a66c1` → `var(--color-mode-text-icons-t-blue)`
- `#5b738b` → `var(--text-secondary)`
- `#e5e7eb` → `var(--border-light)`
- `#a9b4be` → `var(--border-medium)`
- `#00c850` → `var(--core-colors-green-green-6)`
- `#ee3939` → `var(--core-colors-red-red-6)`
- `#e76500` → `var(--core-colors-mango-mango-6)`

### Fonts
- `[font-family:'Tajawal',Helvetica]` → `font-tajawal`
- `[font-family:'Inter',Helvetica]` → `font-inter`

### Shadows
- `shadow-[0px_4px_10px_#0000000a]` → `shadow-[var(--shadow-md)]`
- `shadow-[0px_2.32px_0.77px_#0000000f,0px_2.32px_6.19px_#00000026,0px_0px_0px_0.77px_#0000000a]` → `shadow-[var(--shadow-sm)]`

## Best Practices

1. **Use CSS variables for consistency**: Prefer CSS variables over hardcoded values
2. **Use Tailwind classes when possible**: Leverage the extended Tailwind config
3. **Maintain fallbacks**: Always provide fallback values for CSS variables
4. **Document custom values**: When adding new theme values, document them
5. **Test across components**: Ensure theme changes work across all components

## Adding New Theme Values

To add new theme values:

1. Add the value to the appropriate theme file (`colors.ts`, `typography.ts`, or `spacing.ts`)
2. Add the corresponding CSS variable to `tailwind.css`
3. Update the Tailwind config if needed
4. Update this documentation

## Files Modified

The following files were modified during the theme refactoring:

- `src/theme/` - New theme system files
- `src/utils/theme.ts` - Theme utilities
- `tailwind.config.js` - Extended with new theme values
- `tailwind.css` - Added CSS variables
- `src/components/shared/Table/Table.tsx` - Replaced hardcoded border colors
- `src/screens/DriverDetails/sections/` - Replaced hardcoded colors and fonts
- `src/screens/Drivers/sections/` - Replaced hardcoded shadows
- `src/screens/PerolifeStationLocations/sections/` - Replaced hardcoded fonts and shadows
- `src/screens/AddDriver/sections/` - Replaced hardcoded colors

## Future Improvements

- Add dark mode support
- Add theme switching functionality
- Add more semantic color tokens
- Add animation/transition tokens
- Add responsive typography scales
