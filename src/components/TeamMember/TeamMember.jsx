import React from 'react';
//Assets

const TeamMember = ({ image, name, role }) => (
  <div>
    <img src={image} />
    <h3 className="mt-4 ">{name}</h3>
    <p>{role}</p>
  </div>
);

export default TeamMember;
