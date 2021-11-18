import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <h1 className="skills-header section-header">Skills</h1>
      <div className="skill-grid">
        <i className="skill-block fab fa-html5"></i>
        <i className="skill-block fab fa-css3-alt"></i>
        <i className="skill-block fab fa-js-square"></i>
        <i className="skill-block fab fa-react"></i>
        <i className="skill-block fab fa-sass"></i>
        <i className="skill-block fab fa-bootstrap"></i>
        <i className="skill-block fab fa-git"></i>
        <i className="skill-block fab fa-github"></i>
      </div>
    </div>
  );
};

export default Skills;
