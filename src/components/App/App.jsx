import React from 'react';
import './App.scss';

import Nav from '../Nav/Nav';
import HeaderL from '../HeaderL/HeaderL';
import CoreValues from '../CoreValues/CoreValues';
import Information from '../Information/Information';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import Svg from '../../assets/images/illustrations/header.svg';

const App = () => (
  <div className="app">
    <Nav />
    <div className="page">
      <HeaderL />
      <CoreValues />
      <Information
        subtitle="Lorem ipsum"
        title="About us"
        description="OpenMaze aims to provide users of online educational environments with greater insight into their own learning journey and performance through the use of AI-based tools. The use of such tooling often means that people working in the educational sector have to do less menial tasks."
        buttonLabel="View more"
        buttonLink="/about"
        image={Svg}
      />
      <ProjectsSection />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default App;
