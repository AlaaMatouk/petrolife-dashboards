import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { GlobalStateProvider } from './context/GlobalStateContext';
import { ToastProvider, useToast } from './context/ToastContext';
import { ToastContainer } from './components/shared/Toast';
import './App.css'

function AppContent() {
  const { toasts, removeToast } = useToast();

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
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App
