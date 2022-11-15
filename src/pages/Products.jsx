import React from 'react';
import './shared.css';

// Components
import Header from '../components/Header/Header';
import FeatureComponent from '../components/FeatureComponent/FeatureComponent';
import CardImageHorizontal from '../components/CardImageHorizontal/CardImageHorizontal';

// Assets
import headerImage from '../assets/images/illustrations/header.svg';
import Placeholder from '../assets/images/iphone-placeholder.png';

const Products = () => (
  <div className="page products">
    <Header
      size="small"
      title="Our products"
      text="We aim to provide users of online educational environments with greater insight into their own learning journey and performance through the use of AI-based tools."
      image={headerImage}
    />
    <FeatureComponent
      featureNr="Feature 1"
      title="Instant feedback"
      description="The Document Feedback Tool allows students to have their documents fully reviewed immediately, before they are graded by teachers. The purpose of the feedback tool is to eliminate that first round of feedback and allow the teacher and student to engage in meaningful dialogue."
      image={Placeholder}
    />
    <CardImageHorizontal
      imageLeft
      title="Instant feedback"
      description="The Document Feedback Tool allows students to have their documents fully reviewed immediately, before they are graded by teachers. The purpose of the feedback tool is to eliminate that first round of feedback and allow the teacher and student to engage in meaningful dialogue."
      image={Placeholder}
      buttonLabel="contact us"
      buttonLink="contact"
    />
  </div>
);

export default Products;
