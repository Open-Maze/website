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

const QApp = () => (
  <div className="page q-app">
    <Header
      size="small"
      title="Q-App"
      text="Traditionally documents are noninteractive, the Q-App changes this by allowing users to interact with a document as if they were talking to a human. Instead of just reading through it, you can now ask questions, and get relevant answers present in the document. It is just as if you were able to talk with the author!"
      image={headerImage}
    />
    <Goals title="What we want to achieve" subtitle="Goals" />
    <Feature
      featureNr="Feature 1"
      title="Conversational"
      description="A new way of interacting with documents, by enabling users to have a conversational experience. Our tool lets you talk and ask questions to your documents instead of having to fully read through a document."
      image={Placeholder}
    />
    <Feature
      featureNr="Feature 2"
      title="Direct references"
      description="When conversing with a document, you will directly see where the Q-App takes its references from. A highlight will be made in the document, and can even be exported for later use to quickly find the cited references."
      image={Placeholder}
    />
    <Feature
      featureNr="Feature 3"
      title="Context aware"
      description="The Q-App understands the context of the document and the questions, so no need to only ask surface-level questions."
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

export default QApp;
