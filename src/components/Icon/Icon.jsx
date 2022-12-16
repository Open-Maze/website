import React from 'react';
import './Icon.css';

// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ front, back }) => (
  <div className="relative h-[70px] text-6xl">
    <FontAwesomeIcon className="absolute left-4 top-0 text-skyline" icon={back} />
    <FontAwesomeIcon className="icon-blur absolute top-2 left-0" icon={front} />
  </div>
);

export default Icon;
