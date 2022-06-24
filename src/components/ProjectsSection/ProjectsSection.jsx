import React, { useState } from 'react';
import './ProjectsSection.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IphonePlaceholder from '../../assets/images/iphone-placeholder.png';

const ProjectsSection = () => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <div className="projects_section">
      <div className="left">
        <h4>Enhanced experiences</h4>
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
            <FontAwesomeIcon className="icon" icon="comment-dots" />
            <span>Auto Feedback Tool</span>
          </button>
          <br />
          <br />
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
            <FontAwesomeIcon className="icon" icon="book" />
            <span>Q-App</span>
          </button>
          <br />
          <br />
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
            <FontAwesomeIcon className="icon" icon="graduation-cap" />
            <span>Knowledge Profiler</span>
          </button>
        </div>
      </div>
      <div className="right">
        <div id="card_1" className={isActive1 ? 'card active' : 'card'}>
          <div className="image" style={{ backgroundImage: `url(${IphonePlaceholder})` }} />
          <div className="text">
            <h3>Auto Feedback Tool</h3>
            <p>
              Students often have difficulty getting feedback, let alone getting it in a timely manner. In addition, we
              have found that the feedback they do receive is often very generic. Our Auto Feedback Toolbuilt into your
              LMS solves these problems by providing feedback on the following: document structure, research questions
              answered, text coherence, idea cohesion, and other contextual and structural aspects. This then allows
              students and teachers to immediately engage in meaningful dialogue.
            </p>
          </div>
        </div>
        <div id="card_2" className={isActive2 ? 'card active' : 'card'}>
          <div className="image" style={{ backgroundImage: `url(${IphonePlaceholder})` }} />
          <div className="text">
            <h3>Q-App</h3>
            <p>
              People often interact with documents such as research papers or articles in a very linear way. With the
              Q-App seamlessly integrated into your LMS, users can ask questions of documents as if they were talking to
              the author. This leads to a whole new interactive way of working with products. The Q-App not only
              provides a better customer experience, but also saves time.
            </p>
          </div>
        </div>
        <div id="card_3" className={isActive3 ? 'card active' : 'card'}>
          <div className="image" style={{ backgroundImage: `url(${IphonePlaceholder})` }} />
          <div className="text">
            <h3>Knowledge Profiler</h3>
            <p>
              Educational institutions allow their students more freedom in what they are learning. Each student has a
              unique and personal knowledge profile. The Knowledge Profiler integrated with the LMS automatically
              processes what a student has submitted and creates a validated overview of the student&apos;s skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
