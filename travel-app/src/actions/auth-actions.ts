import { AuthStatusNum } from '../reducers/auth-reducer';

const AUTH_STATUS_CHANGE = 'AUTH_STATUS_CHANGE';
const MAIN_PAGE_OPEN = 'MAIN_PAGE_OPEN';

const authStatusChange = (newStatus: AuthStatusNum) => {
  return {
    type: AUTH_STATUS_CHANGE,
    payload: newStatus,
  };
};

const mainPageIsOpen = (value: boolean) => {
  return {
    type: MAIN_PAGE_OPEN,
    payload: value,
  };
};

export type AuthStatusChangeActionType = {
  type: string;
  payload: AuthStatusNum | boolean;
};

export { authStatusChange, mainPageIsOpen, AUTH_STATUS_CHANGE, MAIN_PAGE_OPEN };
