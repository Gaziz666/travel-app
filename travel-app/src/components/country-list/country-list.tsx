import React, { Component } from 'react';
import classes from './country-list.module.css';
import CountryListItem from '../country-list-item/country-list-item';
import { connect } from 'react-redux';

import withCountriesService from '../hoc/with-countries-service';
import { countriesLoaded } from '../../actions/actions';
import compose from '../../utils/compose';

// export type CountriesTypes = Array<{
//   id: number;
//   name: string;
//   capital: string;
// }>;

class CountryList extends React.Component<any> {
  componentDidMount() {
    const { countriesService } = this.props;
    const data = countriesService.getCountries();

    this.props.countriesLoaded(data);
  }

  render() {
    const { countries } = this.props;
    return (
      <ul>
        {countries.map((country: any) => {
          return (
            <li key={country.id}>
              <CountryListItem country={country} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ countries }: any) => {
  return {
    countries,
  };
};

const mapDispatchToProps = {
  countriesLoaded,
};

export default compose(
  withCountriesService(),
  connect(mapStateToProps, mapDispatchToProps),
)(CountryList);
