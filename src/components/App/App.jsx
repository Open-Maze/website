import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Footer from '../Footer/Footer';

const App = () => (
  <div className="app">
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
