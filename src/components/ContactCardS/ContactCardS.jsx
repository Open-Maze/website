import React from 'react';
import './ContactCardS.scss';

const ContactCardS = ({ link, icon, title, content, delay }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <div className="ContactCardS" data-aos="fade-up" data-aos-delay={delay}>
      <div className="ContactCardS-inner">
        <div className={`left ${icon}`} />
        <div className="middle">
          <p>{title}</p>
        </div>
        <div className="right">
          <p>{content}</p>
        </div>
      </div>
    </div>
  </a>
);

export default ContactCardS;
