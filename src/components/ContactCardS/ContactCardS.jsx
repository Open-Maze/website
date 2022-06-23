import React from 'react';
import './ContactCardS.scss';

const ContactCardS = ({ link, icon, title, content }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <div className="ContactCardS">
      <div className={`left ${icon}`} />
      <div className="middle">
        <p>{title}</p>
      </div>
      <div className="right">
        <p>{content}</p>
      </div>
    </div>
  </a>
);

export default ContactCardS;
