import React from 'react';

const FeatureComponent = ({ featureNr, title, description, image }) => (
  <section className="cms-block">
    <div className="container">
      <div className="grid grid-flow-dense grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="col-span-6 border-l-2 border-violet p-8 sm:p-12 lg:col-start-1">
          <h4 className="pb-2 text-midnight" data-aos="fade-up">
            {featureNr}
          </h4>
          <h2 className="pb-6" data-aos="fade-up" data-aos-delay="100">
            {title}
          </h2>
          <p className="pb-10 text-slate-700" data-aos="fade-up" data-aos-delay="200">
            {description}
          </p>
        </div>
        <div className="col-span-6 lg:col-end-13">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  </section>
);

export default FeatureComponent;
