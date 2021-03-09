import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './language-menu.module.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions-country';
import { LanguageType } from '../../reducers/country-reducer';

type MapDispatchToProps = {
  languageSelect: (value: LanguageType) => actions.languageSelectActionType;
};

const LanguageMenu: React.FC<MapDispatchToProps> = ({ languageSelect }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value: LanguageType) => {
    languageSelect(value);
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        className={styles['lang-menu-button']}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
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
