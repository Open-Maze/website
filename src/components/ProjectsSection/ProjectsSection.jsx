import React, { useState } from 'react';
import './ProjectsSection.css';

// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Assets
import knowledgeProfiler from '../../assets/images/illustrations-products/knowledge-profiler.svg';
import qApp from '../../assets/images/illustrations-products/q-app.svg';
import topicExtraction from '../../assets/images/illustrations-products/topic-extraction.svg';

const ProjectsSection = () => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <div className="cms-block">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="col-span-6 lg:col-start-1">
          <h4 className="pb-2 text-midnight" data-aos="fade-up">
            Impactful Decisions
          </h4>
          <h2 data-aos="fade-up" data-aos-delay="100">
            Solutions for every subject, student and school
          </h2>
          <div className="mt-20">
            <div data-aos="fade-up" data-aos-delay="100">
              <button
                id="button-1"
                onClick={() => {
                  setIsActive1(true);
                  setIsActive2(false);
                  setIsActive3(false);
                }}
                className={isActive1 ? 'projects-button active' : 'projects-button'}
                type="button"
              >
                <FontAwesomeIcon className="icon mr-4 h-fit w-4" icon="fa-solid fa-book" />
                <span>Document Screener</span>
              </button>
            </div>
            <br />
            <div data-aos="fade-up" data-aos-delay="100">
              <button
                id="button-2"
                onClick={() => {
                  setIsActive1(false);
                  setIsActive2(true);
                  setIsActive3(false);
                }}
                className={isActive2 ? 'projects-button active' : 'projects-button'}
                type="button"
              >
                <FontAwesomeIcon className="icon mr-4 h-fit w-4" icon="fa-solid fa-comment-dots" />
                <span>Q-App</span>
              </button>
            </div>
            <br />
            <div data-aos="fade-up" data-aos-delay="400">
              <button
                id="button-3"
                onClick={() => {
                  setIsActive1(false);
                  setIsActive2(false);
                  setIsActive3(true);
                }}
                className={isActive3 ? 'projects-button active' : 'projects-button'}
                type="button"
              >
                <FontAwesomeIcon className="icon mr-4 h-fit w-4" icon="fa-solid fa-graduation-cap" />
                <span>Knowledge Profiler</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-end-13">
          <div id="card-1" className={isActive1 ? 'card active' : 'card'}>
            <div
              className="image"
              style={{ backgroundImage: `url(${topicExtraction})` }}
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <div className="text">
              <h3 data-aos="fade-up" data-aos-delay="200">
                Direct feedback at your fingertips
              </h3>
              <p data-aos="fade-up" data-aos-delay="300">
                Students often have difficulty getting feedback, let alone getting it in a timely manner. In addition,
                we have found that the feedback they do receive is often very generic. Our Auto Feedback Tool built into
                your LMS solves these problems by providing feedback on the following: document structure, research
                questions answered, text coherence, idea cohesion, and other contextual and structural aspects. This
                then allows students and teachers to immediately engage in meaningful dialogue.
              </p>
            </div>
          </div>
          <div id="card-2" className={isActive2 ? 'card active' : 'card'}>
            <div
              className="image"
              style={{ backgroundImage: `url(${qApp})` }}
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <div className="text">
              <h3 data-aos="fade-up" data-aos-delay="200">
                Talk to your documents
              </h3>
              <p data-aos="fade-up" data-aos-delay="300">
                People often interact with documents such as research papers or articles in a very linear way. With the
                Q-App, seamlessly integrated into your LMS, users can ask questions of documents as if they were talking
                to the author. This leads to a whole new interactive way of working with products. The Q-App not only
                provides a better customer experience, but also saves time.
              </p>
            </div>
          </div>
          <div id="card-3" className={isActive3 ? 'card active' : 'card'}>
            <div
              className="image"
              style={{ backgroundImage: `url(${knowledgeProfiler})` }}
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <div className="text">
              <h3 data-aos="fade-up" data-aos-delay="200">
                Your personally generated skill profile
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
    </div>
  );
};

export default ProjectsSection;
