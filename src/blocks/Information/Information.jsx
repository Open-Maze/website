import React from 'react';

// Components
import Button from '../../components/Button/Button';

const Information = ({ subtitle, title, text, buttonLabel, buttonLink, image }) => (
  <div className="cms-block bg-white">
    <div className="container">
      <div className="grid grid-flow-dense grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="col-span-6 lg:col-start-1">
          <img className="h-fit w-full rounded-lg" src={image} alt="Team" data-aos="fade-up" />
        </div>
        <div className="col-span-5 lg:col-end-13">
          <h4 className="pb-2 text-dark" data-aos="fade-up">
            {subtitle}
          </h4>
          <h2 className="pb-6" data-aos="fade-up" data-aos-delay="100">
            {title}
          </h2>
          <p className="pb-10 text-slate-700" data-aos="fade-up" data-aos-delay="200">
            {text}
          </p>
          {buttonLink && (
            <div data-aos="fade-up" data-aos-delay="300">
              <Button pageUrl={buttonLink} className="button button--violet">
                {buttonLabel}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Information;
