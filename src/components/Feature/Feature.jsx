import React from 'react';

const Feature = ({ featureNr, title, description, image, illustration }) => (
  <div className="grid grid-flow-dense grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
    <div className="col-span-6 flex flex-col justify-center border-l-2 border-violet p-8 sm:p-12 lg:col-start-1">
      {featureNr && <h4 className="pb-2 text-dark">{featureNr}</h4>}
      {title && <h2 className="pb-6">{title}</h2>}
      {description && <p className="text-slate-700">{description}</p>}
    </div>
    {image && (
      <div className="col-span-6 lg:col-end-13">
        <img
          src={image}
          alt={title}
          className={`w-full ${!illustration && 'rounded-xl border-8 border-solid border-light-gray shadow-lg'}`}
        />
      </div>
    )}
  </div>
);

export default Feature;
