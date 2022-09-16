import React from 'react';

const ContactCardS = ({ link, icon, title, content, delay }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <div data-aos="fade-up" data-aos-delay={delay}>
      <div className="radius flex min-w-full items-center justify-start rounded-3xl bg-bleach p-6 transition">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-violet-lighter ${icon}`} />
        <div className="middle">
          <p>{title}</p>
        </div>
        <div className="right">
          <p>{content}</p>
        </div>
      </div>
    </div>
  </a>
);

export default ContactCardS;
