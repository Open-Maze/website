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

const Team = ({ subtitle, title }) => (
  <div>
    <div className="cms-block">
      <div className="container">
        <div className="team">
          <h4 className="pb-2 text-dark" data-aos="fade-up">
            {subtitle}
          </h4>
          <h2 data-aos="fade-up" data-aos-delay="100">
            {title}
          </h2>
          <div className="mt-20 grid grid-cols-2 gap-10 lg:grid-cols-3">
            <div>
              <TeamMember name="Seline" text="Design & Development" image={Seline} />
            </div>
            <div>
              <TeamMember name="Jordy" text="Design & Development" image={Jordy} />
            </div>
            <div>
              <TeamMember name="Niek" text="CEO" image={Niek} />
            </div>
            <div>
              <TeamMember name="Ruben" text="CEO" image={Ruben} />
            </div>
            <div>
              <TeamMember name="Max" text="CEO" image={Max} />
            </div>
            <div>
              <TeamMember name="Stijn" text=" Design en Development" image={Stijn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
