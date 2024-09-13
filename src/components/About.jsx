import React from "react";
import Services from "./Services";
import rulerPen from "../assets/icons/ruler-pen.png";
import code from "../assets/icons/code.png";
import android from "../assets/icons/android.png";
import pythonSvg from "../assets/icons/python-svg.png";

const About = () => {
  const skills = [
    { name: "UI & UX DESIGNING", image: rulerPen },
    { name: "WEB DEVELOPMENT", image: code },
    { name: "MOBILE DEVELOPMENT", image: android },
    { name: "LIBRARY MANAGEMENT", image: pythonSvg },
  ];

  return (
    <div className="md:px-10 px-7 sm:mt-12" id="about">
      <h1 className="text-pink-600 font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        I'm a passionate Fullstack Developer with expertise in both frontend and backend technologies. I love crafting responsive web applications that prioritize user experience and functionality. With a strong foundation in HTML, CSS, JavaScript, and backend technologies like Node.js and MySQL, I enjoy building solutions that solve real-world problems. In addition to development, I also have a keen interest in UI/UX design, ensuring that every project I work on is both visually appealing and user-friendly. Here are the major skills I have:
      </p>

      <div className="md:flex my-7 items-center">
        <div className="text-pink-600 text-8xl font-bold">2+</div>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialized in building apps, while ensuring a
          seamless web experience for end users.
        </p>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-pink-600 flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <Services />
    </div>
  );
};

export default About;
