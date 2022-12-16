import React from 'react';

const TeamMember = ({ image, name, text, delay }) => (
  <div data-aos="fade-up" data-aos-delay={delay}>
    <img src={image} alt={name} className="rounded-xl" />
    <h3 className="mt-4">{name}</h3>
    <p className="mt-2">{text}</p>
  </div>
);

export default TeamMember;
