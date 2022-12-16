import React from 'react';

const Product = ({ children }) => (
  <section className="cms-block">
    <div className="container flex flex-col gap-16" data-aos="fade-up" data-aos-delay="500">
      {children}
    </div>
  </section>
);

export default Product;
