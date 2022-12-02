import React from 'react';
import './shared.css';

// Components
import Header from '../blocks/Header/Header';
import Goals from '../blocks/Goals/Goals';
import Feature from '../blocks/Feature/Feature';
import Information from '../blocks/Information/Information';
import CTA from '../blocks/CTA/CTA';

// Assets
import headerImage from '../assets/images/illustrations/header.svg';
import Placeholder from '../assets/images/iphone-placeholder.png';
import productImage from '../assets/images/illustrations/product.svg';
import office from '../assets/images/office.jpeg';

const DocumentScreener = () => (
  <div className="page document-screener">
    <Header
      size="small"
      title="Document Screener"
      text="We noticed that students often receive an initial round of feedback, which is usually about the structure of the document, grammatical errors, missing components, or the quality of writing. The document screener allows students to have their documents reviewed immediately, before they end up with teachers. Giving them a chance to already improve on their documents."
      image={headerImage}
    />
    <Goals title="What we want to achieve" subtitle="Goals" />
    <Feature
      featureNr="Feature 1"
      title="Instant feedback"
      description="The Document Screener allows students to have their documents reviewed immediately and multiple times. The purpose of the screener is to eliminate the repetitive first round of feedback."
      image={Placeholder}
    />
    <Feature
      featureNr="Feature 2"
      title="Context aware"
      description="Cutting-edge machine learning models are used by the Document Screener, allowing it to understand text like humans. This allows our tool to provide more document-specific feedback on, for example, introductions, research questions, conclusions, writing quality and more."
      image={Placeholder}
    />
    <Feature
      featureNr="Feature 3"
      title="Summarization"
      description="The Document Screen can summarize (parts of) the document, picking out what it thinks to be the most important parts. This can be used by the student to verify if all their talking points are coming across."
      image={Placeholder}
    />
    <Information
      subtitle="Support human interaction"
      title="Encouraging Dialogue"
      text="We find that the most important thing in learning is the meaningful interactions between student and teacher. The Document Screener already picks out the more common mistakes, so that there is room for dialogue between students and teachers about what matters: the actual context of the document."
      buttonLink="/products"
      buttonLabel="discover more products"
      image={productImage}
    />
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

export default DocumentScreener;
