import React from "react";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <div style={{ width: "800px" }} className="max-w-full mx-auto">
      <div className="text-center">
        <div className="avatar w-72">
          <img src={profile} alt="" />
        </div>
      </div>
      <h2 className="text-3xl font-semibold mb-3">About Me</h2>
      <p>
        I am a student. I love technologies. From my childhood I am playing with
        digital devices. and then I discovered that I like to spend most of my
        time with technologies. Then, I started to learn web development.
        <br />
        <br />
        I have over 2 years of experience efficiently coding websites and
        applications using modern HTML, CSS, and JavaScript, React.js, Node.js,
        Git and so on.
        <br />
        <br />
        Building cutting-edge, user-friendly websites and applications is a true
        passion of mine, and I am convinced that I would be an outstanding fit
        for your company. I continuously search out new technologies and remain
        up-to-date on industry trends and breakthroughs in addition to my
        knowledge base. This has enabled me to keep ahead of the curve with new
        technologies. I've included a copy of my résumé that details my job
        experience and projects, as well as links to websites and applications
        on which I've had the privilege of working.
      </p>
    </div>
  );
};

export default About;
