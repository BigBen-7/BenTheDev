/* eslint-disable no-unused-vars */
import React from "react";
import aboutport from "../assets/about.png";
import SocialIcons from "./SocialIcons";
import { FaCircle } from "react-icons/fa";

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
];

function AboutSection() {
  return (
    <>
      <div className="m-4 p-6 flex flex-col-reverse  md:flex-row justify-between my-16">
        <div className="">
          <img
            src={aboutport}
            alt="Portfolio Image"
            className="w-full align-top max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
        {/* About Me */}
        <div className="my-16">
          <h2 className="font-bold text-3xl text-white">
            About{" "}
            <span className="text-[#FF8E5E] font-bold text-4xl">Benard.</span>
          </h2>
          <p className="text-gray-300 max-w-md mt-2">
            <em>
            A creative professional with a strong portfolio in digital design, including experience with front-end dev. Experienced working from concept to production, and with stakeholders from multiple disciplines. A fluent user of popular design tools like Figma and Adobe CC.
            </em>
          </p>
          <div className="text-gray-300 p-3 flex justify-end">
            <SocialIcons />
          </div>

          <div className="text-gray-300 text-sm font-bold">
            <p>Here are few <span className="text-[#FF8E5E]">technologies</span> i&apos;ve been working with</p>
            <div className="grid grid-cols-3  md:grid-cols-3 gap-4 md:gap-6 py-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex  items-center space-x-2">
                  {/* Overlapping circle icons */}
                  <div className="relative">
                    <FaCircle className="text-[#FF8E5E] text-xs" />
                    <FaCircle className="text-[#FFC5B2] text-xs absolute top-0 left-[6px]" />
                  </div>
                  <span className="text-gray-300 text-sm pl-2 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
