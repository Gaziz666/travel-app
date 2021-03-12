import React from 'react';
import classes from './footer.module.css';
import CurrencyWidget from '../currencyWidget/CurrencyWidget.js'
import WeatherWidget from '../WeatherWidget/WeatherWidget.js';

const Footer: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className={classes.footer}>
      <div className={classes.widget__wrapper}>
        <CurrencyWidget />
        <WeatherWidget />

      </div>

      <div className={classes.footer__link__wrapper} >
        <a href="https://github.com/juliememe" className={classes.footer__link}>
          Juliememe
=======
    <footer className={classes.footer}>
      <a href="https://github.com/juliememe" className={classes.footer__link}>
        Juliememe
>>>>>>> 96b5db0b1891a1b52b4120f2ec3906fb75b55885
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
<<<<<<< HEAD
      </div>

    </div>
=======
    </footer>
>>>>>>> 96b5db0b1891a1b52b4120f2ec3906fb75b55885
  );
};

export default Footer;
