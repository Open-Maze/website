import React from 'react';

const Goals = ({ subtitle, title, children }) => (
  <div className="cms-block">
    <div className="container" data-aos="fade-up" data-aos-delay="500">
      <h4 className="pb-2 text-dark">{subtitle}</h4>
      <h2>{title}</h2>
      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">{children} </div>
    </div>
  </div>
);

export default Goals;
