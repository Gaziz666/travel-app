import React, { Fragment } from 'react';
import classes from './country-list-item.module.css';

const CountryListItem: React.FC<{
  country: { name: string; capital: string };
}> = ({ country }) => {
  const { name, capital } = country;
  return (
    <Fragment>
      <span>{name} - </span>
      <span>{capital}</span>
    </Fragment>
  );
};

export default CountryListItem;
