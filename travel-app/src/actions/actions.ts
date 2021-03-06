import { Countries } from '../reducers/reducer';

const COUNTRIES_LOAD = 'COUNTRIES_LOAD';

const countriesLoaded = (newCountries: Array<Countries>) => {
  return {
    type: COUNTRIES_LOAD,
    payload: newCountries,
  };
};

export type CountriesLoadedActionType = {
  type: string;
  payload: Array<Countries>;
};

export { countriesLoaded, COUNTRIES_LOAD };
