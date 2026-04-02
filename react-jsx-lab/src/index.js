import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

// update menggunakan cara berbeda karena tidak muncul pada index.html(terlihat blank)