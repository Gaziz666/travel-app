import { AuthStatusNum } from '../reducers/auth-reducer';

const AUTH_STATUS_CHANGE = 'AUTH_STATUS_CHANGE';

const authStatusChange = (newStatus: AuthStatusNum) => {
  return {
    type: AUTH_STATUS_CHANGE,
    payload: newStatus,
  };
};

export type AuthStatusChangeActionType = {
  type: string;
  payload: AuthStatusNum;
};

export { authStatusChange, AUTH_STATUS_CHANGE };
