import React from 'react';
import './ContactCardS.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const ContactCardS = () => (
  <div className="ContactCardS">
    <div className="left">
      <FontAwesomeIcon icon={solid('phone')} />
    </div>

    <div className="middle">
      <h4>Call us</h4>
    </div>

    <div className="right">
      <p>+31 (0)40 1234567</p>
    </div>
  </div>
);

export default ContactCardS;
