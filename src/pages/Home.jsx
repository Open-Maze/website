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

const Home = () => {
  const [home, setHome] = useState({});
  const [coreValues, setCoreValues] = useState([]);

  useEffect(() => {
    axios.get('https://api.openmaze.io/home').then((response) => {
      setHome(response.data);
    });
    axios.get('https://api.openmaze.io/core-values').then((response) => {
      const sortedArray = response.data.sort((a, b) => a.order - b.order);
      setCoreValues(sortedArray);
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
        subtitle={home.information_home?.subtitle}
        title={home.information_home?.title}
        text={home.information_home?.text}
        buttonLink={home.information_home?.button_link}
        buttonLabel={home.information_home?.button_text}
        image={home.information_home?.image?.url}
        illustration={home.information_home?.illustration}
      />
      <CoreValues title={home.core_values?.title} subtitle={home.core_values?.subtitle}>
        {coreValues?.map((value) => (
          <CardIcon
            key={value.id}
            type={value.type}
            iconFront={`fa-solid fa-${value.icon}`}
            iconBack={`fa-solid fa-${value.background_icon}`}
            title={value.title}
            text={value.text}
            className={value.column_width === 'half' ? 'col-span-6' : 'col-span-4'}
          />
        ))}
      </CoreValues>
      <ContactSection
        title={home.contact_section?.title}
        subtitle={home.contact_section?.subtitle}
        text={home.contact_section?.text}
        buttonLink={home.contact_section?.button_link}
        buttonLabel={home.contact_section?.button_text}
      />
    </div>
  );
};

export default Home;
