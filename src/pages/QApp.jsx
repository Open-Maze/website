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
import headerImage from '../assets/images/illustrations/qapp.svg';
import Conversational from '../assets/images/products/q-app/qapp-1-zoom.png';
import DirectReferences from '../assets/images/products/q-app/qapp-2-zoom.png';
import ContextAware from '../assets/images/products/q-app/qapp-3-zoom.png';
import productImage from '../assets/images/illustrations/product.svg';
import office from '../assets/images/office.jpeg';

const QApp = () => (
  <div className="page q-app">
    <Header
      size="small"
      title="Q-App"
      text="Traditionally documents are noninteractive, the Q-App changes this by allowing users to interact with a document as if they were talking to a human. Instead of just reading through it, you can now ask questions, and get relevant answers present in the document. It is just as if you were able to talk with the author!"
      image={headerImage}
      arrow
    />
    <Goals title="What we want to achieve" subtitle="Goals">
      <CardIcon
        type="horizontal"
        iconFront="fa-solid fa-rocket"
        iconBack="fa-solid fa-circle"
        title="A new way of interaction"
        text="We want to enable students and assessors to experience a new way of interacting with documents."
        delay={500}
        className="col-span-6"
      />
      <CardIcon
        type="horizontal"
        iconFront="fa-solid fa-circle-check"
        iconBack="fa-solid fa-circle"
        title="Verification"
        text="Teachers and students can verify if certain points are present in the document. If the answer is not good enough, it probably is not present or wrongly worded."
        delay={600}
        className="col-span-6"
      />
    </Goals>
    <Features>
      <Feature
        featureNr="Feature 1"
        title="Conversational"
        description="A new way of interacting with documents, by enabling users to have a conversational experience. Our tool lets you talk and ask questions to your documents instead of having to fully read through a document."
        image={Conversational}
      />
      <Feature
        featureNr="Feature 2"
        title="Direct references"
        description="When conversing with a document, you will directly see where the Q-App takes its references from. A highlight will be made in the document, and can even be exported for later use to quickly find the cited references."
        image={DirectReferences}
      />
      <Feature
        featureNr="Feature 3"
        title="Context aware"
        description="The Q-App understands the context of the document and the questions, so no need to only ask surface-level questions."
        image={ContextAware}
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

export default QApp;
