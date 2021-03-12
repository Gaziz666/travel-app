import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './language-menu.module.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions-country';
import { LanguageType } from '../../reducers/country-reducer';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LangSvg } from '../../assets/images/langSVG.svg';

type MapDispatchToProps = {
  languageSelect: (value: LanguageType) => actions.languageSelectActionType;
};

const LanguageMenu: React.FC<MapDispatchToProps> = ({ languageSelect }) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value: LanguageType) => {
    languageSelect(value);
    i18n.changeLanguage(value);
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        className={styles['lang-menu-button']}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <LangSvg fill="white" className={styles.lang__icon} />
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose(LanguageType.en)}>EN</MenuItem>
        <MenuItem onClick={() => handleClose(LanguageType.ru)}>RU</MenuItem>
        <MenuItem onClick={() => handleClose(LanguageType.uk)}>UK</MenuItem>
      </Menu>
    </div>
  );
};

export default connect(null, actions)(LanguageMenu);
