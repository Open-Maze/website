import React from 'react';

// Components
import CardIconVertical from '../CardIconVertical/CardIconVertical';

const CoreValues = () => (
  <div className="cms-block">
    <div className="container">
      <h4 className="pb-2 text-midnight" data-aos="fade-up">
        Our Beliefs
      </h4>
      <h2 data-aos="fade-up" data-aos-delay="100">
        Core values
      </h2>
      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="col-span-4">
          <CardIconVertical
            iconFront="rocket"
            iconBack="circle"
            title="Cutting edge"
            text="We differ ourselves from existing EdTech companies by implementing state of the art technologies, broadening the diversity of tools available. We unite context and technology."
            delay={200}
          />
        </div>
        <div className="col-span-4">
          <CardIconVertical
            iconFront="shield-alt"
            iconBack="circle"
            title="Privacy"
            text="We are of the opinion that data ownership should always remain with the user. We not only comply with regulations, but go the extra mile to ensure that you control your data."
            delay={300}
          />
        </div>
        <div className="col-span-4">
          <CardIconVertical
            iconFront="heart"
            iconBack="circle"
            title="Integrity"
            text="AI can be scary. We think that technology should always be transparent and explainable. Our technology should above all be trusted by its users."
            delay={400}
          />
        </div>
      </div>
    </div>
  </div>
);

export default CoreValues;
