import React from "react";
import "./MainProjectDetails.css";

const MainProjectDetails = () => {
  return (
    <div className="mainprojectsdetails-wrapper">
      <div className="project-details-container">
        <div className="project-details desc">Description</div>
        <div className="project-details title">Project Title</div>
        <div className="project-details git">Git</div>
        <div className="project-details vid">Video</div>
        <div className="project-details tech">Tech</div>
        <div className="project-details testing">Testing</div>
        <div className="project-details w3">w3</div>
      </div>
    </div>
  );
};

export default MainProjectDetails;
