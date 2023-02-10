import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login/Login';
import reportWebVitals from './reportWebVitals';
import ResourceManager from './components/ResourceManager';
import resources from './resources';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResourceManager.Provider value={resources}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ResourceManager.Provider>

// ReactDOM.render(
//   <ResourceManager.Provider value={resources}>
//     <App />
//   </ResourceManager.Provider>,
//   document.getElementById('root'),
);

