import React from 'react';
import './shared.css';

// Components
import Header from '../components/Header/Header';
import Goals from '../components/Goals/Goals';
import Team from '../components/Team/Team';
import CTA from '../components/CTA/CTA';

// Assets
import office from '../assets/images/office.jpeg';

const About = () => (
  <div className="page about">
    <Header size="small" />
    <Goals />
    <Team />
    <CTA
      title="Contact us"
      subtitle="Want to talk?"
      phone="0401234567"
      phoneLabel="+31 (0)40 1234567"
      email="hello@openmaze.io"
      image={office}
      buttonLink="/contact"
      buttonLabel="De snelste route naar een samenwerking"
    />
  </div>
);

export default About;
