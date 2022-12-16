import React, { useState } from 'react';
import './ProjectsSection.css';

// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Button from '../../components/Button/Button';

// Assets
import knowledgeProfiler from '../../assets/images/illustrations-products/knowledge-profiler.svg';
import qApp from '../../assets/images/illustrations-products/q-app.svg';
import topicExtraction from '../../assets/images/illustrations-products/topic-extraction.svg';

const ProjectsSection = () => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <section className="cms-block">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-12" data-aos="fade-up" data-aos-delay="500">
        <div className="col-span-6 lg:col-start-1">
          <h4 className="pb-2 text-dark">Impactful technologies</h4>
          <h2>Solutions for every subject, student and school</h2>
          <div className="mt-20">
            <div>
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
                <FontAwesomeIcon className="icon mr-4 w-4" icon="fa-solid fa-book" />
                <span>Document Screener</span>
              </button>
            </div>
            <br />
            <div>
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
                <FontAwesomeIcon className="icon mr-4 w-4" icon="fa-solid fa-graduation-cap" />
                <span>Knowledge Profiler</span>
              </button>
            </div>
            <br />
            <div>
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
                <FontAwesomeIcon className="icon mr-4 w-4" icon="fa-solid fa-comment-dots" />
                <span>Q-App</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-end-13">
          <div id="card-1" className={isActive1 ? 'card active' : 'card'}>
            <div className="image" style={{ backgroundImage: `url(${topicExtraction})` }} />
            <div className="text">
              <h3>Document Screener</h3>
              <p>
                We noticed that students often receive an initial round of feedback, which is usually about the
                structure of the document, grammatical errors, missing components, or the quality of writing. The
                document screener allows students to have their documents reviewed immediately, before they end up with
                teachers. Giving them a chance to already improve on their documents.
              </p>
              <Button pageUrl="/document-screener" className="button button--skyline-outline">
                learn more
              </Button>
            </div>
          </div>
          <div id="card-2" className={isActive2 ? 'card active' : 'card'}>
            <div className="image" style={{ backgroundImage: `url(${knowledgeProfiler})` }} />
            <div className="text">
              <h3>Knowledge Profiler</h3>
              <p>
                Every student is unique, as is their learning journey. Over the course of their studies, students will
                develop domain-specific knowledge that goes beyond the standard curriculum. By extracting all
                submissions of a student from their online learning environment, the Knowledge Profiler determines and
                displays these skills in a simple overview.
              </p>
              <Button pageUrl="/knowledge-profiler" className="button button--skyline-outline">
                learn more
              </Button>
            </div>
          </div>
          <div id="card-3" className={isActive3 ? 'card active' : 'card'}>
            <div className="image" style={{ backgroundImage: `url(${qApp})` }} />
            <div className="text">
              <h3>Q-App</h3>
              <p>
                Traditionally documents are noninteractive, the Q-App changes this by allowing users to interact with a
                document as if they were talking to a human. Instead of just reading through it, you can now ask
                questions, and get relevant answers present in the document. It is just as if you were able to talk with
                the author!
              </p>
              <Button pageUrl="/q-app" className="button button--skyline-outline">
                learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
