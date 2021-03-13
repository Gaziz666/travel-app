import { Countries, LanguageType } from '../reducers/country-reducer';

const COUNTRIES_LOAD = 'COUNTRIES_LOAD';
const COUNTRY_SELECT = 'COUNTRY_SELECT';
const LANGUAGE_SELECT = 'LANGUAGE_SELECT';
const SEARCH_CHANGE = 'SEARCH_CHANGE;';

const countriesLoaded = (newCountries: Array<Countries>) => {
  return {
    type: COUNTRIES_LOAD,
    payload: newCountries,
  };
};

const countrySelect = (value: number) => {
  return {
    type: COUNTRY_SELECT,
    payload: value,
  };
};

const languageSelect = (value: LanguageType) => {
  return {
    type: LANGUAGE_SELECT,
    payload: value,
  };
};

const searchInputChange = (value: string) => {
  return {
    type: SEARCH_CHANGE,
    payload: value,
  };
};

export type CountriesLoadedActionType = {
  type: string;
  payload: Array<Countries>;
};

export type CountrySelectActionType = {
  type: string;
  payload: number;
};

export type languageSelectActionType = {
  type: string;
  payload: LanguageType;
};

export type SearchChangeActionType = {
  type: string;
  payload: string;
};

export {
  countriesLoaded,
  countrySelect,
  languageSelect,
  searchInputChange,
  COUNTRIES_LOAD,
  COUNTRY_SELECT,
  LANGUAGE_SELECT,
  SEARCH_CHANGE,
};
