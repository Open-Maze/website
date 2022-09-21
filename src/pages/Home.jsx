import React from 'react';
import './shared.css';

// Components
import Header from '../components/Header/Header';
import CoreValues from '../components/CoreValues/CoreValues';
import Information from '../components/Information/Information';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ContactSection from '../components/ContactSection/ContactSection';

// Assets
import Team from '../assets/images/team.jpg';

const Home = () => (
  <div className="page home">
    <Header size="large" />
    <CoreValues />
    <Information
      subtitle="Passionate People"
      title="About us"
      buttonLabel="Contact us"
      buttonLink="#bottom"
      image={Team}
    />
    <ProjectsSection />
    <ContactSection />
  </div>
);

export default Home;
