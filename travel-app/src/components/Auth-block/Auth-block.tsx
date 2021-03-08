import React from 'react';
import { Link } from 'react-router-dom';
import styles from './auth-block.module.css';

const AuthBlock: React.FC = () => {
  return (
    <div className={styles['auth-container']}>
      {true ? <div className={styles['auth-header']}>Sign in</div> : null}
      {false ? <div className={styles['auth-header']}>Log in</div> : null}
      <form className={styles['auth-form']}>
        <label className={styles['auth-label']}>name</label>
        <input className={styles['auth-input']} type="text" name="name" />
        {false ? (
          <>
            <label className={styles['auth-label']}>email</label>
            <input className={styles['auth-input']} type="email" name="email" />
          </>
        ) : null}
        <label className={styles['auth-label']}>password</label>
        <input className={styles['auth-input']} type="text" name="password" />
        {true ? (
          <input
            className={styles['auth-button']}
            type="submit"
            value="sign in"
            onClick={(event) => event.preventDefault()}
          />
        ) : null}
        {false ? (
          <input
            className={styles['auth-button']}
            type="submit"
            value="login in"
            onClick={(event) => event.preventDefault()}
          />
        ) : null}
        <div className={styles['skip-button']}>
          <Link to="/main">skip</Link>
        </div>
      </form>
      <div className={styles['change-login__text']}>
        Don’t have an account yet? Sing up
      </div>
    </div>
  );
};

export default AuthBlock;
