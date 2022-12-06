import React from 'react';
import './shared.css';

// Blocks
import Header from '../blocks/Header/Header';
import Goals from '../blocks/Goals/Goals';
import Feature from '../blocks/Feature/Feature';
import Information from '../blocks/Information/Information';
import CTA from '../blocks/CTA/CTA';

// Components
import CardIcon from '../components/CardIcon/CardIcon';

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
      buttonLabel="The fastest route to a collaboration"
    />
  </div>
);

export default DocumentScreener;
