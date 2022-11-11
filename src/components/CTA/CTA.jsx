import React from 'react';

// Components
import Button from '../Button/Button';

// Assets
import office from '../../assets/images/office.jpeg';

const CTA = () => (
  <div className="cms-block">
    <div className="container">
      <div className="grid grid-cols-12 gap-10 border-t border-midnight pt-32">
        <div className="col-span-4 col-start-1">
          <h4 className="pb-2 text-dark" data-aos="fade-up">
            Want to talk?
          </h4>
          <h2 data-aos="fade-up" data-aos-delay="100">
            Contact us
          </h2>
        </div>
        <div className="col-span-8 col-end-13" data-aos="fade-up" data-aos-delay="200">
          <div className="-mr-20 -mt-10 grid grid-cols-8 gap-0">
            <div className="col-span-7 col-end-9 bg-cta-pattern bg-contain bg-right bg-no-repeat py-10 pr-20">
              <img className="h-64 w-full rounded-md shadow" src={office} alt="Office" />
            </div>
            <div className="absolute bottom-14 col-span-8">
              <Button pageUrl="/contact" className="button button--violet">
                De snelste route naar een samenwerking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CTA;
