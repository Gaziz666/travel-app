import {
  COUNTRIES_LOAD,
  COUNTRY_SELECT,
  LANGUAGE_SELECT,
} from '../actions/actions-country';

export type Countries = {
  _id: string;
  imgUrl: string;
  flagUrl: string;
  videoUrl: string;
  coordinate: {
    x: number;
    y: number;
  };
  placesCount: number;
  translations: {
    en: {
      name: string;
      about: string;
      area: string;
      population: string;
      populationDensity: string;
      capital: string;
      government: string;
      headOfState: string;
      headOfGovernment: string;
    };
    ru: {
      name: string;
      about: string;
      area: string;
      population: string;
      populationDensity: string;
      capital: string;
      government: string;
      headOfState: string;
      headOfGovernment: string;
    };
    uk: {
      name: string;
      about: string;
      area: string;
      population: string;
      populationDensity: string;
      capital: string;
      government: string;
      headOfState: string;
      headOfGovernment: string;
    };
  };
};

export enum LanguageType {
  en = 'en',
  ru = 'ru',
  uk = 'uk',
}

export type CountriesStateType = {
  countries: Array<Countries>;
  selectedCountryId: string;
  selectedLanguage: LanguageType;
};

const initialState: CountriesStateType = {
  countries: [],
  selectedCountryId: '',
  selectedLanguage: LanguageType.en,
};

const countryReducer = (
  state = initialState,
  action: { type: string; payload: Array<Countries> | string },
) => {
  switch (action.type) {
    case COUNTRIES_LOAD:
      return {
        ...state,
        countries: action.payload,
      };
    case COUNTRY_SELECT:
      return {
        ...state,
        selectedCountryId: action.payload,
      };
    case LANGUAGE_SELECT:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    default:
      return state;
  }
};

export { countryReducer };
