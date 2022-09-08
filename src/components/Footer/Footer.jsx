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
      <div className="footer-wrapper">
        <div className="footer-left">
          <a href="/">
            <LogoPurpleBlue />
          </a>
        </div>
        <div className="footer-right">
          <a
            href="https://linkedin.com/company/open-maze"
            target="_blank"
            rel="noreferrer"
            className="footer-right-social"
          >
            <FontAwesomeIcon icon={brands('linkedin-in')} />
          </a>
          <a href="#top">
            <div className="footer-right-arrow aspect-square">
              <FontAwesomeIcon icon={solid('circle-arrow-up')} />
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
