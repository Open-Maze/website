import React from 'react';

// Components
import Icon from '../Icon/Icon';

const CardIconVertical = ({ iconFront, iconBack, title, text, delay }) => (
  <div className="card-icon-vertical" data-aos="fade-up" data-aos-delay={delay}>
    <Icon front={iconFront} back={iconBack} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default CardIconVertical;
