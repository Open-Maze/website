import React, { useEffect, useState } from 'react';
import './shared.css';

// External
import axios from 'axios';

// Blocks
import Header from '../blocks/Header/Header';
import Product from '../blocks/Product/Product';
import CoreValues from '../blocks/CoreValues/CoreValues';
import CTA from '../blocks/CTA/CTA';

// Components
import CardImage from '../components/CardImage/CardImage';
import CardIcon from '../components/CardIcon/CardIcon';

// Assets
import Qapp from '../assets/images/products/q-app/qapp-1-full.png';
import KP from '../assets/images/products/knowledge-profiler/kp-1-full.png';
import DS from '../assets/images/products/q-app/qapp-1-zoom.png';
import office from '../assets/images/office.jpeg';

const Products = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="page products">
      <Header
        size={products.header?.size}
        title={products.header?.title}
        text={products.header?.text}
        buttonLink={products.header?.button1_link}
        buttonLabel={products.header?.button1_label}
        button2Link={products.header?.button2_link}
        button2Label={products.header?.button2_label}
        image={products.header?.image?.url}
        arrow={products.header?.arrow}
      />
      <Product>
        <CardImage
          imageLeft
          title="Q-App"
          description="Traditionally documents are noninteractive, the Q-App changes this by allowing users to interact with a document as if they were talking to a human. Instead of just reading through it, you can now ask questions, and get relevant answers present in the document. It is just as if you were able to talk with the author!"
          image={Qapp}
          imgBackground="#d1a4f7"
          buttonLink="/q-app"
          buttonLabel="learn more"
        />
        <CardImage
          imageRight
          title="Knowledge Profiler"
          description="Every student is unique, as is their learning journey. Over the course of their studies, students will develop domain-specific knowledge that goes beyond the standard curriculum. By extracting all submissions of a student from their online learning environment, the Knowledge Profiler determines and displays these skills in a simple overview."
          image={KP}
          imgBackground="#adeaf4"
          buttonLink="/knowledge-profiler"
          buttonLabel="learn more"
        />
        <CardImage
          imageLeft
          title="Document Screener"
          description="We noticed that students often receive an initial round of feedback, which is usually about the structure of the document, grammatical errors, missing components, or the quality of writing. The document screener allows students to have their documents reviewed immediately, before they end up with teachers. Giving them a chance to already improve on their documents."
          image={DS}
          imgBackground="#a3a4e5"
          buttonLink="/document-screener"
          buttonLabel="learn more"
        />
      </Product>
      <CoreValues title="Core values" subtitle="Our beliefs">
        <CardIcon
          type="vertical"
          iconFront="fa-solid fa-rocket"
          iconBack="fa-solid fa-circle"
          title="Innovation"
          text="What makes us unique is that we use cutting-edge technologies, broadening the variety of tools available. We unite context and technology."
          delay={500}
          className="col-span-4"
        />
        <CardIcon
          type="vertical"
          iconFront="fa-solid fa-shield-alt"
          iconBack="fa-solid fa-circle"
          title="Privacy"
          text="We are of the opinion that data ownership should always remain with the user. We not only comply with regulations, but go the extra mile to ensure that you are in control of your data."
          delay={600}
          className="col-span-4"
        />
        <CardIcon
          type="vertical"
          iconFront="fa-solid fa-heart"
          iconBack="fa-solid fa-circle"
          title="Integrity"
          text="AI can be scary. We think that technology should always be transparent and explainable. Our technology should above all be trusted by its users."
          delay={700}
          className="col-span-4"
        />
      </CoreValues>
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
};

export default Products;
