import React from 'react';

// Components
import CardIcon from '../CardIcon/CardIcon';

const CoreValues = ({ subtitle, title }) => (
  <div className="cms-block">
    <div className="container">
      <h4 className="pb-2 text-dark" data-aos="fade-up">
        {subtitle}
      </h4>
      <h2 data-aos="fade-up">{title}</h2>
      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="col-span-4">
          <CardIcon
            type="vertical"
            iconFront="fa-solid fa-rocket"
            iconBack="fa-solid fa-circle"
            title="Cutting edge"
            text="We differ ourselves from existing EdTech companies by implementing state of the art technologies, broadening the diversity of tools available. We unite context and technology."
            delay={200}
          />
        </div>
        <div className="col-span-4">
          <CardIcon
            type="vertical"
            iconFront="fa-solid fa-shield-alt"
            iconBack="fa-solid fa-circle"
            title="Privacy"
            text="We are of the opinion that data ownership should always remain with the user. We not only comply with regulations, but go the extra mile to ensure that you control your data."
            delay={300}
          />
        </div>
        <div className="col-span-4">
          <CardIcon
            type="vertical"
            iconFront="fa-solid fa-heart"
            iconBack="fa-solid fa-circle"
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
