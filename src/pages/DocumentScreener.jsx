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

const DocumentScreener = () => {
  const [info, setInfo] = useState({});
  const [documentScreener, setDocumentScreener] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/info').then((response) => {
      setInfo(response.data);
    });
    axios.get('https://api.openmaze.io/document-screener').then((response) => {
      setDocumentScreener(response.data);
    });
  }, []);

  return (
    <div className="page document-screener">
      <Header
        size={documentScreener.header?.size}
        title={documentScreener.header?.title}
        text={documentScreener.header?.text}
        buttonLink={documentScreener.header?.button1_link}
        buttonLabel={documentScreener.header?.button1_label}
        button2Link={documentScreener.header?.button2_link}
        button2Label={documentScreener.header?.button2_label}
        image={info.api_base + documentScreener.header?.image?.url}
        arrow={documentScreener.header?.arrow}
      />
      <Goals title={documentScreener.title} subtitle={documentScreener.subtitle}>
        {documentScreener.goals?.map((goal) => (
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
        {documentScreener.features?.map((feature) => (
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
        subtitle={documentScreener.information?.subtitle}
        title={documentScreener.information?.title}
        text={documentScreener.information?.text}
        buttonLink={documentScreener.information?.button_link}
        buttonLabel={documentScreener.information?.button_text}
        image={info.api_base + documentScreener.information?.image?.url}
        illustration={documentScreener.information?.illustration}
      />
      <CTA
        title={documentScreener.cta?.title}
        subtitle={documentScreener.cta?.subtitle}
        image={info.api_base + documentScreener.cta?.image?.url}
        buttonLink={documentScreener.cta?.button_link}
        buttonLabel={documentScreener.cta?.button_text}
        email={info.email}
        linkedin={info.linkedin}
      />
    </div>
  );
};

export default DocumentScreener;
