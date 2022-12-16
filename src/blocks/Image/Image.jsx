import React from 'react';

const Image = ({ src, alt }) => (
  <div className="cms-block">
    <div className="container" data-aos="fade-up" data-aos-delay="500">
      <img src={src} alt={alt} className="max-h-[70vh] w-full rounded-xl" />
    </div>
  </div>
);

export default Image;
