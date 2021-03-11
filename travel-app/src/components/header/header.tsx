import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import LanguageMenu from '../LanguageMenu/Language-menu';
import { ReactComponent as UserSvg } from '../../assets/images/user.svg';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <Link to="/main" className={classes['header__logo-icon']}></Link>
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
        <Link to="/" className={classes.header__login}>
          <UserSvg fill="#3ccdd7" className={classes.header__login_svg} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
