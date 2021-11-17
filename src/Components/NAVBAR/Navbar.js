import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="nav-links">
        <p>Home</p>
        <p>About</p>
        <p>Skills</p>
        <p>Portfolio</p>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
