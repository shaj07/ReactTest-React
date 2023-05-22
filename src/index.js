import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Dashboard} from './components/dashboard'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
ReactDOM.render(
  <Router>

  <React.StrictMode>
    <Routes>  <Route path="/" element={<App />} />
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

  </React.StrictMode>
 
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
