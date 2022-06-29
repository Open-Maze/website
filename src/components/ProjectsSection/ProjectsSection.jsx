import React, { useState } from 'react';
import './ProjectsSection.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import knowledgeProfiler from '../../assets/images/illustrations-products/knowlegde-profiler.svg';
import qApp from '../../assets/images/illustrations-products/q-app.svg';
import topicExtraction from '../../assets/images/illustrations-products/topic-extraction.svg';

const ProjectsSection = () => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <div className="projects_section">
      <div className="left">
        <h4 data-aos="fade-up">Enhanced experiences</h4>
        <h2 data-aos="fade-up" data-aos-delay="100">
          Solutions for every subject, student and school
        </h2>
        <div className="bottom">
          <div data-aos="fade-up" data-aos-delay="200">
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
          </div>
          <br />
          <div data-aos="fade-up" data-aos-delay="300">
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
          </div>
          <br />
          <div data-aos="fade-up" data-aos-delay="400">
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
      </div>
      <div className="right">
        <div id="card_1" className={isActive1 ? 'card active' : 'card'}>
          <div
            className="image"
            style={{ backgroundImage: `url(${topicExtraction})` }}
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <div className="text">
            <h3 data-aos="fade-up" data-aos-delay="200">
              Auto Feedback Tool
            </h3>
            <p data-aos="fade-up" data-aos-delay="300">
              Students often have difficulty getting feedback, let alone getting it in a timely manner. In addition, we
              have found that the feedback they do receive is often very generic. Our Auto Feedback Tool built into your
              LMS solves these problems by providing feedback on the following: document structure, research questions
              answered, text coherence, idea cohesion, and other contextual and structural aspects. This then allows
              students and teachers to immediately engage in meaningful dialogue.
            </p>
          </div>
        </div>
        <div id="card_2" className={isActive2 ? 'card active' : 'card'}>
          <div className="image" style={{ backgroundImage: `url(${qApp})` }} data-aos="fade-up" data-aos-delay="100" />
          <div className="text">
            <h3 data-aos="fade-up" data-aos-delay="200">
              Q-App
            </h3>
            <p data-aos="fade-up" data-aos-delay="300">
              People often interact with documents such as research papers or articles in a very linear way. With the
              Q-App, seamlessly integrated into your LMS, users can ask questions of documents as if they were talking
              to the author. This leads to a whole new interactive way of working with products. The Q-App not only
              provides a better customer experience, but also saves time.
            </p>
          </div>
        </div>
        <div id="card_3" className={isActive3 ? 'card active' : 'card'}>
          <div
            className="image"
            style={{ backgroundImage: `url(${knowledgeProfiler})` }}
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <div className="text">
            <h3 data-aos="fade-up" data-aos-delay="200">
              Knowledge Profiler
            </h3>
            <p data-aos="fade-up" data-aos-delay="300">
              Educational institutions allow their students more freedom in what they are learning. Each student has a
              unique and personal knowledge profile. The Knowledge Profiler integrated with the LMS automatically
              processes what a student has submitted and creates a validated overview of the their skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
