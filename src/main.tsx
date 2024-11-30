import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster
      position='top-right'
      richColors
      closeButton
      duration={7000}
      toastOptions={{
        style: { height: '60px' },
      }}
    />
    <App />
  </StrictMode>
);
