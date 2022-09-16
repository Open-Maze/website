import React from 'react';

// Components
import Icon from '../Icon/Icon';

const CardIconVertical = ({ iconFront, iconBack, title, text, delay }) => (
  <div className="w-full rounded-lg bg-white p-10" data-aos="fade-up" data-aos-delay={delay}>
    <Icon front={iconFront} back={iconBack} />
    <h3 className="py-6">{title}</h3>
    <p className="text-slate-700">{text}</p>
  </div>
);

export default CardIconVertical;
