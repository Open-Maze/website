import React from 'react';

// Components
import Button from '../../components/Button/Button';
import ContactCard from '../../components/ContactCard/ContactCard';

const ContactSection = ({ subtitle, title, text, buttonLink, buttonLabel }) => (
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
        <ContactCard
          link="mailto:hello@openmaze.io"
          icon="envelope"
          title="Send an e-mail"
          content="hello@openmaze.io"
        />
        <br />
        <ContactCard
          link="https://linkedin.com/company/open-maze"
          icon="linkedin"
          title="LinkedIn"
          content="/open-maze"
        />
      </div>
    </div>
  </section>
);

export default ContactSection;
