import React from 'react';
import './shared.css';

// Blocks
import Header from '../blocks/Header/Header';

// Assets
import headerImage from '../assets/images/illustrations/header.svg';

const NotFound = () => (
  <div className="page notfound">
    <Header
      size="large"
      title="404 &mdash; Not found"
      text="The page you were looking for could not be found."
      buttonLink="/"
      buttonLabel="go home"
      image={headerImage}
    />
  </div>
);

export default NotFound;
