import React from 'react';

// Components
import Button from '../Button/Button';

// Assets
import headerSvg from '../../assets/images/illustrations/header.svg';

const HeaderL = () => (
  <div className="cms-block bg-white">
    <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
      <div className="col-span-5 lg:col-start-1">
        <h1 className="pb-6 leading-relaxed" data-aos="fade-up">
          <mark>Welcome to OpenMaze</mark>
        </h1>
        <p className="pb-10" data-aos="fade-up" data-aos-delay="100">
          <mark>
            We aim to provide users of online educational environments with greater insight into their own learning
            journey and performance through the use of AI-based tools.
          </mark>
        </p>
        <div className="buttons" data-aos="fade-up" data-aos-delay="200">
          <Button pageUrl="#bottom" className="button button--violet">
            Get in touch
          </Button>
        </div>
      </div>
      <div className="col-span-6 lg:col-end-13">
        <img src={headerSvg} alt="Illustration" data-aos="fade-up" data-aos-delay="100" />
      </div>
    </div>
  </div>
);

export default HeaderL;
