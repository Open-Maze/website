import React from 'react';
import './CardIconVertical.scss';

import Icon from '../Icon/Icon';

const CardIconVertical = ({ iconFront, iconBack, title, text }) => (
  <div className="card-icon-vertical">
    <Icon front={iconFront} back={iconBack} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default CardIconVertical;
