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
import office from '../assets/images/office.jpeg';

const About = () => {
  const [about, setAbout] = useState({});
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get('https://api.openmaze.io/about').then((response) => {
      setAbout(response.data);
    });
    axios.get('https://api.openmaze.io/team-members').then((response) => {
      const sortedArray = response.data.sort((a, b) => a.order - b.order);
      setTeam(sortedArray);
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
      <Image src={about.image?.url} alt={about.image?.alternativeText} />
      <Team title="Our team" subtitle="Meet the people behind OpenMaze">
        {team?.map((member) => (
          <TeamMember key={member.id} name={member.name} text={member.function} image={member.image?.url} />
        ))}
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
