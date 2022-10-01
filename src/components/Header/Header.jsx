import React from 'react';
import './Header.css';

// Components
import Button from '../Button/Button';

// Assets
import { ReactComponent as HeaderImage } from '../../assets/images/illustrations/header.svg';
import { ReactComponent as ScrollDown } from '../../assets/images/icons/chevron-down.svg';

const Header = ({ size }) => {
  function scrollDown() {
    window.scroll(0, window.scrollY + 400);
  }

  return (
    <>
      <div className={`cms-block flex h-fit items-center bg-white ${size}`}>
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="col-span-5 lg:col-start-1">
            <h1 className="pb-6 leading-tight" data-aos="fade-up">
              <mark>Welcome to OpenMaze</mark>
            </h1>
            <p className="pb-10" data-aos="fade-up" data-aos-delay="100">
              <mark>
                We aim to provide users of online educational environments with greater insight into their own learning
                journey and performance through the use of AI-based tools.
              </mark>
            </p>
            <div className="buttons" data-aos="fade-up" data-aos-delay="200">
              <Button pageUrl="#bottom" className="button button--violet">
                Get in touch
              </Button>
            </div>
          </div>
          <div className="col-span-6 lg:col-end-13" data-aos="fade-up" data-aos-delay="100">
            <HeaderImage className="mt-12 h-full max-h-[70vh] w-96 lg:mt-0 lg:w-full" />
          </div>
        </div>
      </div>
      <div className="relative left-0 right-0 bottom-16 mx-auto hidden h-fit w-10 animate-bounce cursor-pointer p-2 lg:block">
        <div aria-hidden onClick={() => scrollDown()}>
          <ScrollDown />
        </div>
      </div>
    </>
  );
};

export default Header;
