import React, { useEffect } from 'react';

// External
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Core
import Scroll from './core/Scroll';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import DocumentScreener from './pages/DocumentScreener';
import KnowledgeProfiler from './pages/KnowledgeProfiler';
import QApp from './pages/QApp';
import NotFound from './pages/NotFound';

// Components
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

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
        <Scroll>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/document-screener" element={<DocumentScreener />} />
            <Route path="/knowledge-profiler" element={<KnowledgeProfiler />} />
            <Route path="/q-app" element={<QApp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Scroll>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
