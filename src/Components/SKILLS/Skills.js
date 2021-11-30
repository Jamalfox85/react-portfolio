import React from "react";
import "./Skills.css";
import skillsImage from "../../Assets/skillsimage.png";
import gatsbyicon from "../../Assets/gatsby.svg";

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <h1 className="skills-header section-header">SKILLS</h1>
      <div className="skills-main">
        <div className="skills-left">
          <div className="skill-grid">
            <i className="skill-block fab fa-html5"></i>
            <i className="skill-block fab fa-css3-alt"></i>
            <i className="skill-block fab fa-js-square"></i>
            <i className="skill-block fab fa-react"></i>
            <img
              className="skill-block gatsby-icon "
              src={gatsbyicon}
              alt="gatsby-icon"
            />
            <i className="skill-block fab fa-sass"></i>
            <i className="skill-block fab fa-bootstrap"></i>
            <i className="skill-block fab fa-git"></i>
            <i className="skill-block fab fa-github"></i>
          </div>
        </div>
        <div className="skills-right">
          <img src={skillsImage} alt="skills" className="skills-right-image" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
