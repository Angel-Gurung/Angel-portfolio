import React from "react";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2024| Angel Gurung</p>
        <p className="hidden sm:block">Fullstack Developer</p>
        <p className="hidden sm:block">UI Designer</p>
        <p className="hidden sm:block">Data Analyst</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start">
        <a
          href="https://www.linkedin.com/in/joshua-harris-321a24190/"
          target="_blank"
          rel="noreferrer"
          className="transition-all duration-300 hover:text-pink-600"
        >
          <img
            src={facebook}
            alt="Facebook"
            className="w-8 h-8 filter invert hover:invert-0 hover:sepia hover:brightness-200 hover:hue-rotate-330 transition-all duration-300"
          />
        </a>
        <a
          href="https://github.com/joshua-harris"
          target="_blank"
          rel="noreferrer"
          className="ml-4 transition-all duration-300 hover:text-pink-600"
        >
          <img
            src={instagram}
            alt="Instagram"
            className="w-8 h-8 filter invert hover:invert-0 hover:sepia hover:brightness-200 hover:hue-rotate-330 transition-all duration-300"
          />
        </a>
        <a
          href="mailto:anpch@example.com"
          target="_blank"
          rel="noreferrer"
          className="ml-4 transition-all duration-300 hover:text-pink-600"
        >
          <img
            src={dribbble}
            alt="Dribbble"
            className="w-8 h-8 filter invert hover:invert-0 hover:sepia hover:brightness-200 hover:hue-rotate-330 transition-all duration-300"
          />
        </a>
        <a
          href="mailto:anpch@example.com"
          target="_blank"
          rel="noreferrer"
          className="ml-4 transition-all duration-300 hover:text-pink-600"
        >
          <img
            src={email}
            alt="Email"
            className="w-8 h-8 filter invert hover:invert-0 hover:sepia hover:brightness-200 hover:hue-rotate-330 transition-all duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
