import port from "../assets/port-removebg-preview.png";
import { FaAsterisk } from "react-icons/fa";

function Hero() {
  const skills = ["Web-Dev","HTML5", "CSS", "JavaScript",  "React", "TypeScript"];

  return (
    <>
      <div className=" mt-6 px-6  flex flex-col md:flex-row justify-around ">
        <div className="my-16">
          <p className="text-[#cecccc] text-xs font-bold ">
            Hello, My name is,
          </p>
          <h2 className="text-white font-bold text-4xl">Benard</h2>
          {/*  full width on tablet screens and allow breaking on smaller screens */}
          <h2 className="font-bold text-3xl text-[#FF8E5E] ">
            Frontend Engineer | React Developer
          </h2>
          <p className="text-white max-w-md mt-2">
            <em>
              I create websites that are a pleasure to use. i design them with
              beautiful typography, meaningful transitions, and thoughtful
              interactions that delight people.
            </em>
          </p>
        </div>

        <div className="">
          <img
            src={port}
            alt="Portfolio Image"
            className="w-80  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
      {/* Tilted Skills */}
      <div className="skills-bar-container">
        <div className="skills-bar">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <span className="skill"><em>{skill}</em></span>
              {index < skills.length - 1 && (
                <span className="icon">
                  <FaAsterisk />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
