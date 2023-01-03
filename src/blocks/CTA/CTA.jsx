import React, { useEffect, useState } from 'react';

// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

// Components
import Button from '../../components/Button/Button';

const CTA = ({ subtitle, title, image, buttonLink, buttonLabel }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/info').then((response) => {
      setInfo(response.data);
    });
  }, []);

  return (
    <section className="cms-block">
      <div className="container" data-aos="fade-up" data-aos-delay="500">
        <div className="grid grid-cols-1 gap-10 border-t border-midnight pt-32 md:grid-cols-12">
          <div className="col-span-4 md:col-start-1">
            <h4 className="pb-2 text-dark">{subtitle}</h4>
            <h2>{title}</h2>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center justify-center rounded-full bg-violet-lighter p-3">
                <FontAwesomeIcon className="text-violet" icon="fa-solid fa-envelope" />
              </div>
              <a href={`mailto:${info.email}`} className="text-violet underline transition hover:text-midnight">
                {info.email}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center justify-center rounded-full bg-violet-lighter p-3">
                <FontAwesomeIcon className="text-violet" icon="fa-brands fa-linkedin-in" />
              </div>
              <a
                href={`https://linkedin.com/company/${info.linkedin}`}
                rel="noopener noreferrer"
                target="_blank"
                className="text-violet underline transition hover:text-midnight"
              >
                /{info.linkedin}
              </a>
            </div>
          </div>
          <div className="col-span-8 md:col-end-13">
            <div className="grid grid-cols-8 gap-0 2xl:-mt-10 2xl:-mr-20">
              <div className="col-span-7 col-end-9 bg-cta-pattern bg-contain bg-right bg-no-repeat py-10 2xl:pr-20">
                <img
                  className="h-64 w-full rounded-xl border-8 border-solid border-light-gray shadow-lg"
                  src={info.api_base + image}
                  alt="Contact OpenMaze"
                />
              </div>
              {buttonLink && (
                <div className="absolute bottom-14 col-span-8">
                  <Button pageUrl={buttonLink} className="button button--violet">
                    {buttonLabel}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
