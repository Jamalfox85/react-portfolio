import React from "react";
import MainProjectDetails from "../Components/project-components/MAIN-PROJECT-DETAILS/MainProjectDetails";
import selfcaress from "../Assets/selfcaremanifestoss.png";

const description =
  "This site is the landing page for a mock self care blog.  ";
const gitlink = "https://github.com/Jamalfox85/self-care-manifesto";
const title = "Self Care Blog";
const screenshot = selfcaress;
const tech = ["HTML", "CSS", "JavaScript"];
const livelink = "https://self-care-manifesto.vercel.app/";

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
