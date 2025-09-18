/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basewhite: "var(--basewhite)",
        "color-mode-surface-bg-icon-gray":
          "var(--color-mode-surface-bg-icon-gray)",
        "color-mode-surface-bg-screen": "var(--color-mode-surface-bg-screen)",
        "color-mode-surface-primary-blue":
          "var(--color-mode-surface-primary-blue)",
        "color-mode-surface-purple-bg": "var(--color-mode-surface-purple-bg)",
        "color-mode-text-icons-t-blue": "var(--color-mode-text-icons-t-blue)",
        "color-mode-text-icons-t-btn-negative":
          "var(--color-mode-text-icons-t-btn-negative)",
        "color-mode-text-icons-t-green": "var(--color-mode-text-icons-t-green)",
        "color-mode-text-icons-t-orange":
          "var(--color-mode-text-icons-t-orange)",
        "color-mode-text-icons-t-placeholder":
          "var(--color-mode-text-icons-t-placeholder)",
        "color-mode-text-icons-t-primary-gray":
          "var(--color-mode-text-icons-t-primary-gray)",
        "color-mode-text-icons-t-red": "var(--color-mode-text-icons-t-red)",
        "color-mode-text-icons-t-sec": "var(--color-mode-text-icons-t-sec)",
        "color-primitives-blue-grey-10": "var(--color-primitives-blue-grey-10)",
        "color-primitives-cool-black": "var(--color-primitives-cool-black)",
        "color-shades-plain-dark": "var(--color-shades-plain-dark)",
        "color-shades-shades-10": "var(--color-shades-shades-10)",
        "core-colors-grey-grey-4": "var(--core-colors-grey-grey-4)",
        "core-colors-grey-grey-9": "var(--core-colors-grey-grey-9)",
        "core-colors-mango-mango-6": "var(--core-colors-mango-mango-6)",
        "core-colors-red-red-6": "var(--core-colors-red-red-6)",
      },
      fontFamily: {
        "body-body-1": "var(--body-body-1-font-family)",
        "body-body-2": "var(--body-body-2-font-family)",
        "caption-caption-1": "var(--caption-caption-1-font-family)",
        "caption-caption-2": "var(--caption-caption-2-font-family)",
        "fine-print-small-medium-underline":
          "var(--fine-print-small-medium-underline-font-family)",
        "headings-h1-h6-heading-5":
          "var(--headings-h1-h6-heading-5-font-family)",
        "headings-h1-h6-heading-6":
          "var(--headings-h1-h6-heading-6-font-family)",
        "headline-h3l": "var(--headline-h3l-font-family)",
        "headline-h5b": "var(--headline-h5b-font-family)",
        "headline-h6-m": "var(--headline-h6-m-font-family)",
        "headline-h7": "var(--headline-h7-font-family)",
        "headline-h8": "var(--headline-h8-font-family)",
        "subtitle-subtitle-2": "var(--subtitle-subtitle-2-font-family)",
        "subtitle-subtitle-3": "var(--subtitle-subtitle-3-font-family)",
      },
    },
  },
  plugins: [],
};
