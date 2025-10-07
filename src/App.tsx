import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { GlobalStateProvider } from './context/GlobalStateContext';
import { ToastProvider, useToast } from './context/ToastContext';
import { ToastContainer } from './components/shared/Toast';
import { AuthListener } from './components/AuthListener';
import { useEffect } from 'react';
import { fetchCompaniesDrivers } from './services/firestore';
import './App.css'

function AppContent() {
  const { toasts, removeToast } = useToast();

  useEffect(() => {
    // Fetch companies-drivers data on app load
    fetchCompaniesDrivers().catch(error => {
      console.error('Failed to fetch companies-drivers:', error);
    });
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
