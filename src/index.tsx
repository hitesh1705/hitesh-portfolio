import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (container) {
createRoot(container as HTMLElement).render(
<React.StrictMode>
<App />
</React.StrictMode>
);
} else {
// Fallback: if root not found, log a helpful message
// This shouldn't happen in normal create-react-app setups.
// eslint-disable-next-line no-console
console.error('Root element not found');
}