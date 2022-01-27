import React from 'react';
import './app.module.css';
import Login from './components/login/login';
import styles from './app.module.css';
import SignUp from './components/signup/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App({ authSerivce }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
            <Route exact path={['/', '/home']}>
              <Login authService={authSerivce}/>
            </Route>
            <Route path="/signup">
              <SignUp authService={authSerivce} />
            </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
