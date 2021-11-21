import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

import goalplannerss from "../../../src/Assets/goalplannerss.png";
import bruiserss from "../../../src/Assets/bruiserss.png";
import photographyss from "../../../src/Assets/photographyss.png";
import selfcaremanifestoss from "../../../src/Assets/selfcaremanifestoss.png";

const Portfolio = () => {
  const portfolioProjects = [
    {
      image: goalplannerss,
      title: "Goal Planner",
      details_bttn_link: "/gpd",
      github_bttn_link: "https://github.com/Jamalfox85/goal-tracker",
    },
    {
      image: bruiserss,
      title: "Bruiser Outdoors",
      details_bttn_link: "/bod",
      github_bttn_link: "https://github.com/Jamalfox85/BruiserOutdoors",
    },
    {
      image: photographyss,
      title: "Photography Blog",
      details_bttn_link: "/pd",
      github_bttn_link: "https://github.com/Jamalfox85/Roman",
    },
    {
      image: selfcaremanifestoss,
      title: "Self Care Blog",
      details_bttn_link: "/scd",
      github_bttn_link: "https://github.com/Jamalfox85/self-care-manifesto",
    },
  ];

  return (
    <div className="portfolio-wrapper">
      <h1 className="portfolio-header section-header">PORTFOLIO</h1>
      <div className="project-wrapper">
        {portfolioProjects.map((index, item) => (
          <div className="portfolio-project">
            <h3 className="portfolio-project-header">
              {portfolioProjects[item].title}
            </h3>
            <img src={portfolioProjects[item].image} alt="test" />
            <div className="project-bttns">
              <Link to={portfolioProjects[item].details_bttn_link}>
                <button className="project-bttn bttn-blue ">
                  View Details
                </button>
              </Link>
              <button
                className="project-bttn bttn-pink b"
                onClick={() => {
                  // window.location.href = "https://google.com";
                  window.open(portfolioProjects[0].github_bttn_link, "_blank");
                }}
              >
                Github
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
