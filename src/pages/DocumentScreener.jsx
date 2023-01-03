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
      <Goals title="What we want to achieve" subtitle="Goals">
        <CardIcon
          type="horizontal"
          iconFront="fa-solid fa-comment"
          iconBack="fa-solid fa-circle"
          title="Encourage Dialogue"
          text="Common mistakes will already be brought to attention, so that the teacher and student can focus on meaningful dialogue about the context."
          delay={500}
          className="col-span-6"
        />
        <CardIcon
          type="horizontal"
          iconFront="fa-solid fa-chart-line"
          iconBack="fa-solid fa-square"
          title="Better Insights"
          text="The parts of a student's documents where it could be improved are highlighted, so that the student gets the chance to improve their work."
          delay={600}
          className="col-span-6"
        />
        <CardIcon
          type="horizontal"
          iconFront="fa-solid fa-face-smile-beam"
          iconBack="fa-solid fa-circle"
          title="Student Confidence"
          text="Gives a student more confidence about their work, since it already has been checked for common mistakes."
          delay={700}
          className="col-span-6"
        />
        <CardIcon
          type="horizontal"
          iconFront="fa-solid fa-circle-check"
          iconBack="fa-solid fa-circle"
          title="Higher Quality of Work"
          text="The student gets the chance to improve their work, before it ends up with a teacher. Allowing the teacher to focus on more meaningful feedback."
          delay={800}
          className="col-span-6"
        />
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
