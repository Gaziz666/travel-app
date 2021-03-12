import React from 'react';
import classes from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
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
    </footer>
  );
};

export default Footer;
