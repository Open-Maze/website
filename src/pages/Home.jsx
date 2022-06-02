import React from 'react';
import './shared.scss';

import Button from '../components/Button/Button';

const Home = () => (
  <div className="page home">
    <h1>Welcome at OpenMaze</h1>
    <br />
    <h4>Lorem ipsum</h4>
    <h2>Our core values</h2>
    <p>Wij zijn OpenMaze, en dit zijn onze belangrijkste uitgangspunten</p>

    <Button className="btn-purple-solid">Learn more</Button>
    <br />
    <br />
    <Button className="btn-purple-outline">Learn more</Button>
  </div>
);
export default Home;
