
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

// Global handler for unhandled promise rejections (often API calls)
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Rejection:', event.reason);
  // Optional: Add logic to show a global notification toast
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
