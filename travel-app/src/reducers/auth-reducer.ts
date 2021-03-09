import { AuthStatusChangeActionType, AUTH_STATUS_CHANGE } from "../actions/auth-actions";

export enum AuthStatusNum {
  signIn,
  logIn,
  auth,
}

export type AuthStateType = {
  authStatus: AuthStatusNum;
};

const initialState: AuthStateType = {
  authStatus: 0,
};

const authReducer = (state = initialState, action: AuthStatusChangeActionType) => {
  switch (action.type) {
    case AUTH_STATUS_CHANGE:
      return {authStatus: action.payload};
    default:
      return state;
  }
};

export { authReducer };
