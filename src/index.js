import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //共享全局的状态
  <LanguageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageProvider>
);



