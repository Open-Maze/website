import React, { useEffect, useState } from 'react';
import './shared.css';

// External
import axios from 'axios';

// Blocks
import Header from '../blocks/Header/Header';

const NotFound = () => {
  const [notFound, setNotFound] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/not-found').then((response) => {
      setNotFound(response.data);
    });
  }, []);

  return (
    <div className="page notfound">
      <Header
        size={notFound.header?.header_size}
        title={notFound.header?.header_title}
        text={notFound.header?.header_text}
        buttonLink={notFound.header?.button1_link}
        buttonLabel={notFound.header?.button1_label}
        button2Link={notFound.header?.button2_link}
        button2Label={notFound.header?.button2_label}
        image={notFound.header?.header_image?.url}
        arrow={notFound.header?.header_arrow}
      />
    </div>
  );
};

export default NotFound;
