import React from 'react';
import './CardIcon.css';

// Components
import Icon from '../Icon/Icon';

const CardIcon = ({ type, iconFront, iconBack, title, text, delay, className }) => (
  <div
    className={`h-full w-full rounded-xl bg-white p-10 ${type} ${className}`}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
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
