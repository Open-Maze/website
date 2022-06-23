import React from 'react';
import './App.scss';

import Nav from '../Nav/Nav';
import HeaderL from '../HeaderL/HeaderL';
import CardIconVertical from '../CardIconVertical/CardIconVertical';
import Information from '../Information/Information';
import ContactCardS from '../ContactCardS/ContactCardS';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ProjectsSection from '../ProjectsSection/ProjectsSection';

import Svg from '../../assets/images/illustrations/header.svg';

const App = () => (
  <div className="app">
    <Nav />
    <div className="page">
      <HeaderL />
      <div className="core-values">
        {/* <h4>Our</h4> */}
        <h2>Core values</h2>
        <div className="core-values-cards">
          <CardIconVertical
            iconFront="rocket"
            iconBack="circle"
            title="Cutting edge"
            text="We differ ourselves from existing EdTech companies by implementing state of the art technologies, broadening the diversity of tools available. We unite context and technology."
          />
          <CardIconVertical
            iconFront="lock"
            iconBack="circle"
            title="Privacy"
            text="We are of the opinion that data ownership should always remain with the user. We not only comply with regulations, but go the extra mile to ensure that you control your data."
          />
          <CardIconVertical
            iconFront="universal-access"
            iconBack="circle"
            title="Integrity"
            text="AI can be scary. We think that technology should always be transparent and explainable. Our technology should above all be trusted by its users."
          />
        </div>
      </div>
      <Information title="About us" image={Svg} />
      <ProjectsSection />

      <ContactCardS />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default App;
