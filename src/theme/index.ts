/**
 * Main theme file that exports all theme definitions
 * This is the central entry point for all design tokens
 */

export * from './colors';
export * from './typography';
export * from './spacing';

// Re-export commonly used values for convenience
export { colors as themeColors } from './colors';
export { typography as themeTypography } from './typography';
export { spacing as themeSpacing } from './spacing';

// Theme object that combines all design tokens
export const theme = {
  colors: require('./colors').colors,
  typography: require('./typography').typography,
  spacing: require('./spacing').spacing,
  borderRadius: require('./spacing').borderRadius,
  shadows: require('./spacing').shadows,
  zIndex: require('./spacing').zIndex,
  breakpoints: require('./spacing').breakpoints,
} as const;

// Type definitions for theme
export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ThemeTypography = typeof theme.typography;
export type ThemeSpacing = typeof theme.spacing;
