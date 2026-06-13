import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const rootElement = document.getElementById('root');

try {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  rootElement.innerHTML = `
    <main class="mount-error">
      <h1>MediaCloudHub could not load</h1>
      <p>${error instanceof Error ? error.message : 'Unknown application error'}</p>
    </main>
  `;
  throw error;
}
