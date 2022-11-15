import React from 'react';
import Button from '../Button/Button';

const CardImageHorizontal = ({ imageLeft, title, description, image, buttonLabel, buttonLink }) => (
  <section className="cms-block">
    <div className="container" data-aos="fade-up" data-aos-delay="500">
      <div className="grid grid-flow-dense grid-cols-1 items-center gap-10 rounded-lg bg-white lg:grid-cols-12">
        {imageLeft ? (
          <>
            <div className="col-span-6 h-full w-full lg:col-start-1">
              <img src={image} alt={title} className="h-full w-full rounded-l-lg" />
            </div>
            <div className="col-span-6 p-10 sm:p-14 lg:col-end-13">
              <h2 className="pb-6">{title}</h2>
              <p className="pb-10 text-slate-700">{description}</p>
              {buttonLink && (
                <Button pageUrl={buttonLink} className="button button--violet">
                  {buttonLabel}
                </Button>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="col-span-6 p-10 sm:p-14 lg:col-start-1">
              <h2 className="pb-6">{title}</h2>
              <p className="pb-10 text-slate-700">{description}</p>
              {buttonLink && (
                <Button pageUrl={buttonLink} className="button button--violet">
                  {buttonLabel}
                </Button>
              )}
            </div>
            <div className="col-span-6 h-full w-full lg:col-end-13">
              <img src={image} alt={title} className="h-full w-full rounded-r-lg" />
            </div>
          </>
        )}
      </div>
    </div>
  </section>
);

export default CardImageHorizontal;
