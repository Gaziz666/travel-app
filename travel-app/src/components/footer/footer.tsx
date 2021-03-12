import React from 'react';
import classes from './footer.module.css';
import CurrencyWidget from '../currencyWidget/CurrencyWidget.js'
import WeatherWidget from '../WeatherWidget/WeatherWidget.js';

const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>


      <div className={classes.footer__link__wrapper} >
        <a href="https://github.com/juliememe" className={classes.footer__link}>
          Juliememe
      </a>
        <a href="https://github.com/gaziz666" className={classes.footer__link}>
          Gaziz666
      </a>
        <a href="https://github.com/general-m" className={classes.footer__link}>
          General-m
      </a>
        <a href="https://github.com/rrroman" className={classes.footer__link}>
          Rrroman
      </a>
        <a
          href="https://rs.school/js/"
          className={`${classes.footer__link} ${classes['footer__rs-logo']}`}
        >
          Rs School
      </a>
      </div>

    </div>
  );
};

export default Footer;
