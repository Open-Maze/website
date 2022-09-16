import React from 'react';

// Components
import Button from '../Button/Button';
import ContactCardS from '../ContactCardS/ContactCardS';

const ContactSection = () => (
  <div className="cms-block bg-white py-40">
    <div className="container grid grid-cols-12 items-center">
      <div className="col-span-5 col-start-1">
        <h4 className="pb-2 text-skyline" data-aos="fade-up">
          Meaningful Connections
        </h4>
        <h2 className="pb-6" data-aos="fade-up" data-aos-delay="100">
          Get in touch
        </h2>
        <p className="pb-10" data-aos="fade-up" data-aos-delay="200">
          Questions about our tools or just want to say hi? Feel free to mail us at the address listed here! You can
          also follow us on LinkedIn for the latest news about OpenMaze!
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <Button pageUrl="mailto:hello@openmaze.io" className="button button--violet">
            Mail us
          </Button>
        </div>
      </div>
      <div className="col-span-6 col-end-13">
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
