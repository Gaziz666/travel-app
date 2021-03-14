import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthStateType, AuthStatusNum } from '../../reducers/auth-reducer';
import { RootStateType } from '../../reducers/root-reducer';
import * as actions from '../../actions/auth-actions';
import styles from './auth-block.module.css';
import { AuthButton } from '../AuthButton/Auth-button';
import { useTranslation } from 'react-i18next';
import AuthService from '../../services/auth-service';

type MapDispatchToProps = {
  authStatusChange: (
    newStatus: AuthStatusNum,
  ) => actions.AuthStatusChangeActionType;
};

type Props = AuthStateType & MapDispatchToProps;

const AuthBlock: React.FC<Props> = ({ authStatus, authStatusChange }) => {
  const { t } = useTranslation();
  const header =
    authStatus === 0
      ? t('auth-page.auth-block.sign-in')
      : t('auth-page.auth-block.log-in');

  const handleLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const authService = new AuthService();
    authService.addNewUser();
  };

  const handleSigning = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={styles['auth-header']}>{header}</div>
      <form className={styles['auth-form']}>
        <label className={styles['auth-label']}>
          {t('auth-page.auth-block.name')}
        </label>
        <input className={styles['auth-input']} type="text" name="name" />
        {authStatus === 1 ? (
          <>
            <label className={styles['auth-label']}>
              {t('auth-page.auth-block.email')}
            </label>
            <input className={styles['auth-input']} type="email" name="email" />
          </>
        ) : null}
        <label className={styles['auth-label']}>
          {t('auth-page.auth-block.password')}
        </label>
        <input className={styles['auth-input']} type="text" name="password" />
        {authStatus === 0 ? (
          <>
            <div className={styles['button__wrapper']}>
              <AuthButton
                value={t('auth-page.auth-block.sign-in')}
                handleClick={handleSigning}
              />
            </div>
            <div className={styles['skip-button']}>
              <Link to="/main">{t('auth-page.auth-block.skip')}</Link>
            </div>
          </>
        ) : (
          <div className={styles['button__wrapper']}>
            <AuthButton
              value={t('auth-page.auth-block.log-in')}
              handleClick={handleLogin}
            />
          </div>
        )}
      </form>
      {authStatus === 0 ? (
        <div
          className={styles['change-login__text']}
          onClick={() => authStatusChange(1)}
        >
          {t('auth-page.auth-block.sign-up-text')}
        </div>
      ) : (
        <div
          className={styles['change-login__text']}
          onClick={() => authStatusChange(0)}
        >
          {t('auth-page.auth-block.sign-in-text')}
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state: RootStateType) => state.authStatusState;

export default connect(mapStateToProps, actions)(AuthBlock);
