/**
 * Theme utility functions for consistent styling across the application
 */

import { colors, typography, spacing } from '../theme';

// Color utilities
export const getColor = (colorPath: string, fallback?: string): string => {
  const keys = colorPath.split('.');
  let current: any = colors;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return fallback || colorPath;
    }
  }
  
  return typeof current === 'string' ? current : fallback || colorPath;
};

// CSS variable helpers
export const cssVar = (variable: string, fallback?: string): string => {
  return `var(--${variable}${fallback ? `, ${fallback}` : ''})`;
};

// Common color mappings
export const themeColors = {
  primary: cssVar('color-mode-text-icons-t-blue'),
  secondary: cssVar('text-secondary'),
  success: cssVar('core-colors-green-green-6'),
  warning: cssVar('core-colors-mango-mango-6'),
  error: cssVar('core-colors-red-red-6'),
  textPrimary: cssVar('text-primary'),
  textSecondary: cssVar('text-secondary'),
  textTertiary: cssVar('text-tertiary'),
  borderLight: cssVar('border-light'),
  borderMedium: cssVar('border-medium'),
  borderDark: cssVar('border-dark'),
} as const;

// Typography utilities
export const getTypographyScale = (scale: keyof typeof typography.scales) => {
  return typography.scales[scale];
};

// Spacing utilities
export const getSpacing = (key: keyof typeof spacing): string => {
  return spacing[key];
};

// Common class name generators
export const createTextClass = (color: keyof typeof themeColors, size?: string) => {
  return `text-[${themeColors[color]}] ${size || ''}`;
};

export const createBorderClass = (color: keyof typeof themeColors, width = '1px') => {
  return `border-[${width}] border-solid border-[${themeColors[color]}]`;
};

export const createBackgroundClass = (color: keyof typeof themeColors) => {
  return `bg-[${themeColors[color]}]`;
};
