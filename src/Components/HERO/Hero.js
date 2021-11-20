import React from "react";
import Particles from "react-tsparticles";
import { useSpring, animated } from "react-spring";
import "./Hero.css";

const Hero = () => {
  const backgroundAnimation = useSpring({
    to: { opacity: 0.7 },
    from: { opacity: 1 },
    config: { duration: 2500 },
    delay: 5000,
  });
  const hiFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 },
    delay: 1500,
  });
  const imFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 3500,
  });
  const nameFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 4250,
  });
  const particleFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 4250,
  });
  const taglineFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 2500 },
    delay: 5000,
  });

  return (
    <div className="hero-wrapper" id="home">
      <animated.div
        className="bg-overlay"
        style={backgroundAnimation}
      ></animated.div>
      <div className="hero-main">
        <h1>
          <animated.span style={hiFadeIn}>Hi.</animated.span>
          <animated.span style={imFadeIn}> I'm </animated.span>
          <animated.div style={nameFadeIn} className="jamalfox-header">
            Jamal Fox
          </animated.div>
        </h1>
        <animated.div
          className="hero-profile-photo"
          style={taglineFadeIn}
        ></animated.div>
        <animated.h1 style={taglineFadeIn}>Front-End Web Developer</animated.h1>
        <animated.div style={particleFadeIn}>
          <Particles
            id="tsparticles"
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#16f2b4",
                },
                links: {
                  color: "transparent",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "out",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 40,
                },
                opacity: {
                  random: true,
                },
                shape: {
                  type: ["circle"],
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
        </animated.div>
      </div>
    </div>
  );
};

export default Hero;
