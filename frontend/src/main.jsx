import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import { StoreProvider } from './context/StoreContext'; // Import the context provider

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your App with BrowserRouter */}
      <StoreProvider> {/* Ensure StoreProvider wraps the application */}
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);