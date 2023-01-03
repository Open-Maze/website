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

// Assets
import InstantFeedback from '../assets/images/products/document-screener/instant-feedback.svg';
import ContextAware from '../assets/images/products/document-screener/context-aware.svg';
import Summarization from '../assets/images/products/document-screener/summarization.svg';

const DocumentScreener = () => {
  const [documentScreener, setDocumentScreener] = useState({});

  useEffect(() => {
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
        image={documentScreener.header?.image?.url}
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
            className="col-span-6"
          />
        ))}
      </Goals>
      <Features>
        <Feature
          featureNr="Feature 1"
          title="Instant feedback"
          description="The Document Screener allows students to have their documents reviewed immediately and multiple times. The purpose of the screener is to eliminate the repetitive first round of feedback."
          image={InstantFeedback}
          illustration
        />
        <Feature
          featureNr="Feature 2"
          title="Context aware"
          description="Cutting-edge machine learning models are used by the Document Screener, allowing it to understand text like humans. This allows our tool to provide more document-specific feedback on, for example, introductions, research questions, conclusions, writing quality and more."
          image={ContextAware}
          illustration
        />
        <Feature
          featureNr="Feature 3"
          title="Summarization"
          description="The Document Screen can summarize (parts of) the document, picking out what it thinks to be the most important parts. This can be used by the student to verify if all their talking points are coming across."
          image={Summarization}
          illustration
        />
      </Features>
      <Information
        subtitle={documentScreener.information?.subtitle}
        title={documentScreener.information?.title}
        text={documentScreener.information?.text}
        buttonLink={documentScreener.information?.button_link}
        buttonLabel={documentScreener.information?.button_text}
        image={documentScreener.information?.image?.url}
        illustration={documentScreener.information?.illustration}
      />
      <CTA
        title={documentScreener.cta?.title}
        subtitle={documentScreener.cta?.subtitle}
        image={documentScreener.cta?.image?.url}
        buttonLink={documentScreener.cta?.button_link}
        buttonLabel={documentScreener.cta?.button_text}
      />
    </div>
  );
};

export default DocumentScreener;
