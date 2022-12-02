import React from 'react';
import './shared.css';

// Blocks
import Header from '../blocks/Header/Header';
import CoreValues from '../blocks/CoreValues/CoreValues';
import Team from '../blocks/Team/Team';
import CTA from '../blocks/CTA/CTA';

// Components
import CardIcon from '../components/CardIcon/CardIcon';
import TeamMember from '../components/TeamMember/TeamMember';

// Assets
import headerImage from '../assets/images/illustrations/header.svg';
import Seline from '../assets/images/team/seline.jpg';
import Jordy from '../assets/images/team/jordy.jpg';
import Stijn from '../assets/images/team/stijn.jpg';
import Niek from '../assets/images/team/niek.jpg';
import Max from '../assets/images/team/max.jpg';
import Ruben from '../assets/images/team/ruben.jpg';
import office from '../assets/images/office.jpeg';

const About = () => (
  <div className="page about">
    <Header
      size="small"
      title="About us"
      text="We aim to provide students using online educational environments with greater insight into their own learning journey and performance through the use of AI powered tools."
      buttonLink="/products"
      buttonLabel="our products"
      image={headerImage}
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
    <Team title="Our team" subtitle="Meet the people behind OpenMaze">
      <TeamMember name="Niek" text="CEO" image={Niek} delay={500} />
      <TeamMember name="Max" text="CEO" image={Max} delay={600} />
      <TeamMember name="Ruben" text="CEO" image={Ruben} delay={700} />
      <TeamMember name="Seline" text="Design & Development" image={Seline} delay={800} />
      <TeamMember name="Jordy" text="Design & Development" image={Jordy} delay={900} />
      <TeamMember name="Stijn" text=" Design & Development" image={Stijn} delay={1000} />
    </Team>
    <CTA
      title="Contact us"
      subtitle="Want to talk?"
      phone="0401234567"
      phoneLabel="+31 (0)40 1234567"
      email="hello@openmaze.io"
      image={office}
      buttonLink="/contact"
      buttonLabel="De snelste route naar een samenwerking"
    />
  </div>
);

export default About;
