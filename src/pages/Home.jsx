import React from 'react';

// Components
import HeaderL from '../components/HeaderL/HeaderL';
import CoreValues from '../components/CoreValues/CoreValues';
import Information from '../components/Information/Information';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ContactSection from '../components/ContactSection/ContactSection';

// Assets
import Team from '../assets/images/team.jpg';

const Home = () => (
  <div className="page home">
    <HeaderL />
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
