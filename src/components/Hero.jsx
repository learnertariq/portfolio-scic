import React from "react";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="avatar w-72">
        <img src={profile} alt="" />
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
