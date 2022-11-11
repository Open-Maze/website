import React from 'react';

// Components
import Button from '../Button/Button';
import ContactCardL from '../ContactCardL/ContactCardL.jsx';

const ContactSection = () => (
  <div className="cms-block bg-white">
    <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
      <div className="col-span-5 lg:col-start-1">
        <h4 className="pb-2 text-dark" data-aos="fade-up">
          Meaningful Connections
        </h4>
        <h2 className="pb-6" data-aos="fade-up" data-aos-delay="100">
          Get in touch
        </h2>
        <p className="pb-10 text-slate-700" data-aos="fade-up" data-aos-delay="200">
          Questions about our tools or just want to say hi? Feel free to mail us at the address listed here! You can
          also follow us on LinkedIn for the latest news about OpenMaze!
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <Button pageUrl="mailto:hello@openmaze.io" className="button button--violet">
            Mail us
          </Button>
        </div>
      </div>
      <div className="col-span-6 lg:col-end-13">
        <ContactCardL
          link="mailto:hello@openmaze.io"
          icon="envelope"
          title="Send an e-mail"
          content="hello@openmaze.io"
          delay={400}
        />
        <br />
        <ContactCardL
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
