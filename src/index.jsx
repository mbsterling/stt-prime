import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import ResourceManager from './components/ResourceManager';
import AuthContext from './components/Auth/auth-context';
import resources from './resources';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ResourceManager.Provider value={resources}>
    <React.StrictMode>
      <AuthContext.Provider value={{isLoggedin: false, onLogin: null}}>
        <App />
      </AuthContext.Provider>
    </React.StrictMode>
  </ResourceManager.Provider>

  /*
    // ReactDOM.render(
    //   <ResourceManager.Provider value={resources}>
    //     <App />
    //   </ResourceManager.Provider>,
    //   document.getElementById('root'),
  */

);

