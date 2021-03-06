import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CountriesService from '../../services/countries-service';
import * as actions from '../../actions/actions';
import { Countries, CountriesStateType } from '../../reducers/reducer';
import CountryCard from '../countryCard/CountryCard';
// import styles from './CountryList.module.css';

type MapDispatchToProps = {
  countriesLoaded: (
    value: Array<Countries>,
  ) => actions.CountriesLoadedActionType;
};
type Props = MapDispatchToProps & CountriesStateType;

const CountriesList: React.FC<Props> = ({ countriesLoaded, countries }) => {
  useEffect(() => {
    const countryService = new CountriesService();
    countryService.getAllCountry().then((countries) => {
      countriesLoaded(countries.data);
    });
  }, [countriesLoaded]);

  const renderCard = () => {
    return countries.map((country, index) => {
      return <CountryCard index={index} key={country._id} />;
    });
  };

  return (
    <div>
      <div>{renderCard()}</div>
    </div>
  );
};

const mapStateToProps = (state: CountriesStateType) => state;

export default connect(mapStateToProps, actions)(CountriesList);
