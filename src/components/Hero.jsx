import React from "react";
import profile from "../assets/profile.png";
import { useSpring, animated } from "react-spring";

const Hero = () => {
  const styles = useSpring({
    from: {
      // opacity: 0,
      transform: "scale(0)",
    },
    to: {
      // opacity: 1,
      transform: "scale(1)",
    },
    config: { duration: 500 },
  });

  return (
    <div className="flex flex-col items-center">
      <div className="avatar w-72">
        <animated.img style={styles} src={profile} alt="" />
      </div>
      <div className="hero-description text-center mt-7">
        <h1 className="hero-heading text-5xl mb-5">Md Tariqul Islam</h1>
        <div className="text-xl">MERN Stack Web Developer</div>
      </div>
      <div className="links flex gap-3 mt-4">
        <a href="#contact" className="btn btn-outline btn-accent">
          Hire Me
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1-PvZTo-JeUmPfa7NOl-sr4cTIr922dpY/view"
          className="btn btn-outline btn-primary"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
