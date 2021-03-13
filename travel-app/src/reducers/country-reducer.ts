import {
  COUNTRIES_LOAD,
  COUNTRY_SELECT,
  LANGUAGE_SELECT,
} from "../actions/actions-country";

export type Countries = {
  _id: string;
  imgUrl: string;
  smallImg: string;
  flagUrl: string;
  videoUrl: string;
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
      rating: [
        {
          score: number;
          author: string;
        }
      ];
      translations: {
        en: {
          name: string;
          info: string;
          favorite: boolean;
          timeFormat: string;
        };
        ru: {
          name: string;
          info: string;
          favorite: boolean;
          timeFormat: string;
        };
        uk: {
          name: string;
          info: string;
          favorite: boolean;
          timeFormat: string;
        };
      };
    }
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
    };
  };
};

export enum LanguageType {
  en = "en",
  ru = "ru",
  uk = "uk",
}

export type CountriesStateType = {
  countries: Array<Countries>;
  selectedCountryId: string;
  selectedLanguage: LanguageType;
};

const initialState: CountriesStateType = {
  countries: [],
  selectedCountryId: "",
  selectedLanguage: LanguageType.en,
};

const countryReducer = (
  state = initialState,
  action: { type: string; payload: Array<Countries> | string }
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
