import React from 'react';
import './Nav.scss';

// Components
import Button from '../Button/Button';

// Assets
import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';

const Nav = () => (
  <div className="nav">
    <div className="nav-left">
      <a href="#top">
        <LogoPurpleBlue />
      </a>
    </div>
    <div className="nav-right">
      <div className="nav-right-menu">
        <Button pageUrl="#bottom" className="btn-purple-solid">
          Get in touch
        </Button>
      </div>
    </div>
  </div>
);

export default Nav;
