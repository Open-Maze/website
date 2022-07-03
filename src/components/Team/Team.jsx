import React from 'react';
import './Team.scss';

import TeamMember from '../TeamMember/TeamMember';

const Team = () => (
  <div>
    <div className="team">
      <h1>Team</h1>
      <div className="team-grid">
        <div>
          <TeamMember />
        </div>
        <div>
          <TeamMember />
        </div>
        <div>
          <TeamMember />
        </div>
        <div>
          <TeamMember />
        </div>
        <div>
          <TeamMember />
        </div>
        <div>
          <TeamMember />
        </div>
      </div>
    </div>
  </div>
);

export default Team;
