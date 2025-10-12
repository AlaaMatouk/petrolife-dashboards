import { useEffect, useState } from 'react';

/**
 * Hook to track if the app has been initialized
 * This is now a simple flag that returns true immediately
 * Data fetching is handled by individual screens from Firestore
 */
export const useDataInitialization = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Mark as initialized immediately
    // Individual screens will handle their own data fetching
    setIsInitialized(true);
  }, []);

  return {
    isInitialized,
  };
};
