import React from 'react';
import { connect } from 'react-redux';
import { CountriesStateType } from '../../reducers/reducer';
import styles from './CountryCard.module.css';

type OwnProps = { index: number };

type Props = OwnProps & CountriesStateType;

const CountryCard: React.FC<Props> = ({ index, countries }) => {
  const country = countries[index];
  const info = country.translations.en;
  return (
    <div className={styles['card-wrapper']}>
      <div>{info.name}</div>
      <div>{country.placesCount}&nbsp;Must seen Places</div>
    </div>
  );
};

const mapStateToProps = (state: CountriesStateType) => state;

export default connect(mapStateToProps)(CountryCard);
