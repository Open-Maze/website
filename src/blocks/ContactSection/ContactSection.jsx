import React, { useEffect, useState } from 'react';

// External
import axios from 'axios';

// Components
import Button from '../../components/Button/Button';
import ContactCard from '../../components/ContactCard/ContactCard';

const ContactSection = ({ subtitle, title, text, buttonLink, buttonLabel }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/info').then((response) => {
      setInfo(response.data);
    });
  }, []);

  return (
    <section className="cms-block bg-white">
      <div
        className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="col-span-5 lg:col-start-1">
          {subtitle && <h4 className="pb-2 text-dark">{subtitle}</h4>}
          {title && <h2 className="pb-6">{title}</h2>}
          {text && <p className="pb-10 text-slate-700">{text}</p>}
          {buttonLink && (
            <div>
              <Button pageUrl={buttonLink} className="button button--violet">
                {buttonLabel}
              </Button>
            </div>
          )}
        </div>
        <div className="col-span-6 lg:col-end-13">
          <ContactCard link={`mailto:${info.email}`} icon="envelope" title="Send an e-mail" content={info.email} />
          <br />
          <ContactCard
            link={`https://linkedin.com/company/${info.linkedin}`}
            icon="linkedin"
            title="LinkedIn"
            content={`/${info.linkedin}`}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
