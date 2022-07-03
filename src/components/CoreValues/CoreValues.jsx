import React from 'react';
import './CoreValues.scss';

// Components
import CardIconVertical from '../CardIconVertical/CardIconVertical';

const CoreValues = () => (
  <div className="core-values">
    <h4 data-aos="fade-up">Our Beliefs</h4>
    <h2 data-aos="fade-up" data-aos-delay="100">
      Core values
    </h2>
    <div className="core-values-cards">
      <CardIconVertical
        iconFront="rocket"
        iconBack="circle"
        title="Cutting edge"
        text="We differ ourselves from existing EdTech companies by implementing state of the art technologies, broadening the diversity of tools available. We unite context and technology."
        delay={200}
      />
      <CardIconVertical
        iconFront="shield-alt"
        iconBack="circle"
        title="Privacy"
        text="We are of the opinion that data ownership should always remain with the user. We not only comply with regulations, but go the extra mile to ensure that you control your data."
        delay={300}
      />
      <CardIconVertical
        iconFront="heart"
        iconBack="circle"
        title="Integrity"
        text="AI can be scary. We think that technology should always be transparent and explainable. Our technology should above all be trusted by its users."
        delay={400}
      />
    </div>
  </div>
);

export default CoreValues;
