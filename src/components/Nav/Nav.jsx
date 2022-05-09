import React from 'react';
import './Nav.scss';

import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <div className="left">
      <img src="" alt="Logo" />
    </div>
    <div className="right">
      <div className="menu">
        <Link to="/">home</Link>
        <Link to="/">products</Link>
        <Link to="/">about</Link>
        <Link to="/">contact</Link>
      </div>
      <div className="cta">
        <Link to="/" className="cta_button purple">
          Schedule demo
        </Link>
      </div>
    </div>
  </div>
);

export default Nav;
