import React, { useEffect, useState } from 'react';
import './shared.css';

// External
import axios from 'axios';

// Blocks
import Header from '../blocks/Header/Header';
import ProjectsSection from '../blocks/ProjectsSection/ProjectsSection';
import Information from '../blocks/Information/Information';
import CoreValues from '../blocks/CoreValues/CoreValues';
import ContactSection from '../blocks/ContactSection/ContactSection';

// Components
import CardIcon from '../components/CardIcon/CardIcon';

// Assets
import Team from '../assets/images/team/team-portrait.jpg';

const Home = () => {
  const [home, setHome] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/home').then((response) => {
      setHome(response.data);
    });
  }, []);

  return (
    <div className="page home">
      <Header
        size={home.header?.size}
        title={home.header?.title}
        text={home.header?.text}
        buttonLink={home.header?.button1_link}
        buttonLabel={home.header?.button1_label}
        button2Link={home.header?.button2_link}
        button2Label={home.header?.button2_label}
        image={home.header?.image?.url}
        arrow={home.header?.arrow}
      />
      <ProjectsSection
        subtitle={home.solutions?.subtitle}
        title={home.solutions?.title}
        icon1={home.solutions?.icon1}
        icon2={home.solutions?.icon2}
        icon3={home.solutions?.icon3}
        name1={home.solutions?.name1}
        name2={home.solutions?.name2}
        name3={home.solutions?.name3}
        image1={home.solutions?.image1?.url}
        image2={home.solutions?.image2?.url}
        image3={home.solutions?.image3?.url}
        text1={home.solutions?.text1}
        text2={home.solutions?.text2}
        text3={home.solutions?.text3}
      />
      <Information
        subtitle="Passionate people"
        title="About us"
        text="We are young professionals who are passionate about AI and other cutting-edge technologies. There is a great opportunity for the education sector to leverage this to improve the quality of education. Our goal is to give users of online educational environments greater insight into their own learning journey and performance through the use of AI-based tools. We want to greatly improve the experience students have during their studies. These kinds of tools, aimed at students, indirectly benefit teachers, often relieving them of tedious tasks."
        buttonLink="/about"
        buttonLabel="more about us"
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
        buttonLink="/contact"
        buttonLabel="get in touch"
      />
    </div>
  );
};

export default Home;
