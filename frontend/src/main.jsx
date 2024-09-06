import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// index.js or App.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import { UserContext } from './Context.jsx';
import './global.css'

const checkCustomer=(localStorage.getItem('customer_login'));
const checkVendor=(localStorage.getItem('vendor_login'));


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <UserContext.Provider value={{checkCustomer,checkVendor}} >
        <App />
      </UserContext.Provider>
    </Router>
  </>,
)
