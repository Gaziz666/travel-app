import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../../reducers/root-reducer';
import * as actions from '../../../actions/auth-actions';
import AuthBlock from '../../Auth-block/Auth-block';
import SearchCountry from '../../SearchCountry/Search-country';
import VideoStart from '../../Video-start/Video-start';
import styles from './auth-page.module.css';
import { AuthStateType } from '../../../reducers/auth-reducer';

type MapDispatchToProps = {
  mainPageIsOpen: (value: boolean) => actions.AuthStatusChangeActionType;
};
type Props = MapDispatchToProps & AuthStateType;

const AuthPage: React.FC<Props> = ({ mainPageIsOpen }) => {
  useEffect(() => {
    mainPageIsOpen(false);
  });

  return (
    <div className={styles['auth-page-wrapper']}>
      <div className={styles['block-container left-block']}>
        <VideoStart />
        <SearchCountry />
      </div>
      <div className={styles['block-container right-block']}>
        <AuthBlock />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.authStatusState;
};

export default connect(mapStateToProps, actions)(AuthPage);
