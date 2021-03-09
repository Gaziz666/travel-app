import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthStateType, AuthStatusNum } from '../../reducers/auth-reducer';
import { RootStateType } from '../../reducers/root-reducer';
import * as actions from '../../actions/auth-actions';
import styles from './auth-block.module.css';
import { AuthButton } from '../AuthButton/Auth-button';
import { useTranslation } from 'react-i18next';

type MapDispatchToProps = {
  authStatusChange: (
    newStatus: AuthStatusNum,
  ) => actions.AuthStatusChangeActionType;
};

type Props = AuthStateType & MapDispatchToProps;

const AuthBlock: React.FC<Props> = ({ authStatus, authStatusChange }) => {
  const { t } = useTranslation();

  return (
    <div className={styles['auth-container']}>
      {authStatus === 0 ? (
        <div className={styles['auth-header']}>
          {t('main-page.header-link.about')}
        </div>
      ) : null}
      {authStatus === 1 ? (
        <div className={styles['auth-header']}>Log in</div>
      ) : null}
      <form className={styles['auth-form']}>
        <label className={styles['auth-label']}>name</label>
        <input className={styles['auth-input']} type="text" name="name" />
        {authStatus === 1 ? (
          <>
            <label className={styles['auth-label']}>email</label>
            <input className={styles['auth-input']} type="email" name="email" />
          </>
        ) : null}
        <label className={styles['auth-label']}>password</label>
        <input className={styles['auth-input']} type="text" name="password" />
        {authStatus === 0 ? (
          <>
            <div className={styles['button__wrapper']}>
              <AuthButton
                value="sign in"
                handleClick={(event) => event.preventDefault()}
              />
            </div>
            <div className={styles['skip-button']}>
              <Link to="/main">skip</Link>
            </div>
          </>
        ) : null}
        {authStatus === 1 ? (
          <div className={styles['button__wrapper']}>
            <AuthButton
              value="login in"
              handleClick={(event) => event.preventDefault()}
            />
          </div>
        ) : null}
      </form>
      {authStatus === 0 ? (
        <div
          className={styles['change-login__text']}
          onClick={() => authStatusChange(1)}
        >
          Don’t have an account yet? Sing up
        </div>
      ) : null}
      {authStatus === 1 ? (
        <div
          className={styles['change-login__text']}
          onClick={() => authStatusChange(0)}
        >
          You have an account yet? Sing In
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state: RootStateType) => state.authStatusState;

export default connect(mapStateToProps, actions)(AuthBlock);
