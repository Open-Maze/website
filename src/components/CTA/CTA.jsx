import React from 'react';

// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Button from '../Button/Button';

// Assets
import office from '../../assets/images/office.jpeg';

const CTA = () => (
  <div className="cms-block">
    <div className="container">
      <div className="grid grid-cols-1 gap-10 border-t border-midnight pt-32 md:grid-cols-12">
        <div className="col-span-4 md:col-start-1">
          <h4 className="pb-2 text-dark" data-aos="fade-up">
            Want to talk?
          </h4>
          <h2 data-aos="fade-up" data-aos-delay="100">
            Contact us
          </h2>
          <div className="mt-8 flex items-center gap-6" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center justify-center rounded-full bg-violet-lighter p-3">
              <FontAwesomeIcon className="text-violet" icon="fa-solid fa-phone" />
            </div>
            <a href="tel:0401234567" className="text-violet underline transition hover:text-midnight">
              +31 (0)40 1234567
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center justify-center rounded-full bg-violet-lighter p-3">
              <FontAwesomeIcon className="text-violet" icon="fa-solid fa-envelope" />
            </div>
            <a href="mailto:hello@openmaze.io" className="text-violet underline transition hover:text-midnight">
              hello@openmaze.io
            </a>
          </div>
        </div>
        <div className="col-span-8 md:col-end-13" data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-cols-8 gap-0 2xl:-mt-10 2xl:-mr-20">
            <div className="col-span-7 col-end-9 bg-cta-pattern bg-contain bg-right bg-no-repeat py-10 2xl:pr-20">
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
