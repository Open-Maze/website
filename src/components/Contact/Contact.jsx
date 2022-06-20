import React from 'react';
import './Contact.scss';

import Button from '../Button/Button';

const Contact = () => (
  <div className="contact">
    <div className="contact-area">
      <div className="left">
        <h2>Get in touch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam ac commodo erat, quis venenatis turpis.
          Vivamus interdum interdum.
        </p>
        <div className="buttons">
          <Button pageUrl="/contact" className="btn-purple-solid">
            Call now
          </Button>
        </div>
      </div>
      <div className="right" />
    </div>
  </div>
);
export default Contact;
