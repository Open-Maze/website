import React from 'react';

// Components
import Button from '../Button/Button';

const Information = ({ subtitle, title, buttonLabel, buttonLink, image }) => (
  <div className="cms-block bg-white">
    <div className="container">
      <div className="grid grid-flow-dense grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="col-span-6 lg:col-start-1">
          <img className="h-fit w-full rounded-lg" src={image} alt="Team" data-aos="fade-up" />
        </div>
        <div className="col-span-5 lg:col-end-13">
          <h4 className="pb-2 text-dark" data-aos="fade-up">
            {subtitle}
          </h4>
          <h2 className="pb-6" data-aos="fade-up" data-aos-delay="100">
            {title}
          </h2>
          <p className="pb-10 text-slate-700" data-aos="fade-up" data-aos-delay="200">
            We are young professionals who are passionate about AI and other cutting-edge technologies. There is a great
            opportunity for the education sector to leverage this to improve the quality of education.
            <br />
            <br />
            Our goal is to give users of online educational environments greater insight into their own learning journey
            and performance through the use of AI-based tools.
            <br />
            <br />
            We want to greatly improve the experience students have during their studies. These kinds of tools, aimed at
            students, indirectly benefit teachers, often relieving them of tedious tasks.
          </p>
          <div data-aos="fade-up" data-aos-delay="300">
            <Button pageUrl={buttonLink} className="button button--violet">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Information;
