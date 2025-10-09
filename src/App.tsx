import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { GlobalStateProvider } from './context/GlobalStateContext';
import { ToastProvider, useToast } from './context/ToastContext';
import { ToastContainer } from './components/shared/Toast';
import { AuthListener } from './components/AuthListener';
import { useEffect } from 'react';
import { fetchCompaniesDrivers, fetchCompaniesCars, fetchCurrentCompany, fetchCompaniesDriversTransfer, fetchOrders } from './services/firestore';
import { auth } from './config/firebase';
import { useAuth } from './hooks/useGlobalState';
import './App.css'

function AppContent() {
  const { toasts, removeToast } = useToast();
  const { setCompany } = useAuth();

  useEffect(() => {
    // Wait a bit for auth to be ready
    const timer = setTimeout(() => {
      const currentUser = auth.currentUser;
      
      if (currentUser) {
        // console.log('\n🔥 ========================================');
        // console.log('📊 FETCHING CURRENT USER DATA FROM FIRESTORE');
        // console.log('========================================');
        // console.log('👤 Current User Email:', currentUser.email);
        // console.log('🆔 Current User UID:', currentUser.uid);
        // console.log('========================================\n');

        // Fetch current company data FIRST
        fetchCurrentCompany()
          .then(company => {
            if (company) {
              // console.log('✅ Company data loaded successfully!');
              // Store company data in global state
              setCompany(company);
            } else {
              // console.log('⚠️ No company found for this user.');
            }
          })
          .catch(error => {
            console.error('❌ Failed to fetch company:', error);
          });

        // Fetch companies-drivers data
        fetchCompaniesDrivers()
          .then(drivers => {
            // console.log('\n✅ CURRENT USER DRIVERS DATA:');
            // console.log('========================================');
            // console.log(`📌 Total Drivers for ${currentUser.email}:`, drivers.length);
            // console.log('📋 Drivers Data:');
            // console.table(drivers);
            // console.log('========================================\n');
          })
          .catch(error => {
            console.error('❌ Failed to fetch companies-drivers:', error);
          });

        // Fetch companies-cars data
        fetchCompaniesCars()
          .then(cars => {
            // console.log('\n✅ CURRENT USER CARS DATA:');
            // console.log('========================================');
            // console.log(`📌 Total Cars for ${currentUser.email}:`, cars.length);
            // console.log('📋 Cars Data:');
            // console.table(cars);
            // console.log('========================================\n');
          })
          .catch(error => {
            console.error('❌ Failed to fetch companies-cars:', error);
          });

        // Fetch companies-drivers-transfer data
        fetchCompaniesDriversTransfer()
          .then(transfers => {
            // console.log('✅ Companies-Drivers-Transfer data loaded successfully!');
          })
          .catch(error => {
            console.error('❌ Failed to fetch companies-drivers-transfer:', error);
          });

        // Fetch orders data
        fetchOrders()
          .then(orders => {
            // console.log('✅ Orders data loaded successfully!');
          })
          .catch(error => {
            console.error('❌ Failed to fetch orders:', error);
          });
      } else {
        // console.log('⏳ Waiting for user to login...');
      }
    }, 1000); // Wait 1 second for auth to initialize

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AppRouter />
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <AuthListener>
          <ToastProvider>
            <AppContent />
          </ToastProvider>
        </AuthListener>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App
