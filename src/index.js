import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { worker } from './mocks/browser';


const root = ReactDOM.createRoot(document.getElementById('root'));
worker.start()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

