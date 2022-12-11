import React from 'react';
import './Header.css';

// Components
import Button from '../../components/Button/Button';

// Assets
import { ReactComponent as ScrollDown } from '../../assets/images/icons/chevron-down.svg';

const Header = ({ size, title, text, buttonLink, buttonLabel, button2Link, button2Label, image, external }) => {
  function scrollDown() {
    window.scroll(0, window.scrollY + 400);
  }

  return (
    <>
      <section className={`cms-block flex h-fit items-center bg-white ${size}`}>
        <div className="container grid grid-cols-1 items-center gap-10 pt-24 lg:grid-cols-12">
          <div className="col-span-5 lg:col-start-1">
            {title && (
              <h1 className="pb-6" data-aos="fade-up" data-aos-delay="300">
                <mark>{title}</mark>
              </h1>
            )}
            {text && (
              <p className="pb-10" data-aos="fade-up" data-aos-delay="400">
                <mark>{text}</mark>
              </p>
            )}
            <div className="flex flex-col gap-6 sm:flex-row">
              {buttonLink && (
                <div className="buttons" data-aos="fade-up" data-aos-delay="500">
                  <Button external={external} pageUrl={buttonLink} className="button button--violet">
                    {buttonLabel}
                  </Button>
                </div>
              )}
              {button2Link && (
                <div className="buttons" data-aos="fade-up" data-aos-delay="500">
                  <Button external={external} pageUrl={button2Link} className="button button--violet-outline">
                    {button2Label}
                  </Button>
                </div>
              )}
            </div>
          </div>
          {image && (
            <div className="col-span-6 lg:col-end-13" data-aos="fade-up" data-aos-delay="300">
              <img src={image} alt={title} className="mt-12 h-full max-h-[70vh] w-96 lg:mt-0 lg:w-full" />
            </div>
          )}
        </div>
      </section>
      <div className="relative left-0 right-0 bottom-16 mx-auto hidden h-fit w-10 animate-bounce cursor-pointer p-2 lg:block">
        <div aria-hidden onClick={() => scrollDown()}>
          <ScrollDown />
        </div>
      </div>
    </>
  );
};

export default Header;
