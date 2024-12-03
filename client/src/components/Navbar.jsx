import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">My Blog</div>
    <ul className="nav-links">
      <li><NavLink to="/" activeClassName="active" className="nav-item">Home</NavLink></li>
      <li><NavLink to="/create" activeClassName="active" className="nav-item">Create Post</NavLink></li>
      <li><NavLink to="/about" activeClassName="active" className="nav-item">About</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
