import React from 'react';

// Components
import TeamMember from '../../components/TeamMember/TeamMember';

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
      <div className="container" data-aos="fade-up" data-aos-delay="500">
        <div className="team">
          <h4 className="pb-2 text-dark">{subtitle}</h4>
          <h2>{title}</h2>
          <div className="mt-20 grid grid-cols-2 gap-10 lg:grid-cols-3">
            <div>
              <TeamMember name="Seline" text="Design & Development" image={Seline} delay={500} />
            </div>
            <div>
              <TeamMember name="Jordy" text="Design & Development" image={Jordy} delay={600} />
            </div>
            <div>
              <TeamMember name="Niek" text="CEO" image={Niek} delay={700} />
            </div>
            <div>
              <TeamMember name="Ruben" text="CEO" image={Ruben} delay={800} />
            </div>
            <div>
              <TeamMember name="Max" text="CEO" image={Max} delay={900} />
            </div>
            <div>
              <TeamMember name="Stijn" text=" Design en Development" image={Stijn} delay={1000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
