import React from 'react';
import './App.scss';

import Nav from '../Nav/Nav';
import HeaderL from '../HeaderL/HeaderL';
import CardIconVertical from '../CardIconVertical/CardIconVertical';
import Information from '../Information/Information';
import Footer from '../Footer/Footer';
import ProjectsSection from '../ProjectsSection/ProjectsSection';

import Svg from '../../assets/images/illustrations/header.svg';

const App = () => (
  <div className="app">
    <Nav />
    <div className="page">
      <HeaderL />
      <div className="core-values">
        <h4>Lorem ipsum</h4>
        <h2>Our core values</h2>
        <div className="core-values-cards">
          <CardIconVertical
            iconFront="rocket"
            iconBack="circle"
            title="Progression"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <CardIconVertical
            iconFront="rocket"
            iconBack="circle"
            title="Progression"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <CardIconVertical
            iconFront="rocket"
            iconBack="circle"
            title="Progression"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
      <Information
        title="About us"
        description="OpenMaze aims to provide users of online educational environments with greater insight into their own learning journey and performance through the use of AI-based tools. The use of such tooling often means that people working in the educational sector have to do less menial tasks."
        buttonLabel="View more"
        buttonLink="/about"
        image={Svg}
        flipped
      />
      <ProjectsSection />
    </div>
    <Footer />
  </div>
);

export default App;
