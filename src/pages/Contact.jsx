import React from 'react';
import './shared.css';

// Blocks
import Header from '../blocks/Header/Header';
import ContactForm from '../blocks/ContactForm/ContactForm';

// Components
import ContactCard from '../components/ContactCard/ContactCard';

// Assets
import headerImage from '../assets/images/illustrations/contact.svg';

const Contact = () => (
  <div className="page contact">
    <Header
      size="large"
      title="Get in touch"
      text="Questions about our tools or just want to say hi? Feel free to mail us. You can also follow us on LinkedIn for the latest news about OpenMaze!"
      image={headerImage}
    >
      <div data-aos="fade-up" data-aos-delay="500">
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
    </Header>
    {/* <ContactForm */}
    {/*  subtitle="Questions?" */}
    {/*  title="Send us a message" */}
    {/*  text="If you have any questions about our tools, submit this form and we will get back to you as soon as possible." */}
    {/* /> */}
  </div>
);

export default Contact;
