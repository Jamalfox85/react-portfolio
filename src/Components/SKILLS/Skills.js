import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-wrapper">
        <h1 className='skills-header'>Skills</h1>
      <div className="skill-grid">
        <div className="skill-block">HTML</div>
        <div className="skill-block">CSS</div>
        <div className="skill-block">JS</div>
        <div className="skill-block">React</div>
        <div className="skill-block">SCSS</div>
        <div className="skill-block">Bootstrap</div>
        <div className="skill-block">Git</div>
        <div className="skill-block">Github</div>
      </div>
    </div>
  );
};

export default Skills;
