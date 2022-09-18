import React from 'react';

// External
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Assets
import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';

const Footer = () => {
  const location = useLocation();

  return (
    <div className="footer">
      <div className="flex w-full flex-col items-stretch justify-start border-b-2 border-solid border-bleach bg-white px-10">
        <div>
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
        <div className="flex h-full items-center">
          <a
            href="https://linkedin.com/company/open-maze"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <FontAwesomeIcon icon="circle" className="h-6 px-6 text-violet transition hover:text-violet-darker" />
          </a>
          <a href="#top" className="hidden lg:block">
            <div className="flex aspect-square items-center justify-center border-x-2 border-solid border-bleach">
              <FontAwesomeIcon icon="circle" className="h-6 px-6 text-violet transition hover:text-violet-darker" />
            </div>
          </a>
        </div>
      </div>
      <div className="flex h-20 w-full items-center justify-center bg-white px-12 text-slate-400">
        <p>Copyright &copy; 2022 OpenMaze</p>
        <a href="#top" className="ml-auto block lg:hidden">
          <div>
            <FontAwesomeIcon icon="circle" className="h-6 px-6 text-violet transition hover:text-violet-darker" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
