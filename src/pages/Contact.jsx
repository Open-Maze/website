import React, { useEffect, useState } from 'react';
import './shared.css';

// External
import axios from 'axios';

// Blocks
import Header from '../blocks/Header/Header';
// import ContactForm from '../blocks/ContactForm/ContactForm';

// Components
import ContactCard from '../components/ContactCard/ContactCard';

const Contact = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/contact').then((response) => {
      setContact(response.data);
    });
  }, []);

  return (
    <div className="page contact">
      <Header
        size={contact.header?.header_size}
        title={contact.header?.header_title}
        text={contact.header?.header_text}
        buttonLink={contact.header?.button1_link}
        buttonLabel={contact.header?.button1_label}
        button2Link={contact.header?.button2_link}
        button2Label={contact.header?.button2_label}
        image={contact.header?.header_image?.url}
        arrow={contact.header?.header_arrow}
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
};

export default Contact;
