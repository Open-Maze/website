import React from 'react';
import './Nav.css';

// External
import { Link, NavLink, useLocation } from 'react-router-dom';

// Components
import Button from '../../components/Button/Button';

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
        <div className=" top-0 flex h-screen w-full flex-col items-center gap-10 transition lg:static lg:translate-y-0 lg:flex-row">
          <NavLink to="/" end className="menu-item" activeClassName="active">
            <p>home</p>
          </NavLink>
          <NavLink to="/products" className="menu-item" activeClassName="active">
            <p>products</p>
          </NavLink>
          <NavLink to="/about" className="menu-item" activeClassName="active">
            <p>about</p>
          </NavLink>
          <Button pageUrl="/contact" className="button button--violet">
            get in touch
          </Button>
        </div>
      </div>
      <div className="z-50 flex cursor-pointer flex-col items-end gap-2 transition lg:hidden">
        <div className="h-0.5 w-6 bg-violet" />
        <div className="h-0.5 w-3 bg-violet" />
      </div>
    </div>
  );
};

export default Nav;
