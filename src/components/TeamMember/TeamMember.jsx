import React from 'react';

const TeamMember = ({ image, name, role }) => (
  <div data-aos="fade-up">
    <img src={image} alt={name} className="rounded-md" />
    <h3 className="mt-4">{name}</h3>
    <p className="mt-2">{role}</p>
  </div>
);

export default TeamMember;
