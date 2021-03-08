import React from 'react';
import classes from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/main-page';
import CountryPage from '../pages/country-page';
import Header from '../header/header';
import Footer from '../footer/footer';
import CurrencyWidget from '../currencyWidget/CurrencyWidget.js'

const App: React.FC = () => {
  return (
    <Router basename="/travel-app">
      <div className={classes.app}>
        <div className={classes.app__container}>
          <Header />
          <main className={classes.app__main}>
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/country" component={CountryPage} />
            </Switch>

          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
