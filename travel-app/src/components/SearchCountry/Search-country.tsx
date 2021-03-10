import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CountriesService from '../../services/countries-service';
import * as actions from '../../actions/actions-country';
import { RootStateType } from '../../reducers/root-reducer';
import styles from './search-country.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { AuthButton } from '../AuthButton/Auth-button';
import { Countries, CountriesStateType } from '../../reducers/country-reducer';

type MapDispatchToProps = {
  countriesLoaded: (
    value: Array<Countries>,
  ) => actions.CountriesLoadedActionType;
  countrySelect: (value: number) => actions.CountrySelectActionType;
};
type Props = MapDispatchToProps & CountriesStateType;

const SearchCountry: React.FC<Props> = ({
  countriesLoaded,
  countrySelect,
  countries,
  selectedCountryIndex,
  selectedLanguage,
}) => {
  useEffect(() => {
    const countryService = new CountriesService();
    countryService.getAllCountry().then((countries) => {
      countriesLoaded(countries.data);
    });
  }, [countriesLoaded]);

  const renderOptions = () => {
    return countries.map((country, index) => {
      return (
        <MenuItem value={index} key={country._id}>
          {country.translations[selectedLanguage].name}
        </MenuItem>
      );
    });
  };

  const inputChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    countrySelect(Number(event.target.value));
  };

  return (
    <div className={styles['search-country-wrapper']}>
      <FormControl className={styles['search-form']}>
        <Select
          value={selectedCountryIndex}
          onChange={inputChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled className={styles['select-placeholder']}>
            Choose where you’d like to go
          </MenuItem>
          {renderOptions()}
        </Select>
        <FormHelperText>Choose where you’d like to go</FormHelperText>
      </FormControl>
      <div className={styles['search-button-wrapper']}>
        <AuthButton
          value="search country"
          handleClick={(event) => console.log(event)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(SearchCountry);
