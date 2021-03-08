import React from 'react';
import AuthBlock from '../../Auth-block/Auth-block';
import VideoStart from '../../Video-start/Video-start';
import styles from './auth-page.module.css';

const AuthPage: React.FC = () => {
  return (
    <div className={styles['auth-page-wrapper']}>
      <div className={styles['block-container left-block']}>
        <VideoStart />
      </div>
      <div className={styles['block-container right-block']}>
        <AuthBlock />
      </div>
    </div>
  );
};

export default AuthPage;
