import React from 'react';
import './HeaderL.scss';
import Button from '../Button/Button';
import headerSvg from '../../assets/images/illustrations/header.svg';

const HeaderL = () => (
  <section className="header_l">
    <div className="left">
      <h1>Welcome to OpenMaze</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam ac commodo erat, quis venenatis turpis. Vivamus
        interdum interdum.
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
  </section>
);

export default HeaderL;
