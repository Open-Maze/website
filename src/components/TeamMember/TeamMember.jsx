import React from 'react';

const TeamMember = ({ image, name, text }) => (
  <div data-aos="fade-up">
    <img src={image} alt={name} className="rounded-xl border-8 border-solid border-light-gray shadow-lg" />
    <h3 className="mt-4">{name}</h3>
    <p className="mt-2">{text}</p>
  </div>
);

export default TeamMember;
