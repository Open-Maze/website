import React from 'react';
import './CardIcon.css';

// Components
import Icon from '../Icon/Icon';

const CardIcon = ({ type, iconFront, iconBack, title, text, delay }) => (
  <div className={`w-full rounded-lg bg-white p-10 ${type}`} data-aos="fade-up" data-aos-delay={delay}>
    <div className="pb-6">
      <Icon front={iconFront} back={iconBack} />
    </div>
    <div className="text">
      <h3 className="pb-6">{title}</h3>
      <p className="text-slate-700">{text}</p>
    </div>
  </div>
);

export default CardIcon;
