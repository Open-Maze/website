import React from 'react';
import './HeaderS.scss';
import Button from '../Button/Button';

const HeaderS = ({ title, description, buttonLabel, buttonLink, svg }) => (
  <section className="header_s">
    <div className="left">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="buttons">
        <Button pageUrl={buttonLink} className="btn-purple-solid">
          {buttonLabel}
        </Button>
      </div>
    </div>
    <div className="right">
      <img src={svg} alt="Illustration" />
    </div>
  </section>
);

export default HeaderS;
