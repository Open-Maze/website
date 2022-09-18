import React from 'react';
import './ContactCardS.css';

const ContactCardS = ({ link, icon, title, content, delay }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <div data-aos="fade-up" data-aos-delay={delay}>
      <div className="contact-card-s-container bg-bleach hover:bg-violet-darker flex min-w-full items-center justify-start rounded-3xl p-6 transition hover:cursor-pointer hover:text-white">
        <div
          className={`contact-card-s-container-left bg-violet-lighter bg-40 flex h-12 w-12 items-center justify-center rounded-full bg-center bg-no-repeat ${icon}`}
        />
        <div className="hidden px-6 md:block">
          <p>{title}</p>
        </div>
        <div className="contact-card-s-container-right text-midnight ml-auto py-4 text-right">
          <p>{content}</p>
        </div>
      </div>
    </div>
  </a>
);

export default ContactCardS;
