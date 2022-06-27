import React, { useEffect } from 'react';
import './App.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Nav from '../Nav/Nav';
import HeaderL from '../HeaderL/HeaderL';
import CoreValues from '../CoreValues/CoreValues';
import Information from '../Information/Information';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import Team from '../../assets/images/team.jpg';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="app">
      <Nav />
      <div className="page">
        <HeaderL />
        <CoreValues />
        <Information
          subtitle="Passionate work"
          title="About us"
          buttonLabel="Contact us"
          buttonLink="#bottom"
          image={Team}
        />
        <ProjectsSection />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
