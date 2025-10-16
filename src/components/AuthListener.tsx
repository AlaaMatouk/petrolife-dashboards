import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useGlobalState } from '../context/GlobalStateContext';
import { fetchCurrentCompany } from '../services/firestore';

export const AuthListener: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { dispatch } = useGlobalState();

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        dispatch({
          type: 'SET_USER',
          payload: {
            id: user.uid,
            name: user.displayName || user.email || "مستخدم",
            email: user.email || "",
            avatar: user.photoURL || "",
            role: "admin",
          },
        });
        dispatch({ type: 'SET_AUTHENTICATED', payload: true });
        // console.log('User authenticated:', user.email);

        // Immediately fetch company data when user is authenticated
        try {
          const company = await fetchCurrentCompany();
          if (company) {
            dispatch({ type: 'SET_COMPANY', payload: company as any });
            // console.log('✅ Company data loaded:', company);
          }
        } catch (error) {
          console.error('❌ Failed to fetch company data:', error);
        }
      } else {
        // User is signed out
        dispatch({ type: 'SET_USER', payload: null });
        dispatch({ type: 'SET_COMPANY', payload: null });
        dispatch({ type: 'SET_AUTHENTICATED', payload: false });
        // console.log('User signed out');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return <>{children}</>;
};

