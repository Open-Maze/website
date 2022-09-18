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
      <div className="border-bleach flex w-full flex-col items-stretch justify-start border-b-2 border-solid bg-white px-10">
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
              className="text-violet hover:text-violet-darker h-6 px-6 transition"
            />
          </a>
          <a href="#top" className="hidden lg:block">
            <div className="border-bleach flex aspect-square items-center justify-center border-x-2 border-solid">
              <FontAwesomeIcon
                icon={solid('circle-arrow-up')}
                className="text-violet hover:text-violet-darker h-6 px-6 transition"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex h-20 w-full items-center justify-center bg-white px-12 text-slate-400">
        <p>
          Copyright &copy; <Moment interval={1000} date={today} format={date} /> OpenMaze
        </p>
        <a href="#top" className="ml-auto block lg:hidden">
          <div>
            <FontAwesomeIcon
              icon={solid('circle-arrow-up')}
              className="text-violet hover:text-violet-darker h-6 px-6 transition"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
