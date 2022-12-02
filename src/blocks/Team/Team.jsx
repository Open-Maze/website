import React from 'react';

const Team = ({ subtitle, title, children }) => (
  <div>
    <div className="cms-block">
      <div className="container" data-aos="fade-up" data-aos-delay="500">
        <h4 className="pb-2 text-dark">{subtitle}</h4>
        <h2>{title}</h2>
        <div className="mt-20 grid grid-cols-2 gap-10 lg:grid-cols-3">{children}</div>
      </div>
    </div>
  </div>
);

export default Team;
