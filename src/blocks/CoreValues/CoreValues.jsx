import React from 'react';

// Components
import CardIcon from '../../components/CardIcon/CardIcon';

const CoreValues = ({ subtitle, title }) => (
  <div className="cms-block">
    <div className="container" data-aos="fade-up" data-aos-delay="500">
      <h4 className="pb-2 text-dark">{subtitle}</h4>
      <h2>{title}</h2>
      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="col-span-4">
          <CardIcon
            type="vertical"
            iconFront="fa-solid fa-rocket"
            iconBack="fa-solid fa-circle"
            title="Cutting edge"
            text="We differ ourselves from existing EdTech companies by implementing state of the art technologies, broadening the diversity of tools available. We unite context and technology."
            delay={500}
          />
        </div>
        <div className="col-span-4">
          <CardIcon
            type="vertical"
            iconFront="fa-solid fa-shield-alt"
            iconBack="fa-solid fa-circle"
            title="Privacy"
            text="We are of the opinion that data ownership should always remain with the user. We not only comply with regulations, but go the extra mile to ensure that you control your data."
            delay={600}
          />
        </div>
        <div className="col-span-4">
          <CardIcon
            type="vertical"
            iconFront="fa-solid fa-heart"
            iconBack="fa-solid fa-circle"
            title="Integrity"
            text="AI can be scary. We think that technology should always be transparent and explainable. Our technology should above all be trusted by its users."
            delay={700}
          />
        </div>
      </div>
    </div>
  </div>
);

export default CoreValues;
