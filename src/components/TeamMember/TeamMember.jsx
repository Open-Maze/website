import React, { useEffect, useState } from 'react';

// External
import axios from 'axios';

const TeamMember = ({ image, name, text, delay }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/info').then((response) => {
      setInfo(response.data);
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <img
        src={info.api_base + image}
        alt={name}
        className="rounded-xl border-8 border-solid border-light-gray shadow-lg"
      />
      <h3 className="mt-4">{name}</h3>
      <p className="mt-2">{text}</p>
    </div>
  );
};

export default TeamMember;
