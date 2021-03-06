import React from "react";
import MainProjectDetails from "../Components/project-components/MAIN-PROJECT-DETAILS/MainProjectDetails";
import rebilliass from "../Assets/rebilliass.png";

const description =
  "While working at Rebillia, LLC I was tasked with redesigning the company site. Through several iterations, I landed upon a clean, seo focused, static site built using Gatsby and React.";
const gitlink = "https://github.com/Jamalfox85/rebillia";
const title = "Rebillia";
const screenshot = rebilliass;
const tech = ["JavaScript", "React.js", "Gatsby.js", "HTML", "CSS", "SASS"];
const livelink = "https://jfrebillia.gatsbyjs.io/";

const Selfcareblog_details = () => {
  return (
    <div className="details-wrapper">
      <MainProjectDetails
        desc={description}
        gitlink={gitlink}
        title={title}
        image={screenshot}
        tech={tech}
        livelink={livelink}
      />
    </div>
  );
};

export default Selfcareblog_details;
