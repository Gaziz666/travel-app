import React, { useEffect, useRef } from 'react';
import classes from './App.module.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import CountryPage from '../pages/country-page';
import Header from '../header/header';
import Footer from '../footer/footer';
import AuthPage from '../pages/Auth-page/Auth-page';
import * as actions from '../../actions/actions-country';
import { connect } from 'react-redux';
import { RootStateType } from '../../reducers/root-reducer';
import { Countries, CountriesStateType } from '../../reducers/country-reducer';
import CountriesService from '../../services/countries-service';

type MapDispatchToProps = {
  countriesLoaded: (
    value: Array<Countries>,
  ) => actions.CountriesLoadedActionType;
};

type Props = CountriesStateType & MapDispatchToProps;

const App: React.FC<Props> = ({
  countries,
  selectedCountryIndex,
  countriesLoaded,
}) => {
  const appDiv = useRef(null);
  useEffect(() => {
    const countryService = new CountriesService();
    countryService.getAllCountry().then((countries) => {
      countriesLoaded(countries.data);
    });
  }, [countriesLoaded]);

  useEffect(() => {
    const countryImg = () => {
      if (countries.length > 0) {
        const img = new Image();
        const url = countries[selectedCountryIndex].imgUrl;
        img.src = url;
        console.log('before');
        img.onload = () => {
          if (appDiv) {
            console.log(appDiv.current);
            (appDiv.current! as HTMLElement).style.backgroundImage = `url(${url})`;
          }
        };
      }
    };
    countryImg();
  }, [selectedCountryIndex]);

  return (
    <Router basename="/travel-app">
      <div className={classes.app}>
        <div ref={appDiv} className={classes.app__container}>
          <Header />
          <main className={classes.app__main}>
            <Switch>
              <Route path="/main" component={MainPage} />
              <Route path="/country" component={CountryPage} />
              <Route path="/" component={AuthPage} exact />
            </Switch>
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(App);
