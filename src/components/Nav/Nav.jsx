import React from 'react';
import './Nav.scss';

import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <Link to="/">Home</Link>
  </div>
);

export default Nav;
