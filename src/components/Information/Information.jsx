import React from 'react';
import './Information.scss';

const Information = ({ title, image, flipped }) => {
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
          <h1>{title}</h1>
          <p>
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
        </div>
        <div className="right" style={orderRight}>
          <img src={image} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Information;
