import React from 'react';
import './Nav.css';

// External
import { Link, NavLink, useLocation } from 'react-router-dom';

// Components
import Button from '../Button/Button';

// Assets
import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';

const Nav = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 z-50 flex h-24 w-full items-center justify-between border-b-2 border-solid border-bleach bg-white px-4 md:px-10">
      <div data-aos="fade-down">
        {location.pathname === '/' && (
          <a href="#top">
            <LogoPurpleBlue className="mt-2 h-6" />
          </a>
        )}
        {location.pathname !== '/' && (
          <Link to="/">
            <LogoPurpleBlue className="mt-2 h-6" />
          </Link>
        )}
      </div>
      <div data-aos="fade-down">
        <div className="flex items-center gap-10">
          <NavLink to="/" className="menu-item" activeClassName="active">
            <p>home</p>
          </NavLink>
          <NavLink to="/products" className="menu-item" activeClassName="active">
            <p>products</p>
          </NavLink>
          <NavLink to="/about" className="menu-item" activeClassName="active">
            <p>about</p>
          </NavLink>
          <NavLink to="/contact" className="menu-item" activeClassName="active">
            <p>contact</p>
          </NavLink>
          <Button pageUrl="#bottom" className="button button--violet">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
