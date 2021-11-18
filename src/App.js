import Hero from "./Components/HERO/Hero";
import "./App.css";
import Navbar from "./Components/NAVBAR/Navbar";
import Contact from "./Components/CONTACT/Contact";
import Skills from "./Components/SKILLS/Skills";
import About from "./Components/ABOUT/About";
import Portfolio from "./Components/PORTFOLIO/Portfolio";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
