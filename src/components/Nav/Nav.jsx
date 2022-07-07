import React from 'react';
import './Nav.scss';

import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';

import Button from '../Button/Button';

const Nav = () => (
  <div className="nav">
    <div className="nav-left" data-aos="fade-down">
      <a href="#top">
        <LogoPurpleBlue />
      </a>
    </div>
    <div className="nav-right" data-aos="fade-down">
      <div className="nav-right-menu">
        <Button pageUrl="#bottom" className="btn-purple-solid">
          Get in touch
        </Button>
      </div>
    </div>
  </div>
);

export default Nav;
