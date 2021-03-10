import React from 'react';
import CountriesList from '../../CountriesList/CountriesList';
import CountryName from '../../Country-name/Country-name';
import styles from './main-page.module.css'

const MainPage: React.FC = () => {
  return (
    <div className={styles['main-page-container']}>
      <CountryName />
      <CountriesList />
    </div>
  );
};

export default MainPage;
