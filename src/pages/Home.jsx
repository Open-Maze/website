import React from 'react';
import './shared.css';

// Components
import Header from '../components/Header/Header';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import Information from '../components/Information/Information';
import CoreValues from '../components/CoreValues/CoreValues';
import ContactSection from '../components/ContactSection/ContactSection';

// Assets
import Team from '../assets/images/team.jpg';

const Home = () => (
  <div className="page home">
    <Header size="large" />
    <ProjectsSection />
    <Information
      subtitle="Passionate People"
      title="About us"
      buttonLabel="Contact us"
      buttonLink="#bottom"
      image={Team}
    />
    <CoreValues />
    <ContactSection />
  </div>
);

export default Home;
