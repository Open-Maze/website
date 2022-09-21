import React from 'react';
import './Icon.css';

// External
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const Icon = ({ front, back }) => {
  const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);

  library.add(...iconList);

  return (
    <div className="relative h-[70px] text-6xl">
      <FontAwesomeIcon className="absolute left-4 top-0 text-skyline" icon={back} />
      <FontAwesomeIcon className="icon-blur absolute top-2 left-0" icon={front} />
    </div>
  );
};

export default Icon;
