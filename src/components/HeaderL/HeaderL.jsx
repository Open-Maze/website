import React from 'react';
import './HeaderL.scss';

import Button from '../Button/Button';

import headerSvg from '../../assets/images/illustrations/header.svg';

const HeaderL = () => (
  <div className="header_l">
    <div className="header_l__wrapper">
      <div className="left">
        <h1>
          <mark>Welcome to OpenMaze</mark>
        </h1>
        <p>
          <mark>
            We aim to provide users of online educational environments with greater insight into their own learning
            journey and performance through the use of AI-based tools.
          </mark>
        </p>
        <div className="buttons">
          <Button pageUrl="/contact" className="btn-purple-solid">
            Schedule demo
          </Button>
          <Button pageUrl="/contact" className="btn-purple-outline">
            See more
          </Button>
        </div>
      </div>
      <div className="right">
        <img src={headerSvg} alt="Illustration" />
      </div>
    </div>
  </div>
);

export default HeaderL;
