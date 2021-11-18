import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#blank">Resume</a>
        <a href="#contact">
          <button>Contact</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
