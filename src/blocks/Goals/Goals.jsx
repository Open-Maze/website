import React from 'react';

const Goals = ({ subtitle, title, children }) => (
  <section className="cms-block">
    <div className="container" data-aos="fade-up" data-aos-delay="500">
      {subtitle && <h4 className="pb-2 text-dark">{subtitle}</h4>}
      {title && <h2>{title}</h2>}
      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">{children}</div>
    </div>
  </section>
);

export default Goals;
