import React from 'react';

// Components
import Button from '../../components/Button/Button';
import ContactCardL from '../../components/ContactCardL/ContactCardL';

const ContactSection = ({ subtitle, title, text, buttonMail, buttonLabel }) => (
  <div className="cms-block bg-white">
    <div
      className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div className="col-span-5 lg:col-start-1">
        <h4 className="pb-2 text-dark">{subtitle}</h4>
        <h2 className="pb-6">{title}</h2>
        <p className="pb-10 text-slate-700">{text}</p>
        {buttonMail && (
          <div>
            <Button pageUrl={`mailto:${buttonMail}`} className="button button--violet">
              {buttonLabel}
            </Button>
          </div>
        )}
      </div>
      <div className="col-span-6 lg:col-end-13">
        <ContactCardL
          link="mailto:hello@openmaze.io"
          icon="envelope"
          title="Send an e-mail"
          content="hello@openmaze.io"
        />
        <br />
        <ContactCardL
          link="https://linkedin.com/company/open-maze"
          icon="linkedin"
          title="LinkedIn"
          content="/open-maze"
        />
      </div>
    </div>
  </div>
);

export default ContactSection;
