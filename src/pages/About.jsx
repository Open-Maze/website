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
  const [coreValues, setCoreValues] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    axios.get('https://api.openmaze.io/about').then((response) => {
      setAbout(response.data);
    });
    axios.get('https://api.openmaze.io/core-values').then((response) => {
      const sortedArray = response.data.sort((a, b) => a.order - b.order);
      setCoreValues(sortedArray);
    });
    axios.get('https://api.openmaze.io/team-members').then((response) => {
      const sortedArray = response.data.sort((a, b) => a.order - b.order);
      setTeamMembers(sortedArray);
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
      <CoreValues title={about.core_values?.title} subtitle={about.core_values?.subtitle}>
        {coreValues?.map((value) => (
          <CardIcon
            key={value.id}
            type={value.type}
            iconFront={`fa-solid fa-${value.icon}`}
            iconBack={`fa-solid fa-${value.background_icon}`}
            title={value.title}
            text={value.text}
            className="col-span-4"
          />
        ))}
      </CoreValues>
      <Image src={about.image?.url} alt={about.image?.alternativeText} />
      <Team title="Our team" subtitle="Meet the people behind OpenMaze">
        {teamMembers?.map((member) => (
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
