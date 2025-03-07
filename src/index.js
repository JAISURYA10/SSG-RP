import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Use createRoot to render the application
const root = createRoot(document.getElementById('root'));
root.render(<App />);
