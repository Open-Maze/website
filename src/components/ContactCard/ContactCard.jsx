import React from 'react';
import './ContactCard.css';

const ContactCard = ({ link, icon, title, content }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <div className="contact-card-s-container flex min-w-full items-center justify-start rounded-3xl bg-bleach p-6 transition hover:cursor-pointer hover:bg-violet-darker hover:text-white">
      <div
        className={`contact-card-s-container-left flex h-12 w-12 items-center justify-center rounded-full bg-violet-lighter bg-40 bg-center bg-no-repeat ${icon}`}
      />
      <div className="hidden px-6 md:block">
        <p>{title}</p>
      </div>
      <div className="contact-card-s-container-right ml-auto py-4 text-right text-midnight">
        <p>{content}</p>
      </div>
    </div>
  </a>
);

export default ContactCard;
