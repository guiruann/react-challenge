import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setupServer } from './services/mirage/server';
import { AuthProvider } from './context/auth';
import { DataProvider } from './context/data';

if (process.env.NODE_ENV === 'development') {
  setupServer();
}

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
