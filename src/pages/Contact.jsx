import React from 'react';
import './shared.css';

// Blocks
import Header from '../blocks/Header/Header';

// Components
import ContactForm from '../components/ContactForm/ContactForm';

// Assets
import headerImage from '../assets/images/illustrations/contact.svg';

const Contact = () => (
  <div className="page contact">
    <Header
      size="large"
      title="Get in touch"
      text="We aim to provide students using online educational environments with greater insight into their own learning journey and performance through the use of AI powered tools."
      external
      buttonLink="mailto:hello@openmaze.io"
      buttonLabel="send an email"
      image={headerImage}
    />
    <ContactForm />
  </div>
);

export default Contact;
