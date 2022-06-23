import React from 'react';
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { ReactComponent as LogoPurpleBlue } from '../../assets/images/logo/logoPurpleBlue.svg';

const Footer = () => (
  <>
    <div className="footer">
      <div className="footer-left">
        <a href="/">
          <LogoPurpleBlue />
        </a>
      </div>
      <div className="footer-right">
        <FontAwesomeIcon icon={brands('instagram')} />
        <FontAwesomeIcon icon={brands('twitter')} />
        <FontAwesomeIcon icon={brands('facebook')} />
        <a href="#top">
          <div className="footer-right-arrow aspect-square">
            <FontAwesomeIcon icon={solid('circle-arrow-up')} />
          </div>
        </a>
      </div>
    </div>
    <div className="copyright">
      <p>Copyright &copy; 2022 OpenMaze</p>
      <div className="footer-right-arrow-sm">
        <FontAwesomeIcon icon={solid('circle-arrow-up')} />
      </div>
    </div>
  </>
);

export default Footer;
