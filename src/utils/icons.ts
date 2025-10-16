/**
 * Icon utility functions for managing and displaying icons
 */

export interface IconInfo {
  name: string;
  filename: string;
  path: string;
  category?: string;
}

/**
 * List of all available icons in the project
 * Update this array when adding new icons to the src/assets/imgs/icons/ directory
 */
export const ICON_LIST: string[] = [
  'account-setting.svg',
  'analytics.svg',
  'angle-left.svg',
  'arrow-circle-down.svg',
  'battery-orange.svg',
  'building.svg',
  'calendar.svg',
  'car-front.svg',
  'car-side-green.svg',
  'car-side-orange.svg',
  'car-side-purple.svg',
  'car-side.svg',
  'car-wash-orange.svg',
  'car-wheel-orange.svg',
  'coupon.svg',
  'customer-support.svg',
  'dashboard-orange.svg',
  'dashboard.svg',
  'document-clock.svg',
  'document-download.svg',
  'droplet-orange.svg',
  'invoice.svg',
  'left-arrow.svg',
  'lightbulb-orange.svg',
  'location-pin.svg',
  'money-bag-orange.svg',
  'notification.svg',
  'petrol-station-orange.svg',
  'petrol-station.svg',
  'product-loading.svg',
  'rocket-orange.svg',
  'saudi-riyal.svg',
  'search.svg',
  'truck-driver-orange.svg',
  'truck-driver.svg',
  'user-group-orange.svg',
  'user-group.svg',
];

/**
 * Icon categories for better organization
 */
export const ICON_CATEGORIES = {
  NAVIGATION: ['left-arrow.svg', 'angle-left.svg', 'arrow-circle-down.svg'],
  VEHICLES: ['car-front.svg', 'car-side.svg', 'car-side-green.svg', 'car-side-orange.svg', 'car-side-purple.svg', 'car-wash-orange.svg', 'car-wheel-orange.svg', 'truck-driver.svg', 'truck-driver-orange.svg'],
  DASHBOARD: ['dashboard.svg', 'dashboard-orange.svg', 'analytics.svg'],
  USERS: ['user-group.svg', 'user-group-orange.svg', 'account-setting.svg'],
  FINANCIAL: ['money-bag-orange.svg', 'saudi-riyal.svg', 'invoice.svg', 'coupon.svg'],
  LOCATIONS: ['location-pin.svg', 'petrol-station.svg', 'petrol-station-orange.svg', 'building.svg'],
  ACTIONS: ['search.svg', 'notification.svg', 'customer-support.svg', 'document-download.svg', 'document-clock.svg', 'product-loading.svg'],
  ENERGY: ['battery-orange.svg', 'lightbulb-orange.svg', 'droplet-orange.svg', 'rocket-orange.svg'],
  GENERAL: ['calendar.svg']
} as const;

/**
 * Get the full path for an icon
 */
export const getIconPath = (filename: string): string => {
  return `/src/assets/imgs/icons/${filename}`;
};

/**
 * Convert filename to display name
 */
export const getDisplayName = (filename: string): string => {
  return filename
    .replace('.svg', '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
};

/**
 * Get category for an icon
 */
export const getIconCategory = (filename: string): string => {
  for (const [category, icons] of Object.entries(ICON_CATEGORIES)) {
    if (icons.includes(filename as never)) {
      return category.toLowerCase();
    }
  }
  return 'general';
};

/**
 * Process icon list into IconInfo objects
 */
export const processIcons = (iconList: string[] = ICON_LIST): IconInfo[] => {
  return iconList.map(filename => ({
    name: getDisplayName(filename),
    filename,
    path: getIconPath(filename),
    category: getIconCategory(filename)
  }));
};

/**
 * Filter icons by search term
 */
export const filterIcons = (icons: IconInfo[], searchTerm: string): IconInfo[] => {
  if (!searchTerm.trim()) return icons;
  
  const term = searchTerm.toLowerCase();
  return icons.filter(icon =>
    icon.name.toLowerCase().includes(term) ||
    icon.filename.toLowerCase().includes(term) ||
    icon.category?.toLowerCase().includes(term)
  );
};

/**
 * Get icons by category
 */
export const getIconsByCategory = (category: string): IconInfo[] => {
  const categoryIcons = ICON_CATEGORIES[category.toUpperCase() as keyof typeof ICON_CATEGORIES] || [];
  return processIcons([...categoryIcons]);
};

/**
 * Get all available categories
 */
export const getCategories = (): string[] => {
  return Object.keys(ICON_CATEGORIES).map(key => key.toLowerCase());
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};
