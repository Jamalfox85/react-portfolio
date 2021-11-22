import React from "react";
import MainProjectDetails from "../Components/project-components/MAIN-PROJECT-DETAILS/MainProjectDetails";
import selfcaress from "../Assets/selfcaremanifestoss.png";

const description =
  "This is the description of the project. This is the description of the product. This is the description. This is the description of the project. This is the description of the product. This is the description. This is the description of the project. This is the description of the product. This is the description. ";
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
