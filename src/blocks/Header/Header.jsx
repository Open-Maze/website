import React from 'react';
import './Header.css';

// Components
import Button from '../../components/Button/Button';

// Assets
import { ReactComponent as ScrollDown } from '../../assets/images/icons/chevron-down.svg';

const Header = ({
  size,
  title,
  text,
  buttonLink,
  buttonLabel,
  button2Link,
  button2Label,
  image,
  external,
  arrow,
  children,
}) => {
  function scrollDown() {
    window.scroll(0, window.scrollY + 400);
  }

  return (
    <>
      <section className={`cms-block flex items-center bg-white ${size}`}>
        <div className="container grid grid-cols-1 items-center gap-10 pt-24 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-5 lg:col-start-1">
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
            {!children && (
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
            )}
            {children && children}
          </div>
          {image && (
            <div className="col-span-1 h-full lg:col-span-6 lg:col-end-13" data-aos="fade-up" data-aos-delay="300">
              <img src={image} alt={title} className="mx-auto mt-12 h-full lg:mt-0" />
            </div>
          )}
        </div>
      </section>
      {arrow && (
        <div className="relative left-0 right-0 bottom-16 mx-auto hidden h-fit w-10 animate-bounce cursor-pointer p-2 lg:block">
          <div aria-hidden onClick={() => scrollDown()}>
            <ScrollDown />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
