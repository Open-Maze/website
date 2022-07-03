import React from 'react';
import './Nav.scss';

// External
import { Link, NavLink, useLocation } from 'react-router-dom';

// Components
import Button from '../Button/Button';

// Assets
import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';

const Nav = () => {
  const location = useLocation();

  return (
    <div className="nav">
      <div className="nav-left">
        {location.pathname === '/' && (
          <a href="#top">
            <LogoPurpleBlue />
          </a>
        )}
        {location.pathname !== '/' && (
          <Link to="/">
            <LogoPurpleBlue />
          </Link>
        )}
      </div>
      <div className="nav-right">
        <div className="nav-right-menu">
          <NavLink to="/" className="menu-item" activeClassName="active">
            <p className="menu-item">home</p>
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
          <Button pageUrl="#bottom" className="btn-purple-solid">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
