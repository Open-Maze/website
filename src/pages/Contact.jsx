import React from 'react';
import './shared.css';

// Components
import Header from '../components/Header/Header';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => (
  <div className="page contact">
    <Header size="small" />
    <ContactForm />
  </div>
);

export default Contact;
