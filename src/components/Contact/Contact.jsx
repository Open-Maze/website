import React from 'react';
import './Contact.scss';

import Button from '../Button/Button';
import ContactCardS from '../ContactCardS/ContactCardS';

const Contact = () => (
  <div className="contact">
    <div className="contact-area">
      <div className="left">
        <h2 data-aos="fade-up">Get in touch</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Questions about our tools or just want to say hi? Feel free to mail us at the address listed here! You can
          also follow us on LinkedIn for the latest news about OpenMaze!
        </p>
        <div className="buttons" data-aos="fade-up" data-aos-delay="200">
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
          delay={300}
        />
        <br />
        <ContactCardS
          link="https://linkedin.com/company/open-maze"
          icon="linkedin"
          title="LinkedIn"
          content="/open-maze"
          delay={400}
        />
      </div>
    </div>
  </div>
);

export default Contact;
