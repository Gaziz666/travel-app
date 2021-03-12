import {
  AuthStatusChangeActionType,
  AUTH_STATUS_CHANGE,
  MAIN_PAGE_OPEN,
} from '../actions/auth-actions';

export enum AuthStatusNum {
  signIn,
  logIn,
  auth,
}

export type AuthStateType = {
  authStatus: AuthStatusNum;
  mainIsOpen: boolean;
};

const initialState: AuthStateType = {
  authStatus: 0,
  mainIsOpen: false,
};

const authReducer = (
  state = initialState,
  action: AuthStatusChangeActionType,
) => {
  switch (action.type) {
    case AUTH_STATUS_CHANGE:
      return { ...state, authStatus: action.payload };
    case MAIN_PAGE_OPEN:
      return { ...state, mainIsOpen: action.payload };
    default:
      return state;
  }
};

export { authReducer };
