import React from 'react';
import ReactDOM from 'react-dom';

import './assets/scss/index.scss';
import App from './App';
import OSContext from 'store/OSContext';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <OSContext>
      <App />
    </OSContext>
  </React.StrictMode>,
  rootElement,
);
