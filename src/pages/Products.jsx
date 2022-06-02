import React from 'react';
import './shared.scss';

import HeaderS from '../components/HeaderS/HeaderS';
import headerSvg from '../assets/images/illustrations/header.svg';

const Products = () => (
  <div className="page products">
    <HeaderS
      title="Check our products"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac commodo erat, quis venenatis turpis. Vivamus interdum interdum."
      buttonLabel="Schedule demo"
      buttonLink="/contact"
      svg={headerSvg}
    />
    <h1>Products</h1>
  </div>
);

export default Products;
