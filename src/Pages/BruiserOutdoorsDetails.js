import React from "react";
import MainProjectDetails from "../Components/project-components/MAIN-PROJECT-DETAILS/MainProjectDetails";
import bruiserss from "../Assets/bruiserss.png";

const description =
  "This is the description of the project. This is the description of the product. This is the description. This is the description of the project. This is the description of the product. This is the description. This is the description of the project. This is the description of the product. This is the description. ";
const gitlink = "https://github.com/Jamalfox85/BruiserOutdoors";
const title = "Bruiser Outdoors";
const screenshot = bruiserss
const tech = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'SQL', 'ASP.net']

const Bruiseroutdoors_details = () => {
  return (
    <div className="details-wrapper">
      <MainProjectDetails
        desc={description}
        gitlink={gitlink}
        title={title}
        image={screenshot}
        tech={tech}
      />
    </div>
  );
};

export default Bruiseroutdoors_details;
