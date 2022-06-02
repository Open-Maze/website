import React from 'react';
import './Button.Footer';

import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';

const Footer = () => (
  <div className="Footer">
    <div className="Footer-left">
      <Link to="/">
        <LogoPurpleBlue />
      </Link>
    </div>
  </div>
);
