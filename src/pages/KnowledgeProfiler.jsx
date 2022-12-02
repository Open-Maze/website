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

const KnowledgeProfiler = () => (
  <div className="page knowledge-profiler">
    <Header
      size="small"
      title="Knowledge Profiler"
      text="Every student is unique, as is their learning journey. Over the course of their studies, students will develop domain-specific knowledge that goes beyond the standard curriculum. By extracting all submissions of a student from their online learning environment, the Knowledge Profiler determines and displays these skills in a simple overview."
      image={headerImage}
    />
    <Goals title="What we want to achieve" subtitle="Goals" />
    <Feature
      featureNr="Feature 1"
      title="Unique profile"
      description="Every student has a unique learning journey throughout which they learn their subjects of interest. The Knowledge Profiler aims to visualize the skills mastered throughout a learning journey."
      image={Placeholder}
    />
    <Feature
      featureNr="Feature 2"
      title="Verifiable"
      description="The results from the Knowledge Profiler can easily be evaluated and used as a verifiable portfolio, because it uses a student's graded and submitted assignments."
      image={Placeholder}
    />
    <Feature
      featureNr="Feature 3"
      title="Students become experts"
      description="Students and teachers can use their submissions to generate a skill profile using the Knowledge Profiler. The profile determines expertise in a subject, and can be used to locate others with the desired expertise."
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

export default KnowledgeProfiler;
