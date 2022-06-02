import React from 'react';
import './shared.scss';

import Icon from '../components/Icon/Icon';

const Home = () => (
  <div className="page home">
    <h1>Welcome at OpenMaze</h1>
    <br />
    <h4>Lorem ipsum</h4>
    <h2>Our core values</h2>
    <p>Wij zijn OpenMaze, en dit zijn onze belangrijkste uitgangspunten</p>
    <Icon front="heart" back="circle" />
  </div>
);

export default Home;
