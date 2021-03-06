import React from 'react';
import classes from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/main-page';
import CountryPage from '../pages/country-page';
import Header from '../header/header';

const App: React.FC = () => {
  return (
    <Router basename="/travel-app">
      <div className={classes.app}>
        <div className={classes.app__container}>
          <Header />
          <main>
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/country" component={CountryPage} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
