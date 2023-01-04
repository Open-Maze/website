import React, { useEffect, useState } from 'react';
import './shared.css';

// External
import axios from 'axios';

// Blocks
import Header from '../blocks/Header/Header';
import Goals from '../blocks/Goals/Goals';
import Features from '../blocks/Features/Features';
import Information from '../blocks/Information/Information';
import CTA from '../blocks/CTA/CTA';

// Components
import CardIcon from '../components/CardIcon/CardIcon';
import Feature from '../components/Feature/Feature';

const QApp = () => {
  const [info, setInfo] = useState({});
  const [qApp, setQApp] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/info').then((response) => {
      setInfo(response.data);
    });
    axios.get('https://api.openmaze.io/q-app').then((response) => {
      setQApp(response.data);
    });
  }, []);

  return (
    <div className="page q-app">
      <Header
        size={qApp.header?.size}
        title={qApp.header?.title}
        text={qApp.header?.text}
        buttonLink={qApp.header?.button1_link}
        buttonLabel={qApp.header?.button1_label}
        button2Link={qApp.header?.button2_link}
        button2Label={qApp.header?.button2_label}
        image={info.api_base + qApp.header?.image?.url}
        arrow={qApp.header?.arrow}
      />
      <Goals title={qApp.title} subtitle={qApp.subtitle}>
        {qApp.goals?.map((goal) => (
          <CardIcon
            key={goal.id}
            type={goal.type}
            iconFront={`fa-solid fa-${goal.icon}`}
            iconBack={`fa-solid fa-${goal.icon_background}`}
            title={goal.title}
            text={goal.text}
            className={goal.column_width === 'half' ? 'col-span-6' : 'col-span-4'}
          />
        ))}
      </Goals>
      <Features>
        {qApp.features?.map((feature) => (
          <Feature
            key={feature.id}
            featureNr={feature.subtitle}
            title={feature.title}
            description={feature.text}
            image={info.api_base + feature.image?.url}
            imgBackground={feature.color_background}
            illustration={feature.illustration}
          />
        ))}
      </Features>
      <Information
        subtitle={qApp.information?.subtitle}
        title={qApp.information?.title}
        text={qApp.information?.text}
        buttonLink={qApp.information?.button_link}
        buttonLabel={qApp.information?.button_text}
        image={info.api_base + qApp.information?.image?.url}
        illustration={qApp.information?.illustration}
      />
      <CTA
        title={qApp.cta?.title}
        subtitle={qApp.cta?.subtitle}
        image={info.api_base + qApp.cta?.image?.url}
        buttonLink={qApp.cta?.button_link}
        buttonLabel={qApp.cta?.button_text}
        email={info.email}
        linkedin={info.linkedin}
      />
    </div>
  );
};

export default QApp;
