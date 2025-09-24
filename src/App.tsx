import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { GlobalStateProvider } from './context/GlobalStateContext';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <AppRouter />
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App
