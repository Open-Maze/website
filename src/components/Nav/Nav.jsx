import React from 'react';
import './Nav.scss';

import { NavLink } from 'react-router-dom';

import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';

const Nav = () => (
  <div className="nav">
    <div className="nav-left">
      <LogoPurpleBlue />
    </div>
    <div className="nav-right">
      <div className="nav-right-menu">
        <NavLink to="/" className="menu-item" activeClassName="active">
          <p className={`menu-item `}>home</p>
        </NavLink>
        <NavLink to="/products" className="menu-item" activeClassName="active">
          <p className="menu-item">products</p>
        </NavLink>
        <NavLink to="/about" className="menu-item" activeClassName="active">
          <p className="menu-item">about</p>
        </NavLink>
        <NavLink to="/contact" className="menu-item" activeClassName="active">
          <p className="menu-item">contact</p>
        </NavLink>
        <NavLink to="/contact" className="menu-item" activeClassName="active">
          <p className="menu-button">schedule a demo</p>
        </NavLink>
      </div>
    </div>
  </div>
);

export default Nav;
