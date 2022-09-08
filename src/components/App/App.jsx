import React from 'react';

// External
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import About from '../../pages/About';
import Contact from '../../pages/Contact';

// Components
import Nav from '../Nav/Nav';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';

const App = () => (
  <div className="app">
    <Router>
      <Nav />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  </div>
);

export default App;
