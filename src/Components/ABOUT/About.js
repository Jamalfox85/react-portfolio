import React from "react";
import "./About.css";
import aboutImage from "../../Assets/aboutimage.png";

const About = () => {
  return (
    <div className="about-wrapper" id="about">
      <div className="about-header section-header">
        <h1>ABOUT</h1>
      </div>
      <div className="about-main">
        <div className="about-left">
          <h4 className="about-subheader section-subheader">Who am I?</h4>
          <div className="about-left-main-text">
            <p>
              I graduated from KSU of Kennesaw, GA with a degree in Information
              Systems at the end of 2021. After a few courses in web and app
              development my interest in coding was solidified.
            </p>
            <br />
            <br />
            <p>
              My long-term goal is to start a small game studio with my younger
              brother (an aspiring game designer). Until then I hope to collect
              as much knowledge as possible and build my skills to the best of
              my abilities, making sure to capitalize on every opportunity the
              universe throws my way.
            </p>
          </div>
        </div>
        <div className="about-right">
          <img src={aboutImage} className="about-right-image" alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
