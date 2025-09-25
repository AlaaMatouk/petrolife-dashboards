import { useCallback } from 'react';
import { useGlobalState } from '../context/GlobalStateContext';
import { Driver, Car, Transaction, Notification, FilterState, PaginationState } from '../context/GlobalStateContext';

// Main hook that provides state and dispatch
export { useGlobalState };
export const useGlobalStateHook = useGlobalState;

// Specific hooks for different parts of the state
export const useAuth = () => {
  const { state, dispatch } = useGlobalState();
  
  const login = useCallback((user: any) => 
    dispatch({ type: 'SET_USER', payload: user }), [dispatch]);
  
  const logout = useCallback(() => 
    dispatch({ type: 'SET_USER', payload: null }), [dispatch]);
  
  const setLoading = useCallback((loading: boolean) => 
    dispatch({ type: 'SET_LOADING', payload: loading }), [dispatch]);
  
  return {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    login,
    logout,
    setLoading,
  };
};

export const useDrivers = () => {
  const { state, dispatch } = useGlobalState();
  
  const setDrivers = useCallback((drivers: Driver[]) => 
    dispatch({ type: 'SET_DRIVERS', payload: drivers }), [dispatch]);
  
  const addDriver = useCallback((driver: Driver) => 
    dispatch({ type: 'ADD_DRIVER', payload: driver }), [dispatch]);
  
  const updateDriver = useCallback((id: number, updates: Partial<Driver>) => 
    dispatch({ type: 'UPDATE_DRIVER', payload: { id, updates } }), [dispatch]);
  
  const deleteDriver = useCallback((id: number) => 
    dispatch({ type: 'DELETE_DRIVER', payload: id }), [dispatch]);
  
  const setPagination = useCallback((pagination: PaginationState) => 
    dispatch({ type: 'SET_PAGINATION', payload: { type: 'drivers', pagination } }), [dispatch]);
  
  const setCurrentPage = useCallback((page: number) => 
    dispatch({ type: 'SET_CURRENT_PAGE', payload: { type: 'drivers', page } }), [dispatch]);
  
  const setFilters = useCallback((filters: Partial<FilterState>) => 
    dispatch({ type: 'SET_FILTER', payload: { type: 'drivers', filter: filters } }), [dispatch]);
  
  const clearFilters = useCallback(() => 
    dispatch({ type: 'CLEAR_FILTERS', payload: 'drivers' }), [dispatch]);
  
  return {
    drivers: state.drivers,
    pagination: state.pagination.drivers,
    filters: state.filters.drivers,
    setDrivers,
    addDriver,
    updateDriver,
    deleteDriver,
    setPagination,
    setCurrentPage,
    setFilters,
    clearFilters,
  };
};

export const useCars = () => {
  const { state, dispatch } = useGlobalState();
  
  const setCars = useCallback((cars: Car[]) => 
    dispatch({ type: 'SET_CARS', payload: cars }), [dispatch]);
  
  const addCar = useCallback((car: Car) => 
    dispatch({ type: 'ADD_CAR', payload: car }), [dispatch]);
  
  const updateCar = useCallback((id: number, updates: Partial<Car>) => 
    dispatch({ type: 'UPDATE_CAR', payload: { id, updates } }), [dispatch]);
  
  const deleteCar = useCallback((id: number) => 
    dispatch({ type: 'DELETE_CAR', payload: id }), [dispatch]);
  
  const setPagination = useCallback((pagination: PaginationState) => 
    dispatch({ type: 'SET_PAGINATION', payload: { type: 'cars', pagination } }), [dispatch]);
  
  const setCurrentPage = useCallback((page: number) => 
    dispatch({ type: 'SET_CURRENT_PAGE', payload: { type: 'cars', page } }), [dispatch]);
  
  const setFilters = useCallback((filters: Partial<FilterState>) => 
    dispatch({ type: 'SET_FILTER', payload: { type: 'cars', filter: filters } }), [dispatch]);
  
  const clearFilters = useCallback(() => 
    dispatch({ type: 'CLEAR_FILTERS', payload: 'cars' }), [dispatch]);
  
  return {
    cars: state.cars,
    pagination: state.pagination.cars,
    filters: state.filters.cars,
    setCars,
    addCar,
    updateCar,
    deleteCar,
    setPagination,
    setCurrentPage,
    setFilters,
    clearFilters,
  };
};

export const useTransactions = () => {
  const { state, dispatch } = useGlobalState();
  
  const setTransactions = useCallback((transactions: Transaction[]) => 
    dispatch({ type: 'SET_TRANSACTIONS', payload: transactions }), [dispatch]);
  
  const addTransaction = useCallback((transaction: Transaction) => 
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction }), [dispatch]);
  
  const setPagination = useCallback((pagination: PaginationState) => 
    dispatch({ type: 'SET_PAGINATION', payload: { type: 'transactions', pagination } }), [dispatch]);
  
  const setCurrentPage = useCallback((page: number) => 
    dispatch({ type: 'SET_CURRENT_PAGE', payload: { type: 'transactions', page } }), [dispatch]);
  
  const setFilters = useCallback((filters: Partial<FilterState>) => 
    dispatch({ type: 'SET_FILTER', payload: { type: 'transactions', filter: filters } }), [dispatch]);
  
  const clearFilters = useCallback(() => 
    dispatch({ type: 'CLEAR_FILTERS', payload: 'transactions' }), [dispatch]);
  
  return {
    transactions: state.transactions,
    pagination: state.pagination.transactions,
    filters: state.filters.transactions,
    setTransactions,
    addTransaction,
    setPagination,
    setCurrentPage,
    setFilters,
    clearFilters,
  };
};

export const useNotifications = () => {
  const { state, dispatch } = useGlobalState();
  
  return {
    notifications: state.notifications,
    unreadCount: state.notifications.filter(n => !n.read).length,
    addNotification: (notification: Notification) => 
      dispatch({ type: 'ADD_NOTIFICATION', payload: notification }),
    markAsRead: (id: string) => 
      dispatch({ type: 'MARK_NOTIFICATION_READ', payload: id }),
    clearAll: () => dispatch({ type: 'CLEAR_NOTIFICATIONS' }),
  };
};

export const useUI = () => {
  const { state, dispatch } = useGlobalState();
  
  return {
    sidebarCollapsed: state.sidebarCollapsed,
    theme: state.theme,
    language: state.language,
    toggleSidebar: () => dispatch({ type: 'TOGGLE_SIDEBAR' }),
    setTheme: (theme: 'light' | 'dark') => dispatch({ type: 'SET_THEME', payload: theme }),
    setLanguage: (language: 'ar' | 'en') => dispatch({ type: 'SET_LANGUAGE', payload: language }),
  };
};

export const useError = () => {
  const { state, dispatch } = useGlobalState();
  
  return {
    error: state.error,
    setError: (error: string | null) => dispatch({ type: 'SET_ERROR', payload: error }),
    clearError: () => dispatch({ type: 'CLEAR_ERROR' }),
  };
};
