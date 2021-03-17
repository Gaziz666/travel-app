import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import LanguageMenuSelect from '../LanguageMenu/Select';
import { ReactComponent as UserSvg } from '../../assets/images/user.svg';
import * as actionsAuth from '../../actions/auth-actions';
import * as actionCountry from '../../actions/actions-country';
import { useTranslation } from 'react-i18next';
import { routs } from '../App/App';
import { connect } from 'react-redux';
import { RootStateType } from '../../reducers/root-reducer';
import { AuthStateType } from '../../reducers/auth-reducer';

type MapDispatchToProps = {
  countrySelect: (value: number) => actionCountry.CountrySelectActionType;
  mainPageIsOpen: (value: boolean) => actionsAuth.AuthStatusChangeActionType;
};
type Props = MapDispatchToProps & AuthStateType;

const Header: React.FC<Props> = ({
  countrySelect,
  mainPageIsOpen,
  mainIsOpen,
}) => {
  const { t } = useTranslation();
  let color = mainIsOpen ? '#fff' : '#000';

  const toMain = () => {
    countrySelect(0);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <Link
          to={routs.main}
          className={classes['header__logo-icon']}
          onClick={toMain}
        ></Link>
        <span className={classes['header__logo-text']} style={{ color: color }}>
          Explore the World
        </span>
      </div>
      <div className={classes.header__menu}>
        <Link
          to="/"
          className={classes['header__link']}
          style={{ color: color }}
        >
          {t('main-page.header-link.about')}
        </Link>
        <Link
          to="/"
          className={classes['header__link']}
          style={{ color: color }}
        >
          {t('main-page.header-link.destination')}
        </Link>
        <LanguageMenuSelect />
        <Link
          to={routs.auth}
          className={`${classes.header__login} ${
            mainIsOpen ? '' : classes.header__login_black
          }`}
          onClick={() => mainPageIsOpen(false)}
        >
          <UserSvg fill={color} className={classes.header__login_svg} />
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.authStatusState;
};
const actions = { ...actionsAuth, ...actionCountry };

export default connect(mapStateToProps, actions)(Header);
