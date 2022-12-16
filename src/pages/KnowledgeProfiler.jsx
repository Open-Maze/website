import React from 'react';
import './shared.css';

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
import headerImage from '../assets/images/illustrations/knowledgeprofiler.svg';
import UniqueProfile from '../assets/images/products/knowledge-profiler/kp-1-zoom.png';
import Verifiable from '../assets/images/products/knowledge-profiler/kp-2-zoom.png';
import StudentsBecomeExperts from '../assets/images/products/knowledge-profiler/kp-3-zoom.png';
import productImage from '../assets/images/illustrations/product.svg';
import office from '../assets/images/office.jpeg';

const KnowledgeProfiler = () => (
  <div className="page knowledge-profiler">
    <Header
      size="small"
      title="Knowledge Profiler"
      text="Every student is unique, as is their learning journey. Over the course of their studies, students will develop domain-specific knowledge that goes beyond the standard curriculum. By extracting all submissions of a student from their online learning environment, the Knowledge Profiler determines and displays these skills in a simple overview."
      image={headerImage}
      arrow
    />
    <Goals title="What we want to achieve" subtitle="Goals">
      <CardIcon
        type="horizontal"
        iconFront="fa-solid fa-user"
        iconBack="fa-solid fa-circle"
        title="Individual Profile"
        text="Allow students to show off their unique skills."
        delay={500}
        className="col-span-6"
      />
      <CardIcon
        type="horizontal"
        iconFront="fa-solid fa-link"
        iconBack="fa-solid fa-circle"
        title="Connect People"
        text="The Knowledge Profile can be used to connect Students with other students, teachers, experts or businesses."
        delay={600}
        className="col-span-6"
      />
    </Goals>
    <Features>
      <Feature
        featureNr="Feature 1"
        title="Unique profile"
        description="Every student has a unique learning journey throughout which they learn their subjects of interest. The Knowledge Profiler aims to visualize the skills mastered throughout a learning journey."
        image={UniqueProfile}
      />
      <Feature
        featureNr="Feature 2"
        title="Verifiable"
        description="The results from the Knowledge Profiler can easily be evaluated and used as a verifiable portfolio, because it uses a student's graded and submitted assignments."
        image={Verifiable}
      />
      <Feature
        featureNr="Feature 3"
        title="Students become experts"
        description="Students and teachers can use their submissions to generate a skill profile using the Knowledge Profiler. The profile determines expertise in a subject, and can be used to locate others with the desired expertise."
        image={StudentsBecomeExperts}
      />
    </Features>
    <Information
      title="Interested?"
      text="Are you interested in taking a closer look at one of our tools, or curious what OpenMaze can offer your institute? Get in touch by scheduling a demo."
      buttonLink="/products"
      buttonLabel="discover more products"
      image={productImage}
      illustration
    />
    <CTA
      title="Contact us"
      subtitle="Want to talk?"
      email="hello@openmaze.io"
      linkedin="open-maze"
      image={office}
      buttonLink="/contact"
      buttonLabel="the fastest route to a collaboration"
    />
  </div>
);

export default KnowledgeProfiler;
