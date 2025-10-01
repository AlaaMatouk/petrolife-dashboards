// Common Tailwind class combinations for consistency
export const commonClasses = {
  // Layout
  container: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-8 px-4",
  
  // Cards
  card: "bg-white rounded-lg shadow-sm border border-gray-200 p-6",
  cardHeader: "border-b border-gray-200 pb-4 mb-4",
  
  // Buttons
  button: {
    primary: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200",
    danger: "bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200",
  },
  
  // Forms
  input: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
  label: "block text-sm font-medium text-gray-700 mb-1",
  
  // Text
  heading: {
    h1: "text-3xl font-bold text-gray-900",
    h2: "text-2xl font-semibold text-gray-900",
    h3: "text-xl font-semibold text-gray-900",
    h4: "text-lg font-medium text-gray-900",
  },
  
  // RTL Support
  rtl: {
    text: "text-right [direction:rtl]",
    flex: "flex-row-reverse",
    margin: "mr-auto ml-0",
  },
  
  // Animations
  fadeIn: "animate-fade-in",
  transition: "transition-all duration-200 ease-in-out",
  
  // Spacing
  spacing: {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  },
} as const;

// Helper function to combine classes
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// RTL-aware class combinations
export const rtlClasses = {
  text: "text-right [direction:rtl]",
  flex: "flex-row-reverse",
  margin: "mr-auto ml-0",
  padding: "pr-4 pl-0",
} as const;
