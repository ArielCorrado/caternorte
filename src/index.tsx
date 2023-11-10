import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styles/generalStyles.css";
import App from './App';
import { SpinnerProvider } from './context/spinnerContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
    <SpinnerProvider>
        <App />
    </SpinnerProvider>
    // </React.StrictMode>
);

