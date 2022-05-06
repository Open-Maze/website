import React from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../../pages/Home';

const App = () => (
  <div className="app">
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;
