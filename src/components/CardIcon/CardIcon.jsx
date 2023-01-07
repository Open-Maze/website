import React from 'react';
import './CardIcon.css';

// Components
import Icon from '../Icon/Icon';

const CardIcon = ({ type, iconFront, iconBack, title, text, delay, className }) => (
  <div
    className={`h-full w-full rounded-xl border-8 border-solid border-light-gray bg-white p-10 shadow-lg ${type} ${className}`}
    data-aos="fade-up"
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
