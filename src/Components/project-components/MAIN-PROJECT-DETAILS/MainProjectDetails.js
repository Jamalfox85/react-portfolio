import React from "react";
import "./MainProjectDetails.css";
import { Link } from "react-router-dom";

const MainProjectDetails = ({
  desc,
  gitlink,
  title,
  image,
  tech,
  livelink,
}) => {
  return (
    <div className="mainprojectsdetails-wrapper">
      <div className="project-details-container">
        <div className="project-details desc">{desc}</div>
        <div className="project-details title">
          <h1>{title}</h1>
        </div>
        <div className="project-details git">
          <a href={gitlink} target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="project-details vid">
          <img
            src={image}
            alt="project-thumbnail"
            className="project-details-image"
          />
        </div>
        <div className="project-details tech">
          <h1>Technologies</h1>
          <ul className="project-tech-list">
            {tech.map((item, index) => (
              <li>{tech[index]}</li>
            ))}
          </ul>
        </div>
        <div className="project-details project-detail-buttons">
          <a href={livelink} target="_blank" rel="noreferrer">
            <div className="project-detail-button pdb-view">VIEW</div>
          </a>
          <Link to="/#contact" target="_blank" rel="noreferrer">
            <div className="project-detail-button pdb-contact">CONTACT</div>
          </Link>
          <Link to="/" target="_blank" rel="noreferrer">
            <div className="project-detail-button pdb-back">BACK</div>
          </Link>
          {/* <a href="https://jamalfox.com" target="_blank" rel="noreferrer">
            <div className="project-detail-button pdb-back">BACK</div>
          </a> */}
        </div>
        {/* <div className="project-details w3">w3</div> */}
      </div>
    </div>
  );
};

export default MainProjectDetails;
