import React from "react";
import MainProjectDetails from "../Components/project-components/MAIN-PROJECT-DETAILS/MainProjectDetails";
import bruiserss from "../Assets/bruiserss.png";

const description =
  "I graduated with a BBA in Information Systems from KSU. My capstone project involved redesigning the site of a local business and implementing additional features to create a more user-friendly experience. My team chose a rock-climbing business. We redesigned the site layout, added a shop, and created a login system complete with user roles.";
const gitlink = "https://github.com/Jamalfox85/BruiserOutdoors";
const title = "Bruiser Outdoors";
const screenshot = bruiserss;
const tech = ["HTML", "CSS", "Bootstrap", "JavaScript", "SQL", "ASP.net"];
const livelink = "https://bruiser-outdoors.vercel.app/";

const Bruiseroutdoors_details = () => {
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

export default Bruiseroutdoors_details;
