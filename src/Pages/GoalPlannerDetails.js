import React from "react";
import MainProjectDetails from "../Components/project-components/MAIN-PROJECT-DETAILS/MainProjectDetails";
import goalss from "../Assets/goalplannerss.png";

const description =
  "This is the description of the project. This is the description of the product. This is the description. This is the description of the project. This is the description of the product. This is the description. This is the description of the project. This is the description of the product. This is the description. ";
const gitlink = "https://github.com/Jamalfox85/goal-tracker";
const title = "Goal Planner";
const screenshot = goalss;
const tech = ["HTML", "CSS", "JavaScript", "React"];
const livelink = "https://goal-tracker-tau.vercel.app/";

const Goalplanner_details = () => {
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

export default Goalplanner_details;
