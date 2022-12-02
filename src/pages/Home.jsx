import React from 'react';
import './shared.css';

// Blocks
import Header from '../blocks/Header/Header';
import ProjectsSection from '../blocks/ProjectsSection/ProjectsSection';
import Information from '../blocks/Information/Information';
import CoreValues from '../blocks/CoreValues/CoreValues';
import ContactSection from '../blocks/ContactSection/ContactSection';

// Components
import CardIcon from '../components/CardIcon/CardIcon';

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
      buttonLink="/contact"
      buttonLabel="contact us"
      image={Team}
    />
    <CoreValues title="Core values" subtitle="Our beliefs">
      <CardIcon
        type="vertical"
        iconFront="fa-solid fa-rocket"
        iconBack="fa-solid fa-circle"
        title="Innovation"
        text="What makes us unique is that we use cutting-edge technologies, broadening the variety of tools available. We unite context and technology."
        delay={500}
        className="col-span-4"
      />
      <CardIcon
        type="vertical"
        iconFront="fa-solid fa-shield-alt"
        iconBack="fa-solid fa-circle"
        title="Privacy"
        text="We are of the opinion that data ownership should always remain with the user. We not only comply with regulations, but go the extra mile to ensure that you are in control of your data."
        delay={600}
        className="col-span-4"
      />
      <CardIcon
        type="vertical"
        iconFront="fa-solid fa-heart"
        iconBack="fa-solid fa-circle"
        title="Integrity"
        text="AI can be scary. We think that technology should always be transparent and explainable. Our technology should above all be trusted by its users."
        delay={700}
        className="col-span-4"
      />
    </CoreValues>
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
