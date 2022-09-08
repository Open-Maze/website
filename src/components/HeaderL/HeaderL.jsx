import React from 'react';

// Components
import Button from '../Button/Button';

// Assets
import headerSvg from '../../assets/images/illustrations/header.svg';

const HeaderL = () => (
  <div className="header-l">
    <div className="header-l-wrapper">
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
);

export default HeaderL;
