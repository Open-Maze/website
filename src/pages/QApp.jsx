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
import Conversational from '../assets/images/products/q-app/qapp-1-zoom.png';
import DirectReferences from '../assets/images/products/q-app/qapp-2-zoom.png';
import ContextAware from '../assets/images/products/q-app/qapp-3-zoom.png';
import productImage from '../assets/images/illustrations/product.svg';
import office from '../assets/images/office.jpeg';

const QApp = () => {
  const [qApp, setQApp] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/q-app').then((response) => {
      setQApp(response.data);
    });
  }, []);

  return (
    <div className="page q-app">
      <Header
        size={qApp.header?.size}
        title={qApp.header?.title}
        text={qApp.header?.text}
        buttonLink={qApp.header?.button1_link}
        buttonLabel={qApp.header?.button1_label}
        button2Link={qApp.header?.button2_link}
        button2Label={qApp.header?.button2_label}
        image={qApp.header?.image?.url}
        arrow={qApp.header?.arrow}
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
          imgBackground="#d1a4f7"
        />
        <Feature
          featureNr="Feature 2"
          title="Direct references"
          description="When conversing with a document, you will directly see where the Q-App takes its references from. A highlight will be made in the document, and can even be exported for later use to quickly find the cited references."
          image={DirectReferences}
          imgBackground="#adeaf4"
        />
        <Feature
          featureNr="Feature 3"
          title="Context aware"
          description="The Q-App understands the context of the document and the questions, so no need to only ask surface-level questions."
          image={ContextAware}
          imgBackground="#a3a4e5"
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
        image={office}
        buttonLink="/contact"
        buttonLabel="the fastest route to a collaboration"
      />
    </div>
  );
};

export default QApp;
