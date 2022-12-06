import React from 'react';

// Components
import Button from '../../components/Button/Button';

const Information = ({ subtitle, title, text, buttonLabel, buttonLink, image }) => (
  <div className="cms-block bg-white">
    <div className="container" data-aos="fade-up" data-aos-delay="500">
      <div className="grid grid-flow-dense grid-cols-1 items-center gap-10 lg:grid-cols-12">
        {image && (
          <div className="col-span-6 lg:col-start-1">
            <img className="h-full w-full rounded-lg" src={image} alt="Team" />
          </div>
        )}
        <div className="col-span-5 lg:col-end-13">
          {subtitle && <h4 className="pb-2 text-dark">{subtitle}</h4>}
          {title && <h2 className="pb-6">{title}</h2>}
          {text && <p className="pb-10 text-slate-700">{text}</p>}
          {buttonLink && (
            <Button pageUrl={buttonLink} className="button button--skyline">
              {buttonLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Information;
