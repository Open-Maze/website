import React from 'react';
import './shared.css';

// Components
import Header from '../components/Header/Header';
import Goals from '../components/Goals/Goals';
import Team from '../components/Team/Team';
import CTA from '../components/CTA/CTA';

// Assets
import headerImage from '../assets/images/illustrations/header.svg';
import office from '../assets/images/office.jpeg';

const About = () => (
  <div className="page about">
    <Header
      size="small"
      title="About us"
      text="We aim to provide users of online educational environments with greater insight into their own learning journey and performance through the use of AI-based tools."
      buttonLink="products"
      buttonLabel="our products"
      image={headerImage}
    />
    <Goals title="What we want to achieve" subtitle="Goals" />
    <Team title="Our team" subtitle="Meet the people behind OpenMaze" />
    <CTA
      title="Contact us"
      subtitle="Want to talk?"
      phone="0401234567"
      phoneLabel="+31 (0)40 1234567"
      email="hello@openmaze.io"
      image={office}
      buttonLink="contact"
      buttonLabel="De snelste route naar een samenwerking"
    />
  </div>
);

export default About;
