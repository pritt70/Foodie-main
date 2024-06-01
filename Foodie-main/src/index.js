import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'

import store from './Store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}> 
        
        <App />
        <Toaster
          // reverseOrder={false}
          // toastOptions={{
          //   style: {
          //     zIndex: 9999,
              
          //   },
          // }}
        />
      </Provider>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
