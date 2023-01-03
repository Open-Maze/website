import React, { useEffect, useState } from 'react';

// External
import axios from 'axios';

const Image = ({ src, alt }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/info').then((response) => {
      setInfo(response.data);
    });
  }, []);

  return (
    <section className="cms-block">
      <div className="container" data-aos="fade-up" data-aos-delay="500">
        <img
          src={info.api_base + src}
          alt={alt}
          className="max-h-[70vh] w-full rounded-xl border-8 border-solid border-light-gray shadow-lg"
        />
      </div>
    </section>
  );
};

export default Image;
