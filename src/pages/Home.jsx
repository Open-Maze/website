import React, { useState } from 'react';
import './shared.scss';

import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Icon from '../components/Icon/Icon';
import HeaderL from '../components/HeaderL/HeaderL';
import ContactCardS from '../components/ContactCardS/ContactCardS';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="page home">
      <HeaderL />
      <h1>Welcome at OpenMaze</h1>
      <h4>Lorem ipsum</h4>
      <h2>Our core values</h2>
      <p>Wij zijn OpenMaze, en dit zijn onze belangrijkste uitgangspunten</p>
      <br />
      <br />
      <Button pageUrl="/contact" className="btn-purple-solid">
        Learn more
      </Button>
      <br />
      <br />
      <Button pageUrl="/contact" className="btn-purple-outline">
        Learn more
      </Button>
      <br />
      <br />
      <Input
        value={inputValue}
        handleChange={(event) => {
          setInputValue(event.target.value);
        }}
        label="Voornaam"
        placeholder="Voornaam"
      />
      <br />
      <br />
      <Icon front="heart" back="circle" />
      <Icon front="rocket" back="circle" />
      <Icon front="user" back="circle" />
      <br />
      <br />
      <ContactCardS />
    </div>
  );
};

export default Home;
