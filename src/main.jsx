import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import './index.css';

if(window.location.pathname.slice(0,4)=="/app"){
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
else{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
}
