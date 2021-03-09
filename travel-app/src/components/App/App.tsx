import React from 'react';
import classes from './App.module.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/main-page';
import CountryPage from '../pages/country-page';
import Header from '../header/header';
import Footer from '../footer/footer';
import AuthPage from '../pages/Auth-page/Auth-page';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Router basename="/travel-app">
      <div className={classes.app}>
        <div className={classes.app__container}>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('ru')}>RU</button>
          <div>{t('main-page.header-link.about')}</div>
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
