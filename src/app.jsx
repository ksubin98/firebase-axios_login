import React from 'react';
import './app.module.css';
import Login from './components/login/login';
import styles from './app.module.css';
import SignUp from './components/signup/signup';
import { auth } from 'firebase';

function App({ authSerivce }) {
  return (
    <div className={styles.app}>
      <Login authService={authSerivce}/>
      <SignUp authService={authSerivce} />
    </div>
  )
}

export default App;
