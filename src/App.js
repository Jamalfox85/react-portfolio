import Hero from "./Components/HERO/Hero";
import "./App.css";
import Navbar from "./Components/NAVBAR/Navbar";
import Contact from "./Components/CONTACT/Contact";
import Skills from "./Components/SKILLS/Skills";
import About from "./Components/ABOUT/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
