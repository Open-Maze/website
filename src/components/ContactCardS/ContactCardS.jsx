import React from 'react';
import './ContactCardS.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactCardS = ({ icon, title, content }) => (
  <div className="ContactCardS">
    <div className="left">
      <FontAwesomeIcon className="icon" icon={icon} />
    </div>

    <div className="middle">
      <h4>{title}</h4>
    </div>

    <div className="right">
      <p>{content}</p>
    </div>
  </div>
);

export default ContactCardS;
