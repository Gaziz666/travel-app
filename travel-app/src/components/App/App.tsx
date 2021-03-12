import React, { useEffect, useRef } from 'react';
import classes from './App.module.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import CountryPage from '../pages/country-page';
import Header from '../header/header';
import Footer from '../footer/footer';
import NewTabs from '../tabs/tabs';
import AuthPage from '../pages/Auth-page/Auth-page';
import * as actions from '../../actions/actions-country';
import { connect } from 'react-redux';
import { RootStateType } from '../../reducers/root-reducer';
import { Countries } from '../../reducers/country-reducer';
import CountriesService from '../../services/countries-service';

export const routs = {
  main: '/main',
  auth: '/auth',
  country: '/country',
};

type MapDispatchToProps = {
  countriesLoaded: (
    value: Array<Countries>,
  ) => actions.CountriesLoadedActionType;
};

type Props = RootStateType & MapDispatchToProps;

const App: React.FC<Props> = ({
  countryState,
  authStatusState,
  countriesLoaded,
}) => {
  const appDiv = useRef(null);
  const { countries, selectedCountryIndex } = countryState;
  const { mainIsOpen } = authStatusState;
  useEffect(() => {
    const countryService = new CountriesService();
    countryService.getAllCountry().then((countries) => {
      countriesLoaded(countries.data);
    });
  }, [countriesLoaded]);

  useEffect(() => {
    const countryImg = () => {
      if (countries.length > 0 && mainIsOpen) {
        const img = new Image();
        const url = countries[selectedCountryIndex].imgUrl;
        img.src = url;
        img.onload = () => {
          if (appDiv && mainIsOpen) {
            (appDiv.current! as HTMLElement).style.backgroundImage = `url(${url})`;
          }
        };
      } else if (countries.length > 0) {
        (appDiv.current! as HTMLElement).style.backgroundImage = '';
      }
    };
    countryImg();
  }, [countries, selectedCountryIndex, mainIsOpen]);

  return (
    <Router basename="/travel-app">
      <div className={classes.app}>
        <div ref={appDiv} className={classes.app__container}>
          <Header />
          <main className={classes.app__main}>
            <Switch>
              <Route path={routs.main} component={MainPage} />
              <Route path={`${routs.country}/:id`} component={CountryPage} />
              <Route path={routs.auth} component={AuthPage} exact />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state;
};

export default connect(mapStateToProps, actions)(App);
