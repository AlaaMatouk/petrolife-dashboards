import { useOutletContext } from 'react-router-dom';

interface LayoutContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useLayoutContext = () => {
  return useOutletContext<LayoutContextType>();
};

