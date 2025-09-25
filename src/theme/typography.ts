/**
 * Typography theme definitions for the Petrolife Dashboard
 * This file centralizes all font families, sizes, and typography values
 */

export const typography = {
  // Font families
  fontFamily: {
    primary: 'Tajawal, Helvetica, Arial, sans-serif',
    secondary: 'Inter, Helvetica, Arial, sans-serif',
    system: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  // Font sizes
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },

  // Font weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Typography scales (matching existing design system)
  scales: {
    // Body text
    body1: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.2px',
    },
    body2: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '160%',
      letterSpacing: '0.25px',
    },
    
    // Captions
    caption1: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '160%',
      letterSpacing: '0.4px',
    },
    caption2: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '160%',
      letterSpacing: '0.4px',
    },
    
    // Headings
    h1: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '48px',
      fontWeight: 300,
      lineHeight: '52px',
      letterSpacing: '0px',
    },
    h2: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '24px',
      fontWeight: 800,
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    h3: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    h4: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '18px',
      fontWeight: 800,
      lineHeight: '24px',
      letterSpacing: '0.16px',
    },
    h5: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
      letterSpacing: '0px',
    },
    h6: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '20px',
      letterSpacing: '0px',
    },
    h7: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '16px',
      letterSpacing: '0px',
    },
    
    // Subtitles
    subtitle1: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
      letterSpacing: '0px',
    },
    subtitle2: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '160%',
      letterSpacing: '0.1px',
    },
    
    // Fine print
    finePrint: {
      fontFamily: 'Tajawal, Helvetica',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0px',
    },
  },
} as const;

// Helper function to get typography scale
export const getTypographyScale = (scale: keyof typeof typography.scales) => {
  return typography.scales[scale];
};

// Helper function to create CSS classes for typography
export const createTypographyClass = (scale: keyof typeof typography.scales) => {
  const scaleProps = typography.scales[scale];
  return {
    fontFamily: scaleProps.fontFamily,
    fontSize: scaleProps.fontSize,
    fontWeight: scaleProps.fontWeight,
    lineHeight: scaleProps.lineHeight,
    letterSpacing: scaleProps.letterSpacing,
  };
};
