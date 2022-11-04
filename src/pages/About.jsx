import React from 'react';
import './shared.css';

// Components
import Header from '../components/Header/Header';
import Goals from '../components/Goals/Goals';

const About = () => (
  <div className="page about">
    <Header size="small" />
    <Goals />
  </div>
);

export default About;
