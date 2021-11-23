import React from "react";
import "./Navbar.css";
import Testpdf from "../../Assets/Jamal_Fox_Resume.pdf";
import { useSpring, animated } from "react-spring";

const Navbar = () => {
  const navFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 2500 },
    delay: 5000,
  });
  const contactButtonSlideIn = useSpring({
    to: {
      right: "-10px",
    },
    from: {
      right: "-500px",
    },
    config: { duration: 1000 },
    delay: 15000,
  });

  return (
    <div className="navbar-wrapper">
      <animated.div className="nav-links" style={navFadeIn}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href={Testpdf} target="_blank" rel="noreferrer">
          Resume
        </a>
        <a href="#contact">
          <animated.button style={contactButtonSlideIn}>
            Contact
          </animated.button>
        </a>
      </animated.div>
    </div>
  );
};

export default Navbar;
