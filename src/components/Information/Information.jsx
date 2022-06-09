import React from 'react';
import './Information.scss';
import Button from '../Button/Button';

const Information = ({ title, description, buttonLabel, buttonLink, image, flipped }) => {
  let flexDirection;
  if (flipped) {
    flexDirection = {
      flexDirection: 'row-reverse',
    };
  } else {
    flexDirection = {
      flexDirection: 'row',
    };
  }

  return (
    <section className="information" style={flexDirection}>
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
        <img src={image} alt="Illustration" />
      </div>
    </section>
  );
};

export default Information;
