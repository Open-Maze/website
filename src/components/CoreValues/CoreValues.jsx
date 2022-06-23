import React from 'react';
import './CoreValues.scss';

import CardIconVertical from '../CardIconVertical/CardIconVertical';

const CoreValues = () => (
  <div className="core-values">
    <h4>Lorem ipsum</h4>
    <h2>Our core values</h2>
    <div className="core-values-cards">
      <CardIconVertical
        iconFront="rocket"
        iconBack="circle"
        title="Progression"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <CardIconVertical
        iconFront="rocket"
        iconBack="circle"
        title="Progression"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <CardIconVertical
        iconFront="rocket"
        iconBack="circle"
        title="Progression"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  </div>
);

export default CoreValues;
