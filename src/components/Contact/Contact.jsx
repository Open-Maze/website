import React from 'react';
import './Contact.scss';

import Button from '../Button/Button';
import ContactCardS from '../ContactCardS/ContactCardS';

const Contact = () => (
  <div className="contact">
    <div className="contact-area">
      <div className="left">
        <h2>Get in touch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam ac commodo erat, quis venenatis turpis.
          Vivamus interdum interdum.
        </p>
        <div className="buttons">
          <Button pageUrl="tel:0401234567" className="btn-purple-solid">
            Call now
          </Button>
        </div>
      </div>
      <div className="right">
        <ContactCardS
          link="mailto:hello@openmaze.io"
          icon="envelope"
          title="Send an e-mail"
          content="hello@openmaze.io"
        />
        <br />
        <ContactCardS
          link="https://linkedin.com/company/open-maze"
          icon="linkedin"
          title="LinkedIn"
          content="/open-maze"
        />
      </div>
    </div>
  </div>
);

export default Contact;
