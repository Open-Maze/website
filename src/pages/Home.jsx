import React from 'react';
import './shared.css';

// Components
import Header from '../blocks/Header/Header';
import ProjectsSection from '../blocks/ProjectsSection/ProjectsSection';
import Information from '../blocks/Information/Information';
import CoreValues from '../blocks/CoreValues/CoreValues';
import ContactSection from '../blocks/ContactSection/ContactSection';

// Assets
import headerImage from '../assets/images/illustrations/header.svg';
import Team from '../assets/images/team.jpg';

const Home = () => (
  <div className="page home">
    <Header
      size="large"
      title="Welcome to OpenMaze"
      text="We aim to provide students using online educational environments with greater insight into their own learning journey and performance through the use of AI powered tools."
      buttonLink="/products"
      buttonLabel="our products"
      image={headerImage}
    />
    <ProjectsSection />
    <Information
      subtitle="Passionate people"
      title="About us"
      text="We are young professionals who are passionate about AI and other cutting-edge technologies. There is a great opportunity for the education sector to leverage this to improve the quality of education. Our goal is to give users of online educational environments greater insight into their own learning journey and performance through the use of AI-based tools. We want to greatly improve the experience students have during their studies. These kinds of tools, aimed at students, indirectly benefit teachers, often relieving them of tedious tasks."
      buttonLink="#bottom"
      buttonLabel="contact us"
      image={Team}
    />
    <CoreValues title="Core values" subtitle="Our beliefs" />
    <ContactSection
      title="Get in touch"
      subtitle="Meaningful Connections"
      text="Questions about our tools or just want to say hi? Feel free to mail us at the address listed here! You can also follow us on LinkedIn for the latest news about OpenMaze!"
      buttonMail="hello@openmaze.io"
      buttonLabel="send an e-mail"
    />
  </div>
);

export default Home;
