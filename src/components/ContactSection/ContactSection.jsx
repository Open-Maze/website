import React from 'react';

// Components
import Button from '../Button/Button';
import ContactCardS from '../ContactCardS/ContactCardS';

const ContactSection = () => (
  <div className="contact-section">
    <div className="contact-area">
      <div className="left">
        <h4 data-aos="fade-up">Meaningful Connections</h4>
        <h2 data-aos="fade-up" data-aos-delay="100">
          Get in touch
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Questions about our tools or just want to say hi? Feel free to mail us at the address listed here! You can
          also follow us on LinkedIn for the latest news about OpenMaze!
        </p>
        <div className="buttons" data-aos="fade-up" data-aos-delay="300">
          <Button pageUrl="mailto:hello@openmaze.io" className="button button--violet">
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
          delay={400}
        />
        <br />
        <ContactCardS
          link="https://linkedin.com/company/open-maze"
          icon="linkedin"
          title="LinkedIn"
          content="/open-maze"
          delay={500}
        />
      </div>
    </div>
  </div>
);

export default ContactSection;
