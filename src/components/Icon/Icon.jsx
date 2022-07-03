import React from 'react';
import './Icon.scss';

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
    <div className="icon">
      <FontAwesomeIcon className="icon-back" icon={back} />
      <FontAwesomeIcon className="icon-front" icon={front} />
    </div>
  );
};

export default Icon;
