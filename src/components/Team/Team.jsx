import React from 'react';

// Components
import TeamMember from '../TeamMember/TeamMember';

// Assets
import Seline from '../../assets/images/team/seline.jpg';
import Jordy from '../../assets/images/team/jordy.jpg';
import Stijn from '../../assets/images/team/stijn.jpg';
import Niek from '../../assets/images/team/niek.jpg';
import Max from '../../assets/images/team/max.jpg';
import Ruben from '../../assets/images/team/ruben.jpg';

const Team = () => (
  <div>
    <div className="cms-block">
      <div className="container">
        <div className="team">
          <h4 className="pb-2 text-dark" data-aos="fade-up">
            Meet the people behind Open Maze
          </h4>
          <h2 data-aos="fade-up" data-aos-delay="100">
            Our team
          </h2>
          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <TeamMember name="Seline" role="Design & Development" image={Seline} />
            </div>
            <div>
              <TeamMember name="Jordy" role="Design & Development" image={Jordy} />
            </div>
            <div>
              <TeamMember name="Niek" role="CEO" image={Niek} />
            </div>
            <div>
              <TeamMember name="Ruben" role="CEO" image={Ruben} />
            </div>
            <div>
              <TeamMember name="Max" role="CEO" image={Max} />
            </div>
            <div>
              <TeamMember name="Stijn" role=" Design en Development" image={Stijn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
