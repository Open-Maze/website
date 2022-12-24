import React, { useEffect, useState } from 'react';
import './shared.css';

// External
import axios from 'axios';

// Blocks
import Header from '../blocks/Header/Header';
import CoreValues from '../blocks/CoreValues/CoreValues';
import Image from '../blocks/Image/Image';
import Team from '../blocks/Team/Team';
import CTA from '../blocks/CTA/CTA';

// Components
import CardIcon from '../components/CardIcon/CardIcon';
import TeamMember from '../components/TeamMember/TeamMember';

// Assets
import TeamImage from '../assets/images/team/team.jpg';
import Seline from '../assets/images/team/seline.jpg';
import Jordy from '../assets/images/team/jordy.jpg';
import Stijn from '../assets/images/team/stijn.jpg';
import Niek from '../assets/images/team/niek.jpg';
import Max from '../assets/images/team/max.jpg';
import Ruben from '../assets/images/team/ruben.jpg';
import office from '../assets/images/office.jpeg';

const About = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/about').then((response) => {
      setAbout(response.data);
    });
  }, []);

  return (
    <div className="page about">
      <Header
        size={about.header?.size}
        title={about.header?.title}
        text={about.header?.text}
        buttonLink={about.header?.button1_link}
        buttonLabel={about.header?.button1_label}
        button2Link={about.header?.button2_link}
        button2Label={about.header?.button2_label}
        image={about.header?.image?.url}
        arrow={about.header?.arrow}
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
      <Image src={TeamImage} alt="Meet the OpenMAze team" />
      <Team title="Our team" subtitle="Meet the people behind OpenMaze">
        <TeamMember name="Niek van Dam" text="Co-founder" image={Niek} delay={500} />
        <TeamMember name="Max van Hattum" text="Co-founder" image={Max} delay={600} />
        <TeamMember name="Ruben Fricke" text="Co-founder" image={Ruben} delay={700} />
        <TeamMember name="Seline Warners" text="Digital Designer" image={Seline} delay={800} />
        <TeamMember name="Jordy Arntz" text="Digital Designer" image={Jordy} delay={900} />
        <TeamMember name="Stijn Verhagen" text="Digital Designer" image={Stijn} delay={1000} />
      </Team>
      <CTA
        title="Contact us"
        subtitle="Want to talk?"
        image={office}
        buttonLink="/contact"
        buttonLabel="the fastest route to a collaboration"
      />
    </div>
  );
};

export default About;
