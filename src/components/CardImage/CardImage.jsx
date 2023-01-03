import React from 'react';

// Components
import Button from '../Button/Button';

const CardImage = ({ imagePosition, title, description, image, imgBackground, buttonLabel, buttonLink }) => (
  <div>
    {imagePosition === 'left' ? (
      <div className="grid grid-flow-dense grid-cols-1 items-center gap-10 rounded-xl border-8 border-solid border-light-gray bg-white shadow-lg lg:grid-cols-12">
        <div
          className="col-span-1 h-full w-full rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none lg:col-span-5 lg:col-start-1 lg:rounded-tl-md lg:rounded-tr-none lg:rounded-bl-md lg:rounded-br-none"
          style={{ backgroundColor: imgBackground }}
        >
          <img src={`https://api.openmaze.io/${image}`} alt={title} className="h-full w-full" />
        </div>
        <div className="col-span-1 p-8 lg:col-span-7 lg:col-end-13">
          <h2 className="pb-6">{title}</h2>
          <p className="pb-10 text-slate-700">{description}</p>
          {buttonLink && (
            <Button pageUrl={buttonLink} className="button button--skyline">
              {buttonLabel}
            </Button>
          )}
        </div>
      </div>
    ) : (
      <div className="grid grid-flow-dense grid-cols-1 items-center gap-10 rounded-xl border-8 border-solid border-light-gray bg-white shadow-lg lg:grid-cols-12">
        <div className="order-2 col-span-1 p-10 sm:p-8 lg:order-1 lg:col-span-7 lg:col-start-1">
          <h2 className="pb-6">{title}</h2>
          <p className="pb-10 text-slate-700">{description}</p>
          {buttonLink && (
            <Button pageUrl={buttonLink} className="button button--skyline">
              {buttonLabel}
            </Button>
          )}
        </div>
        <div
          className="col-span-1 h-full w-full rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none lg:col-span-5 lg:col-start-8 lg:rounded-tl-none lg:rounded-tr-md lg:rounded-bl-none lg:rounded-br-md"
          style={{ backgroundColor: imgBackground }}
        >
          <img src={`https://api.openmaze.io/${image}`} alt={title} className="h-full w-full" />
        </div>
      </div>
    )}
  </div>
);

export default CardImage;
