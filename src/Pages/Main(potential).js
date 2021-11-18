import React from "react";
import Hero from "./Components/HERO/Hero";
import Navbar from "./Components/NAVBAR/Navbar";
import Contact from "./Components/CONTACT/Contact";
import Skills from "./Components/SKILLS/Skills";
import About from "./Components/ABOUT/About";
import Portfolio from "./Components/PORTFOLIO/Portfolio";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Main;
