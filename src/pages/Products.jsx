import React from 'react';
import './shared.css';

// Components
import Header from '../blocks/Header/Header';
import CoreValues from '../blocks/CoreValues/CoreValues';
import CardImageHorizontal from '../components/CardImageHorizontal/CardImageHorizontal';
import CTA from '../blocks/CTA/CTA';

// Assets
import headerImage from '../assets/images/illustrations/header.svg';
import Placeholder from '../assets/images/iphone-placeholder.png';
import office from '../assets/images/office.jpeg';

const Products = () => (
  <div className="page products">
    <Header
      size="small"
      title="Discover our products"
      text="We aim to provide students using online educational environments with greater insight into their own learning journey and performance through the use of AI powered tools."
      image={headerImage}
    />
    <CoreValues title="Core values" subtitle="Our beliefs" />
    <CardImageHorizontal
      imageLeft
      title="Document Screener"
      description="We noticed that students often receive an initial round of feedback, which is usually about the structure of the document, grammatical errors, missing components, or the quality of writing. The document screener allows students to have their documents reviewed immediately, before they end up with teachers. Giving them a chance to already improve on their documents."
      image={Placeholder}
      buttonLabel="learn more"
      buttonLink="/document-screener"
    />
    <CardImageHorizontal
      imageRight
      title="Knowledge Profiler"
      description="Every student is unique, as is their learning journey. Over the course of their studies, students will develop domain-specific knowledge that goes beyond the standard curriculum. By extracting all submissions of a student from their online learning environment, the Knowledge Profiler determines and displays these skills in a simple overview."
      image={Placeholder}
      buttonLabel="learn more"
      buttonLink="/knowledge-profiler"
    />
    <CardImageHorizontal
      imageLeft
      title="Q-App"
      description="Traditionally documents are noninteractive, the Q-App changes this by allowing users to interact with a document as if they were talking to a human. Instead of just reading through it, you can now ask questions, and get relevant answers present in the document. It is just as if you were able to talk with the author!"
      image={Placeholder}
      buttonLabel="learn more"
      buttonLink="/q-app"
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

export default Products;
