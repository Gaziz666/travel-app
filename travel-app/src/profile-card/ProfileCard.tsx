import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthStateType, AuthStatusNum } from '../reducers/auth-reducer';
import { RootStateType } from '../reducers/root-reducer';
import * as actions from '../actions/auth-actions';
import styles from './profileCard.module.css';
import { useTranslation } from 'react-i18next';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

type MapDispatchToProps = {
  authStatusChange: (
    newStatus: AuthStatusNum,
  ) => actions.AuthStatusChangeActionType;
};

type Props = AuthStateType & MapDispatchToProps;

const ProfileCard: React.FC<Props> = ({ authStatus, authStatusChange }) => {
  const { t } = useTranslation();

  return (
    <div className={styles['profile-container']}>
      <div className={styles['profile-img-wrapper']}>
        <AddPhotoAlternateIcon style={{ fontSize: 60 }} />
      </div>
      <div className={styles['user-login']}>Zara</div>
      <div className={styles['profile-params']}>
        <label className={styles['user-params-label']}>
          {t('auth-page.profileCard.name')}
        </label>
        <input className={styles['user-params-input']} type="text" />
      </div>
      <div className={styles['profile-params']}>
        <label className={styles['user-params-label']}>
          {t('auth-page.profileCard.email')}
        </label>
        <input className={styles['user-params-input']} type="text" />
      </div>
      <div className={styles['favorite-container']}>
        <label className={styles['user-params-label']}>
          {t('auth-page.profileCard.favorite')}
        </label>
      </div>
    </div>
  );
};
const mapStateToProps = (state: RootStateType) => state.authStatusState;

export default connect(mapStateToProps, actions)(ProfileCard);
