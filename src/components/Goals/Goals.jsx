import React from 'react';

// Components
import CardIcon from '../CardIcon/CardIcon';

const Goals = () => (
  <div className="cms-block">
    <div className="container">
      <h4 className="pb-2 text-dark" data-aos="fade-up">
        Goals
      </h4>
      <h2 data-aos="fade-up" data-aos-delay="100">
        What we want to achieve
      </h2>
      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="col-span-6">
          <CardIcon
            type="horizontal"
            iconFront="fa-solid fa-rocket"
            iconBack="fa-solid fa-circle"
            title="Cutting edge"
            text="We differ ourselves from existing EdTech companies by implementing state of the art technologies, broadening the diversity of tools available. We unite context and technology."
            delay={200}
          />
        </div>
        <div className="col-span-6">
          <CardIcon
            type="horizontal"
            iconFront="fa-solid fa-rocket"
            iconBack="fa-solid fa-circle"
            title="Cutting edge"
            text="We differ ourselves from existing EdTech companies by implementing state of the art technologies, broadening the diversity of tools available. We unite context and technology."
            delay={200}
          />
        </div>
        <div className="col-span-6">
          <CardIcon
            type="horizontal"
            iconFront="fa-solid fa-rocket"
            iconBack="fa-solid fa-circle"
            title="Cutting edge"
            text="We differ ourselves from existing EdTech companies by implementing state of the art technologies, broadening the diversity of tools available. We unite context and technology."
            delay={200}
          />
        </div>
        <div className="col-span-6">
          <CardIcon
            type="horizontal"
            iconFront="fa-solid fa-rocket"
            iconBack="fa-solid fa-circle"
            title="Cutting edge"
            text="We differ ourselves from existing EdTech companies by implementing state of the art technologies, broadening the diversity of tools available. We unite context and technology."
            delay={200}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Goals;
