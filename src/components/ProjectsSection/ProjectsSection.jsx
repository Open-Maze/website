import { React, useState } from 'react';

import './ProjectSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IphonePlaceholder from '../../assets/images/iphone-placeholder.png';

const ProjectsSection = () => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <section className="projects_section">
      <div className="left">
        <h2>Solutions for every subject, student and school</h2>
        <div className="bottom">
          <button
            id="button_1"
            onClick={() => {
              setIsActive1(true);
              setIsActive2(false);
              setIsActive3(false);
            }}
            className={isActive1 ? 'projects_button active' : 'projects_button'}
            type="button"
          >
            <FontAwesomeIcon className="icon" icon="book" />
            <span>Feedback Tool</span>
          </button>
          <button
            id="button_2"
            onClick={() => {
              setIsActive1(false);
              setIsActive2(true);
              setIsActive3(false);
            }}
            className={isActive2 ? 'projects_button active' : 'projects_button'}
            type="button"
          >
            <FontAwesomeIcon className="icon" icon="flask" />
            <span>qApp</span>
          </button>
          <button
            id="button_3"
            onClick={() => {
              setIsActive1(false);
              setIsActive2(false);
              setIsActive3(true);
            }}
            className={isActive3 ? 'projects_button active' : 'projects_button'}
            type="button"
          >
            <FontAwesomeIcon className="icon" icon="screwdriver-wrench" />
            <span>Knowledge Profile</span>
          </button>
        </div>
      </div>
      <div className="right">
        <div id="card_1" className={isActive1 ? 'card active' : 'card'}>
          <div className="image" style={{ backgroundImage: `url(${IphonePlaceholder})` }} />
          <div className="text">
            <h3>Instant feedback</h3>
            <p>
              The Document Feedback Tool allows students to have their documents fully reviewed immediately, before they
              are graded by teachers. The purpose of the feedback tool is to eliminate that first round of feedback and
              allow the teacher and student to engage in meaningful dialogue.
            </p>
          </div>
        </div>
        <div id="card_2" className={isActive2 ? 'card active' : 'card'}>
          <div className="image" style={{ backgroundImage: `url(${IphonePlaceholder})` }} />
          <div className="text">
            <h3>qApp</h3>
            <p>
              The Document Feedback Tool allows students to have their documents fully reviewed immediately, before they
              are graded by teachers. The purpose of the feedback tool is to eliminate that first round of feedback and
              allow the teacher and student to engage in meaningful dialogue.
            </p>
          </div>
        </div>
        <div id="card_3" className={isActive3 ? 'card active' : 'card'}>
          <div className="image" style={{ backgroundImage: `url(${IphonePlaceholder})` }} />
          <div className="text">
            <h3>Knowledge Profile</h3>
            <p>
              The Document Feedback Tool allows students to have their documents fully reviewed immediately, before they
              are graded by teachers. The purpose of the feedback tool is to eliminate that first round of feedback and
              allow the teacher and student to engage in meaningful dialogue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
