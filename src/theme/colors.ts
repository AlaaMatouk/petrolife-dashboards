/**
 * Color theme definitions for the Petrolife Dashboard
 * This file centralizes all color values used throughout the application
 */

export const colors = {
  // Primary colors
  primary: {
    50: '#f0f2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#5a66c1', // Main primary color
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  
  // Secondary colors
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#5b738b', // Main secondary color
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },

  // Gray scale
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb', // Used in Table component
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },

  // Status colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#00c850', // Main success color
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#e76500', // Main warning color
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ee3939', // Main error color
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  // Neutral colors
  neutral: {
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
  },

  // Background colors
  background: {
    primary: '#f6f9fc',
    secondary: '#ffffff',
    tertiary: '#f5f6f7',
  },

  // Border colors
  border: {
    light: '#e5e7eb',
    medium: '#a9b4be',
    dark: '#5b738b',
  },

  // Text colors
  text: {
    primary: '#213547',
    secondary: '#5b738b',
    tertiary: '#a9b4be',
    placeholder: '#9ca3af',
    disabled: '#d1d5db',
  },

  // Form colors
  form: {
    // Active forms
    activeLabel: '#5b738b',        // Medium blue-gray for active form labels
    activeInputText: '#5b738b',    // Medium blue-gray for text while typing
    activePlaceholder: '#a9b4be',  // Light gray-blue for placeholder text
    
    // Read-only forms
    readonlyLabel: '#a9b4be',      // Light gray-blue for read-only form labels
    readonlyInputText: '#5b738b',  // Medium blue-gray for read-only input text (smaller font weight)
    
    // Section and header titles
    sectionTitle: '#5b738b',       // Medium blue-gray for section titles
    headerTitle: '#5b738b',        // Medium blue-gray for header titles
  },
} as const;

// CSS variable mappings for existing design system
export const cssVariables = {
  // Map to existing CSS variables where possible
  'color-mode-text-icons-t-primary-gray': 'var(--core-colors-grey-grey-9)',
  'color-mode-text-icons-t-sec': 'var(--core-colors-grey-grey-6)',
  'color-mode-text-icons-t-placeholder': 'var(--core-colors-grey-grey-4)',
  'color-mode-text-icons-t-blue': 'var(--color-mode-text-icons-t-blue)',
  'color-mode-text-icons-t-red': 'var(--core-colors-red-red-6)',
  'color-mode-text-icons-t-green': 'var(--core-colors-green-green-6)',
  'color-mode-text-icons-t-orange': 'var(--core-colors-mango-mango-6)',
  'color-mode-surface-bg-screen': 'var(--color-mode-surface-bg-screen)',
  'color-mode-surface-bg-icon-gray': 'var(--color-mode-surface-bg-icon-gray)',
  
  // Form color variables
  'form-active-label-color': '#5b738b',
  'form-active-input-text-color': '#5b738b',
  'form-active-placeholder-color': '#a9b4be',
  'form-readonly-label-color': '#a9b4be',
  'form-readonly-input-text-color': '#5b738b',
  'form-section-title-color': '#5b738b',
  'form-header-title-color': '#5b738b',
} as const;

// Helper function to get color with fallback
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
