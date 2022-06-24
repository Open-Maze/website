import React from 'react';
import './CoreValues.scss';

import CardIconVertical from '../CardIconVertical/CardIconVertical';

const CoreValues = () => (
  <div className="core-values">
    <h4>Our beliefs</h4>
    <h2>Core values</h2>
    <div className="core-values-cards">
      <CardIconVertical
        iconFront="rocket"
        iconBack="circle"
        title="Cutting edge"
        text="We differ ourselves from existing EdTech companies by implementing state of the art technologies, broadening the diversity of tools available. We unite context and technology."
      />
      <CardIconVertical
        iconFront="shield-alt"
        iconBack="circle"
        title="Privacy"
        text="We are of the opinion that data ownership should always remain with the user. We not only comply with regulations, but go the extra mile to ensure that you control your data."
      />
      <CardIconVertical
        iconFront="heart"
        iconBack="circle"
        title="Integrity"
        text="AI can be scary. We think that technology should always be transparent and explainable. Our technology should above all be trusted by its users."
      />
    </div>
  </div>
);

export default CoreValues;
