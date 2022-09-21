import React from 'react';

// External
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Core
import ScrollToTop from './core/ScrollToTop';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Components
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="app">
    <Router>
      <Nav />
      <ScrollToTop>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  </div>
);

export default App;
