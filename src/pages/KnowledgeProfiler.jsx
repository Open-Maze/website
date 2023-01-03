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

const KnowledgeProfiler = () => {
  const [knowledgeProfiler, setKnowledgeProfiler] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/knowledge-profiler').then((response) => {
      setKnowledgeProfiler(response.data);
    });
  }, []);

  return (
    <div className="page knowledge-profiler">
      <Header
        size={knowledgeProfiler.header?.size}
        title={knowledgeProfiler.header?.title}
        text={knowledgeProfiler.header?.text}
        buttonLink={knowledgeProfiler.header?.button1_link}
        buttonLabel={knowledgeProfiler.header?.button1_label}
        button2Link={knowledgeProfiler.header?.button2_link}
        button2Label={knowledgeProfiler.header?.button2_label}
        image={knowledgeProfiler.header?.image?.url}
        arrow={knowledgeProfiler.header?.arrow}
      />
      <Goals title={knowledgeProfiler.title} subtitle={knowledgeProfiler.subtitle}>
        {knowledgeProfiler.goals?.map((goal) => (
          <CardIcon
            key={goal.id}
            type={goal.type}
            iconFront={`fa-solid fa-${goal.icon}`}
            iconBack={`fa-solid fa-${goal.icon_background}`}
            title={goal.title}
            text={goal.text}
            className="col-span-6"
          />
        ))}
      </Goals>
      <Features>
        {knowledgeProfiler.features?.map((feature) => (
          <Feature
            key={feature.id}
            featureNr={feature.subtitle}
            title={feature.title}
            description={feature.text}
            image={feature.image?.url}
            imgBackground={feature.color_background}
            illustration={feature.illustration}
          />
        ))}
      </Features>
      <Information
        subtitle={knowledgeProfiler.information?.subtitle}
        title={knowledgeProfiler.information?.title}
        text={knowledgeProfiler.information?.text}
        buttonLink={knowledgeProfiler.information?.button_link}
        buttonLabel={knowledgeProfiler.information?.button_text}
        image={knowledgeProfiler.information?.image?.url}
        illustration={knowledgeProfiler.information?.illustration}
      />
      <CTA
        title={knowledgeProfiler.cta?.title}
        subtitle={knowledgeProfiler.cta?.subtitle}
        image={knowledgeProfiler.cta?.image?.url}
        buttonLink={knowledgeProfiler.cta?.button_link}
        buttonLabel={knowledgeProfiler.cta?.button_text}
      />
    </div>
  );
};

export default KnowledgeProfiler;
