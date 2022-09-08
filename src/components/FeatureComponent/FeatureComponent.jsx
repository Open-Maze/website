import React from 'react';

const FeatureComponent = ({ featureNr, title, description, image }) => (
  <section className="feature-component">
    <div className="left">
      <span>{featureNr}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div className="right">
      <img src={image} alt="Illustration-products" />
    </div>
  </section>
);

export default FeatureComponent;
