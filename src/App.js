import Hero from "./Components/HERO/Hero";
import "./App.css";
import Navbar from "./Components/NAVBAR/Navbar";
import Contact from "./Components/CONTACT/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Contact />
    </div>
  );
}

export default App;
