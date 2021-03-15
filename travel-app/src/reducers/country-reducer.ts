import {
  COUNTRIES_LOAD,
  COUNTRY_SELECT,
  LANGUAGE_SELECT,
  SEARCH_CHANGE,
} from '../actions/actions-country';

export type Countries = {
  _id: string;
  imgUrl: string;
  smallImg: string;
  flagUrl: string;
  videoUrl: string;
  prevImg: string;
  coordinate: {
    x: number;
    y: number;
  };
  placesCount: number;
  rate: string;
  index: number;
  timeZone: string;
  places: [
    {
      imgUrl: string;
      imgSmallUrl: string;
      id: string;
      rating: [
        {
          score: number;
          author: string;
        },
      ];
      translations: {
        en: {
          name: string;
          info: string;
          favorite: boolean;
        };
        ru: {
          name: string;
          info: string;
          favorite: boolean;
        };
        uk: {
          name: string;
          info: string;
          favorite: boolean;
        };
      };
    },
  ];
  translations: {
    en: {
      name: string;
      info: string;
      about: string;
      area: string;
      population: string;
      populationDensity: string;
      capital: string;
      government: string;
      headOfState: string;
      headOfGovernment: string;
      currency: string;
      timeFormat: string;
    };
    ru: {
      name: string;
      info: string;
      about: string;
      area: string;
      population: string;
      populationDensity: string;
      capital: string;
      government: string;
      headOfState: string;
      headOfGovernment: string;
      currency: string;
      timeFormat: string;
    };
    uk: {
      name: string;
      info: string;
      about: string;
      area: string;
      population: string;
      populationDensity: string;
      capital: string;
      government: string;
      headOfState: string;
      headOfGovernment: string;
      currency: string;
      timeFormat: string;
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
  selectedCountryIndex: number;
  selectedLanguage: LanguageType;
  searchText: string;
};

const initialState: CountriesStateType = {
  countries: [],
  selectedCountryIndex: 1,
  selectedLanguage: LanguageType.en,
  searchText: '',
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
        selectedCountryIndex: action.payload,
      };
    case LANGUAGE_SELECT:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case SEARCH_CHANGE:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export { countryReducer };
