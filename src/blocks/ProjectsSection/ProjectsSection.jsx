import React, { useState } from 'react';
import './ProjectsSection.css';

// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Button from '../../components/Button/Button';

const ProjectsSection = ({
  subtitle,
  title,
  icon1,
  icon2,
  icon3,
  name1,
  name2,
  name3,
  image1,
  image2,
  image3,
  text1,
  text2,
  text3,
}) => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <section className="cms-block">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-12" data-aos="fade-up" data-aos-delay="500">
        <div className="col-span-6 lg:col-start-1">
          <h4 className="pb-2 text-dark">{subtitle}</h4>
          <h2>{title}</h2>
          <div className="mt-20">
            <div>
              <button
                id="button-1"
                onClick={() => {
                  setIsActive1(true);
                  setIsActive2(false);
                  setIsActive3(false);
                }}
                className={isActive1 ? 'projects-button active' : 'projects-button'}
                type="button"
              >
                <FontAwesomeIcon className="icon mr-4 w-4" icon={`fa-solid fa-${icon1}`} />
                <span>{name1}</span>
              </button>
            </div>
            <br />
            <div>
              <button
                id="button-2"
                onClick={() => {
                  setIsActive1(false);
                  setIsActive2(true);
                  setIsActive3(false);
                }}
                className={isActive2 ? 'projects-button active' : 'projects-button'}
                type="button"
              >
                <FontAwesomeIcon className="icon mr-4 w-4" icon={`fa-solid fa-${icon2}`} />
                <span>{name2}</span>
              </button>
            </div>
            <br />
            <div>
              <button
                id="button-3"
                onClick={() => {
                  setIsActive1(false);
                  setIsActive2(false);
                  setIsActive3(true);
                }}
                className={isActive3 ? 'projects-button active' : 'projects-button'}
                type="button"
              >
                <FontAwesomeIcon className="icon mr-4 w-4" icon={`fa-solid fa-${icon3}`} />
                <span>{name3}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-end-13">
          <div id="card-1" className={isActive1 ? 'card active' : 'card'}>
            <img src={image1} alt={name1} className="w-full rounded-t-md" style={{ backgroundColor: '#d1a4f7' }} />
            <div className="text">
              <h3>{name1}</h3>
              <p>{text1}</p>
              <Button pageUrl="/q-app" className="button button--skyline-outline">
                learn more
              </Button>
            </div>
          </div>
          <div id="card-2" className={isActive2 ? 'card active' : 'card'}>
            <img src={image2} alt={name2} className="w-full rounded-t-md" style={{ backgroundColor: '#adeaf4' }} />
            <div className="text">
              <h3>{name2}</h3>
              <p>{text2}</p>
              <Button pageUrl="/knowledge-profiler" className="button button--skyline-outline">
                learn more
              </Button>
            </div>
          </div>
          <div id="card-3" className={isActive3 ? 'card active' : 'card'}>
            <img src={image3} alt={name3} className="w-full rounded-t-md" style={{ backgroundColor: '#a3a4e5' }} />
            <div className="text">
              <h3>{name3}</h3>
              <p>{text3}</p>
              <Button pageUrl="/document-screener" className="button button--skyline-outline">
                learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
