import React, { useState } from 'react';
import './Nav.css';

// External
import { Link, NavLink, useLocation } from 'react-router-dom';

// Components
import Button from '../Button/Button';

// Assets
import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';

const Nav = () => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);

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
      <div
        className={`absolute top-0 left-0 right-0 transition-all duration-300 lg:static lg:translate-y-0 ${
          navOpen ? 'translate-y-0 shadow-lg lg:shadow-none' : '-translate-y-full'
        }`}
      >
        <div
          className="mt-24 flex h-fit w-screen flex-col items-center gap-6 border-b-2 border-solid border-bleach bg-white pb-12 pt-6 transition lg:mt-0 lg:w-full lg:flex-row lg:gap-10 lg:border-none lg:bg-none lg:pt-0 lg:pb-0"
          aria-hidden
          onClick={() => setNavOpen((prev) => !prev)}
        >
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
      <div
        className="-mr-4 flex cursor-pointer flex-col items-end gap-2 p-4 transition lg:hidden"
        aria-hidden
        onClick={() => setNavOpen((prev) => !prev)}
        data-aos="fade-down"
      >
        <span
          className={`h-1 w-6 rounded-full transition-all duration-300 ${
            navOpen ? 'bg-violet-darker' : 'bg-slate-700'
          }`}
        />
        <span
          className={`h-1 rounded-full transition-all duration-300 ${
            navOpen ? 'w-9 bg-violet-darker' : 'w-3 bg-slate-700'
          }`}
        />
      </div>
    </div>
  );
};

export default Nav;
