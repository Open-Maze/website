import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Nav from '../Nav/Nav';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Footer from '../Footer/Footer';

const App = () => {
  const history = createMemoryHistory();
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes location={history.location} navigator={history}>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
