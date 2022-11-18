import React, { useEffect } from 'react';

// External
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Core
import ScrollToTop from './core/ScrollToTop';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Components
import Nav from './blocks/Nav/Nav';
import Footer from './blocks/Footer/Footer';

const App = () => {
  library.add(fab, fas);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
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
        <Footer linkedin="https://linkedin.com/company/open-maze" />
      </Router>
    </div>
  );
};

export default App;
