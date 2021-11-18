import React from "react";
import "./Portfolio.css";
import testPhoto from "../../Assets/hero-profile-photo.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioProjects = [
    {
      image: { testPhoto },
      title: "TEST TITLE",
      details_bttn_link: "",
      github_bttn_link: "",
    },
  ];

  return (
    <div className="portfolio-wrapper">
      <h1 className="portfolio-header section-header">Portfolio</h1>
      <div className="project-wrapper">
        <div className="portfolio-project"></div>
        {portfolioProjects.map(() => {
          <div className="portfolio-projects">
            <h3>{portfolioProjects[0].title}</h3>
            <img src={testPhoto} alt="test" />
            <div className="project-bttns">
              <Link to={"../../ProjectPages/ TestProject"}>
                <button className="project-bttn bttn-blue ">
                  View Details
                </button>
              </Link>
              <button className="project-bttn bttn-pink b">Github</button>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
