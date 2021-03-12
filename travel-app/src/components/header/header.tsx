import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import LanguageMenu from '../LanguageMenu/Language-menu';
import { ReactComponent as UserSvg } from '../../assets/images/user.svg';

import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <Link to="/main" className={classes['header__logo-icon']}></Link>
        <span className={classes['header__logo-text']}>Explore the World</span>
      </div>
      <div className={classes.header__menu}>
        <Link to="/" className={classes['header__link']}>
          {t('main-page.header-link.about')}
        </Link>
        <Link to="/" className={classes['header__link']}>
          {t('main-page.header-link.destination')}
        </Link>
        <LanguageMenu />
        <Link to="/" className={classes.header__login}>
          <UserSvg fill="white" className={classes.header__login_svg} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
