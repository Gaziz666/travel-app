import React from 'react';
import classes from './App.module.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/main-page';
import CountryPage from '../pages/country-page';
import Header from '../header/header';
import Footer from '../footer/footer';
import AuthPage from '../pages/Auth-page/Auth-page';

const App: React.FC = () => {
  return (
    <Router basename="/travel-app">
      <div className={classes.app}>
        <div className={classes.app__container}>
          <Header />
          <main className={classes.app__main}>
            <Switch>
              <Route path="/main" component={MainPage} />
              <Route path="/country" component={CountryPage} />
              <Route path="/" component={AuthPage} exact />
            </Switch>

          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
