import { combineReducers } from 'redux';
import { authReducer, AuthStateType } from './auth-reducer';
import { CountriesStateType, countryReducer } from './country-reducer';

const rootReducer = combineReducers({
  countryState: countryReducer,
  authStatusState: authReducer,
});

export default rootReducer;

export type RootStateType = {
  countryState: CountriesStateType;
  authStatusState: AuthStateType;
};
