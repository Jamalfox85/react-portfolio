import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./Pages/Landing";
import GoalPlannerDetails from "./Pages/GoalPlannerDetails";
import BruiserOutdoorsDetails from "./Pages/BruiserOutdoorsDetails";
import PhotographyDetails from "./Pages/PhotographyDetails";
import Rebillia from "./Pages/Rebillia";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/gpd" element={<GoalPlannerDetails />} />
          <Route exact path="/bod" element={<BruiserOutdoorsDetails />} />
          <Route exact path="/pd" element={<PhotographyDetails />} />
          <Route exact path="/rebillia" element={<Rebillia />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
