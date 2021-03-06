import React from 'react';
import './Information.scss';

// Components
import Button from '../Button/Button';

const Information = ({ subtitle, title, buttonLabel, buttonLink, image, flipped }) => {
  let orderLeft;
  let orderRight;
  if (flipped) {
    orderLeft = {
      order: '1',
    };
    orderRight = {
      order: '2',
    };
  } else {
    orderLeft = {
      order: '2',
    };
    orderRight = {
      order: '1',
    };
  }

  return (
    <div className="information">
      <div className="information-wrapper">
        <div className="left" style={orderLeft}>
          <h4 data-aos="fade-up">{subtitle}</h4>
          <h1 data-aos="fade-up" data-aos-delay="100">
            {title}
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
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
          <div className="buttons" data-aos="fade-up" data-aos-delay="300">
            <Button pageUrl={buttonLink} className="btn-purple-solid">
              {buttonLabel}
            </Button>
          </div>
        </div>
        <div className="right" style={orderRight}>
          <img src={image} alt="teamPicture" data-aos="fade-up" />
        </div>
      </div>
    </div>
  );
};

export default Information;
