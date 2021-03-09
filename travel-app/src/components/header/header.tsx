import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import LanguageMenu from '../LanguageMenu/Language-menu';

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>
        <Link to="/" className={classes['header__logo-icon']}></Link>
        <span className={classes['header__logo-text']}>Explore the World</span>
      </div>
      <div className={classes.header__menu}>
        <Link to="/" className={classes['header__link']}>
          About us
        </Link>
        <Link to="/" className={classes['header__link']}>
          Destinations
        </Link>
        <LanguageMenu />
        <Link to="/" className={classes.header__login}></Link>
      </div>
    </div>
  );
};

export default Header;
