import React from "react";
import MainProjectDetails from "../Components/project-components/MAIN-PROJECT-DETAILS/MainProjectDetails";
import goalss from "../Assets/goalplannerss.png";

const description =
  "This project asks the user to enter some cursory information including Name, Email, and Goal. From there the user is asked to define his target after a period of about 12 months. Next the user will enter milestones at the 3-month, 6-month, and 9-month mark. Following that, the user enters data for each month in between. After clicking submit, the page will show a 12 month scheduler that displays the users goals, milestones, and deadlines.  ";
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
