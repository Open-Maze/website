import React from 'react';

// External
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import moment from 'moment';

// Assets
import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';
import { ReactComponent as LogoMark } from '../../assets/images/logo/mark.svg';

// Font Awesome Library
library.add(faLinkedinIn);

const Footer = () => {
  const location = useLocation();
  const year = moment().year();

  return (
    <>
      <div className="flex w-full flex-col items-start border-b-2 border-solid border-bleach bg-white px-4 text-left sm:flex-row sm:items-center sm:justify-between sm:border-y-2 md:px-10">
        <div className="hidden w-full justify-center sm:block">
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
        <div className="flex h-full w-full items-center justify-between sm:justify-end">
          <div className="flex">
            <a
              href="https://linkedin.com/company/open-maze"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin-in"
                className="h-6 pr-6 text-violet transition hover:text-violet-darker"
              />
            </a>
          </div>
          <div className="flex w-full justify-center sm:hidden">
            {location.pathname === '/' && (
              <a href="#top">
                <LogoMark className="h-4" />
              </a>
            )}
            {location.pathname !== '/' && (
              <Link to="/">
                <LogoMark className="h-4" />
              </Link>
            )}
          </div>
          <a href="#top">
            <div className="flex items-center justify-center py-6 pl-6 sm:border-l-2 sm:border-solid sm:border-bleach">
              <FontAwesomeIcon
                icon="circle-arrow-up"
                className="aspect-square h-6 text-violet transition hover:text-violet-darker"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex h-20 w-full items-center justify-center bg-white px-4 text-slate-400">
        <p>Copyright &copy; {year} OpenMaze</p>
      </div>
    </>
  );
};

export default Footer;
