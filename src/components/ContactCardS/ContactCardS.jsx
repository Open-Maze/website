import React from 'react';
import './ContactCardS.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactCardS = ({ link, icon, title, content }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <div className="ContactCardS">
      <div className="left">
        <FontAwesomeIcon className="icon" icon={icon} />
      </div>
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
