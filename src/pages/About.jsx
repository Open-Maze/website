import React from 'react';
import './shared.css';

// Components
import Header from '../components/Header/Header';
import Goals from '../components/Goals/Goals';
import Team from '../components/Team/Team';
import CTA from '../components/CTA/CTA';

const About = () => (
  <div className="page about">
    <Header size="small" />
    <Goals />
    <Team />
    <CTA />
  </div>
);

export default About;
