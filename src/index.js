import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';


const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authSerivce={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);

