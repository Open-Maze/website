import React from 'react';
import './HeaderL.scss';

import Button from '../Button/Button';

import headerSvg from '../../assets/images/illustrations/header.svg';

import { ReactComponent as ScrollDown } from '../../assets/images/icons/chevron-down.svg';

const HeaderL = () => (
  <>
    <div className="header_l">
      <div className="header_l__wrapper">
        <div className="left">
          <h1 data-aos="fade-up">
            <mark>Welcome to OpenMaze</mark>
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            <mark>
              We aim to provide users of online educational environments with greater insight into their own learning
              journey and performance through the use of AI-based tools.
            </mark>
          </p>
          <div className="buttons" data-aos="fade-up" data-aos-delay="200">
            <Button pageUrl="#bottom" className="btn-purple-solid">
              Get in touch
            </Button>
          </div>
        </div>
        <div className="right">
          <img src={headerSvg} alt="Illustration" data-aos="fade-up" data-aos-delay="100" />
        </div>
      </div>
    </div>
    <div className="scroll-down">
      <a href="#about">
        <ScrollDown />
      </a>
    </div>
    <a name="about" />
  </>
);

export default HeaderL;
