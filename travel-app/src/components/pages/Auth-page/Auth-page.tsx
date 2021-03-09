import React from 'react';
import AuthBlock from '../../Auth-block/Auth-block';
import SearchCountry from '../../SearchCountry/Search-country';
import VideoStart from '../../Video-start/Video-start';
import styles from './auth-page.module.css';

const AuthPage: React.FC = () => {
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

export default AuthPage;
