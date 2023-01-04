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
  const [info, setInfo] = useState({});
  const [contact, setContact] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/info').then((response) => {
      setInfo(response.data);
    });
    axios.get('https://api.openmaze.io/contact').then((response) => {
      setContact(response.data);
    });
  }, []);

  return (
    <div className="page contact">
      <Header
        size={contact.header?.size}
        title={contact.header?.title}
        text={contact.header?.text}
        buttonLink={contact.header?.button1_link}
        buttonLabel={contact.header?.button1_label}
        button2Link={contact.header?.button2_link}
        button2Label={contact.header?.button2_label}
        image={info.api_base + contact.header?.image?.url}
        arrow={contact.header?.arrow}
      >
        <div data-aos="fade-up" data-aos-delay="700">
          <ContactCard link={`mailto:${info.email}`} icon="envelope" title="Send an e-mail" content={info.email} />
          <br />
          <ContactCard
            link={`https://linkedin.com/company/${info.linkedin}`}
            icon="linkedin"
            title="LinkedIn"
            content={`/${info.linkedin}`}
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
