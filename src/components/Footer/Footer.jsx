import React from 'react';
import './Footer.scss';

import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';

const Footer = () => (
  <div>
    <div className="footer">
      <div className="footer-left">
        <Link to="/">
          <LogoPurpleBlue />
        </Link>
      </div>
      <div className="footer-middle">
        <NavLink to="/" className="menu-item-footer" activeClassName="active">
          <p className="menu-item-footer">home</p>
        </NavLink>
        <NavLink to="/products" className="menu-item-footer" activeClassName="active">
          <p className="menu-item-footer">products</p>
        </NavLink>
        <NavLink to="/about" className="menu-item-footer" activeClassName="active">
          <p className="menu-item-footer">about</p>
        </NavLink>
        <NavLink to="/contact" className="menu-item-footer" activeClassName="active">
          <p className="menu-item-footer">contact</p>
        </NavLink>
      </div>
      <div className="footer-right">
        <FontAwesomeIcon icon={brands('instagram')} />
        <FontAwesomeIcon icon={brands('twitter')} />
        <FontAwesomeIcon icon={brands('facebook')} />

        <div className="footer-right-arrow aspect-square">
          <FontAwesomeIcon icon={solid('circle-arrow-up')} />
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>Copyright &copy; 2022 OpenMaze</p>
      <div className="footer-right-arrow-sm">
        <FontAwesomeIcon icon={solid('circle-arrow-up')} />
      </div>
    </div>
  </div>
);

export default Footer;
