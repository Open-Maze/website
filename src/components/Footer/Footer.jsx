import React, { useEffect, useState } from 'react';

// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Moment from 'react-moment';
import 'moment-timezone';

// Assets
import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';

const Footer = () => {
  Moment.globalLocale = 'nl';
  const today = Date();
  const date = 'YYYY';
  const currentTime = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => currentTime[1](Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="footer">
      <div className="flex w-full items-center justify-between border-b-2 border-solid border-bleach bg-white px-10">
        <div>
          <a href="/">
            <LogoPurpleBlue className="mt-3 h-6" />
          </a>
        </div>
        <div className="flex h-full items-center">
          <a
            href="https://linkedin.com/company/open-maze"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <FontAwesomeIcon
              icon={brands('linkedin-in')}
              className="h-6 px-6 text-violet transition hover:text-violet-darker"
            />
          </a>
          <a href="#top">
            <div className="flex aspect-square items-center justify-center border-x-2 border-solid border-bleach">
              <FontAwesomeIcon
                icon={solid('circle-arrow-up')}
                className="h-6 px-6 text-violet transition hover:text-violet-darker"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          Copyright &copy; <Moment interval={1000} date={today} format={date} /> OpenMaze
        </p>
        <a href="#top" className="footer-right-arrow-sm">
          <div>
            <FontAwesomeIcon icon={solid('circle-arrow-up')} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
