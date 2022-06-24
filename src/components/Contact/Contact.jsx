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
          Questions about our tools or just want to? Feel free to mail us at the address listed here! You can also
          follow us on LinkedIn for the latest news about OpenMaze!
        </p>
        <div className="buttons">
          <Button pageUrl="mailto:hello@openmaze.io" className="btn-purple-solid">
            Mail us
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
