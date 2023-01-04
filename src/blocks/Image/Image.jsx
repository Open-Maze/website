import React from 'react';

const Image = ({ src, alt }) => (
  <section className="cms-block">
    <div className="container" data-aos="fade-up" data-aos-delay="500">
      <img
        src={src}
        alt={alt}
        className="max-h-[70vh] w-full rounded-xl border-8 border-solid border-light-gray shadow-lg"
      />
    </div>
  </section>
);

export default Image;
