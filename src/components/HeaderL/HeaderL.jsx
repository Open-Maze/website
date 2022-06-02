import React from 'react';
import './HeaderL.scss';
import Button from '../components/Button/Button';

const HeaderL = () => (
  <div className="header_l">
    <div className="left">
      <h1>Welcome to OpenMaze</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam ac commodo erat, quis venenatis turpis. Vivamus
        interdum interdum.
      </p>
      <div className="buttons">
        <Button className="btn-purple-solid">Schedule demo</Button>
        <Button className="btn-purple-outline">See more</Button>
      </div>
    </div>
    <div className="right">
      <img src="" alt="" />
    </div>
  </div>
);

export default HeaderL;
