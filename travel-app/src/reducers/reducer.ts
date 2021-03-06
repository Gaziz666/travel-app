import { COUNTRIES_LOAD } from '../actions/actions';

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
export type CountriesStateType = {
  countries: Array<Countries>;
};

const initialState: CountriesStateType = {
  countries: [],
};

const reducer = (
  state = initialState,
  action: { type: string; payload: Array<Countries> },
) => {
  switch (action.type) {
    case COUNTRIES_LOAD:
      return {
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
