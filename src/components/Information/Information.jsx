import React from 'react';
import './Information.scss';

import Button from '../Button/Button';

const Information = ({ title, description, buttonLabel, buttonLink, image, flipped }) => {
  let orderLeft;
  let orderRight;
  if (flipped) {
    orderLeft = {
      order: '1',
    };
    orderRight = {
      order: '2',
    };
  } else {
    orderLeft = {
      order: '2',
    };
    orderRight = {
      order: '1',
    };
  }

  return (
    <div className="information">
      <div className="information-wrapper">
        <div className="left" style={orderLeft}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="buttons">
            <Button pageUrl={buttonLink} className="btn-purple-solid">
              {buttonLabel}
            </Button>
          </div>
        </div>
        <div className="right" style={orderRight}>
          <img src={image} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Information;
