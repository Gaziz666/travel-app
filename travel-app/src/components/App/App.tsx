import React from 'react';
import classes from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/main-page';
import CountryPage from '../pages/country-page';

const App: React.FC = () => {
  return (
    <Router basename="/travel-app">
      <div className={classes.app}>
        <h1 className={classes.app__title}>Travel-app</h1>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/country" component={CountryPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
