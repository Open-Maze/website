import React, { useEffect, useState } from 'react';

// External
import axios from 'axios';

const Feature = ({ featureNr, title, description, image, imgBackground, illustration }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/info').then((response) => {
      setInfo(response.data);
    });
  }, []);

  return (
    <div className="grid grid-flow-dense grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
      <div className="col-span-6 flex flex-col justify-center border-l-2 border-violet p-8 sm:p-12 lg:col-start-1">
        {featureNr && <h4 className="pb-2 text-dark">{featureNr}</h4>}
        {title && <h2 className="pb-6">{title}</h2>}
        {description && <p className="text-slate-700">{description}</p>}
      </div>
      {image && (
        <div className="col-span-6 rounded-xl lg:col-end-13" style={{ backgroundColor: imgBackground }}>
          <img
            src={info.api_base + image}
            alt={title}
            className={`h-full w-full ${
              illustration === false && 'rounded-xl border-8 border-solid border-light-gray shadow-lg'
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default Feature;
