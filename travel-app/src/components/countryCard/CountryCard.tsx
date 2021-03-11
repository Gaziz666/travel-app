import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CountriesStateType } from '../../reducers/country-reducer';
import { RootStateType } from '../../reducers/root-reducer';
import * as actions from '../../actions/actions-country';
import { routs } from '../App/App';
import { tabs } from '../pages/country-page';
import styles from './CountryCard.module.css';

type MapDispatchToProps = {
  countrySelect: (value: number) => actions.CountrySelectActionType;
};

type OwnProps = { index: number };

type Props = OwnProps & CountriesStateType & MapDispatchToProps;

const CountryCard: React.FC<Props> = ({ index, countries, countrySelect }) => {
  const country = countries[index];
  const info = country.translations.en;
  const img = country.smallImg;

  const selectCountry = () => {
    countrySelect(index);
  };
  return (
    <Link to={`${routs.country}/${tabs.inspire}`}>
      <div
        className={styles['card-wrapper']}
        style={{ backgroundImage: `url('${img}')` }}
        onClick={selectCountry}
      >
        <div>{info.name}</div>
        <div>{country.placesCount}&nbsp;Must seen Places</div>
      </div>
    </Link>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(CountryCard);
