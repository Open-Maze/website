import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../../pages/Home';

const App = () => (
  <div className="app">
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
);

export default App;
