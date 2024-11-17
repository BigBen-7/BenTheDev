/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaGithub,
  FaExternalLinkAlt,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { TbBrandRedux, TbBrandTailwind } from "react-icons/tb";
import { SiReactrouter, SiFramer } from "react-icons/si";
import crafters from "../assets/Kitchen-crafters.png";
import underwriter from "../assets/underwirter.png";
import bmi from "../assets/BMI.png";
import statisda from "../assets/Statisda.png";
import ref from "../assets/ref.png";

// Sample project data (replace with your actual data)
const projects = [
  {
    name: "Kitchen Crafters",
    image: crafters,
    link: "https://kitchencrafters.netlify.app/",
    github: "https://github.com/BigBen-7/KitchenCrafters",
    technologies: [
      <FaReact className="text-blue-600" />,
      <FaCss3 className="text-blue-400" />,
    ],
  },
  {
    name: "Underwriter App",
    image: underwriter,
    link: "https://underwriter-app.netlify.app/",
    github: "https://github.com/BigBen-7/UnderwriterApp",
    technologies: [
      <FaJs className="text-yellow-400" />,
      <FaCss3 className="text-blue-400" />,
      <FaHtml5 className="text-orange-400" />,
    ],
  },
  {
    name: "BMI App",
    image: bmi,
    link: "https://bmi-premium.netlify.app/",
    github: "https://github.com/BigBen-7/BMIApp",
    technologies: [
      <FaJs className="text-yellow-400" />,
      <FaCss3 className="text-blue-400" />,
      <FaHtml5 className="text-orange-400" />,
    ],
  },
  {
    name: "Referral Management App",
    image: ref,
    link: "https://referral-app-management-group3.netlify.app/",
    github: "https://github.com/BigBen-7/ReferralManagementApp",
    technologies: [
      <FaJs className="text-yellow-400" />,
      <FaCss3 className="text-blue-400" />,
      <FaHtml5 className="text-orange-400" />,
    ],
  },
];

// second list of projects
const projectsSecondLayout = [
  {
    name: "BMI App",
    image: bmi,
    link: "https://bmi-premium.netlify.app/",
    github: "https://github.com/BigBen-7/BMIApp",
    technologies: [
      <FaJs className="text-yellow-400" />,
      <FaCss3 className="text-blue-400" />,
      <FaHtml5 className="text-orange-400" />,
    ],
  },
  {
    name: "Referral App",
    image: ref,
    link: "https://referralapp.netlify.app/",
    github: "https://github.com/BigBen-7/ReferralApp",
    technologies: [
      <FaReact className="text-blue-600" />,
      <TbBrandTailwind className="text-blue-200" />,
      <SiReactrouter className="text-orange-400" />,
    ],
  },
  {
    name: "Referral App",
    image: ref,
    link: "https://referralapp.netlify.app/",
    github: "https://github.com/BigBen-7/ReferralApp",
    technologies: [
      <FaReact className="text-blue-600" />,
      <TbBrandTailwind className="text-blue-200" />,
      <SiReactrouter className="text-orange-400" />,
    ],
  },
  {
    name: "Referral App",
    image: ref,
    link: "https://referralapp.netlify.app/",
    github: "https://github.com/BigBen-7/ReferralApp",
    technologies: [
      <FaReact className="text-blue-600" />,
      <TbBrandTailwind className="text-blue-200" />,
      <SiReactrouter className="text-orange-400" />,
    ],
  },
];
const ProjectCard = ({ project }) => (
  <motion.div className="relative group h-48 sm:h-64 md:h-72 rounded-lg overflow-hidden">
    <motion.div
      className="w-full h-full"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover rounded-lg"
      />
    </motion.div>
    <div className="absolute inset-0 border-2 border-[#FF8E5E] bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center rounded-lg transition-opacity duration-300">
      <p className="text-xl font-bold text-center text-[#FF8E5E]">
        <em>{project.name}</em>
      </p>
      <div className="flex gap-3 justify-center items-center my-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#FF8E5E]"
        >
          <FaGithub />
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#FF8E5E]"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="flex justify-center gap-3 text-gray-200 text-lg">
        {project.technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Project = () => {
  const [showAltProjects, setShowAltProjects] = useState(false);

  const handleToggleProjects = () => setShowAltProjects(!showAltProjects);

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="text-center mb-8 px-4 sm:px-6 md:px-8">
        <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          I create jobs
          <span className="block text-[#FF8E5E]">that enchant people</span>
        </h2>
        <div className="w-full sm:w-[80%] mx-auto flex justify-center sm:justify-end mt-4">
          {/* Button with Inner Border */}
          <div className="h-10 w-10 sm:h-9 sm:w-9 border-[#FF8E5E] border rounded-full p-2 flex items-center justify-center bg-transparent">
            <motion.span
              onClick={handleToggleProjects}
              className="text-white cursor-pointer"
              animate={{
                x: [0, 3, -6, 0], // Smooth left-to-right movement
              }}
              transition={{
                duration: 1.5, // Animation duration
                repeat: Infinity, // Infinite loop
                ease: "linear",
              }}
            >
              {showAltProjects ? (
                <FaLongArrowAltLeft />
              ) : (
                <FaLongArrowAltRight />
              )}
            </motion.span>
          </div>
        </div>
      </div>

      {!showAltProjects ? (
        <motion.div
          key="projects-one"
          initial={{ x: "-30%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "30%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto overflow-hidden"
        >
          <div className="flex lg:flex-col gap-4 ">
            {projects
              .filter((_, index) => index % 2 === 0)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>

          <motion.div className="relative group col-span-1 sm:col-span-2 lg:col-span-2 rounded-lg overflow-hidden">
            <img
              src={statisda}
              alt="Statisda School Management App"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center rounded-lg transition-opacity duration-300">
              <p className="text-2xl text-center font-semibold text-[#FF8E5E]">
                <em>Statisda School Management App</em>
              </p>
              <div className="flex gap-3 text-2xl p-4 text-[#FF8E5E]">
                <FaGithub />
                <FaExternalLinkAlt />
              </div>
              <span className="flex gap-3 text-gray-200 text-2xl">
                <FaReact className="text-blue-400" />
                <TbBrandRedux className="text-purple-400" />
                <TbBrandTailwind className="text-blue-200" />
                <SiFramer className="text-orange-200" />
                <SiReactrouter className="text-orange-400" />
                <FaChartSimple className="text-blue-200" />
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-col md:flex-row gap-4">
            {projects
              .filter((_, index) => index % 2 !== 0)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="projects-two"
          initial={{ x: "30%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-30%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-screen-xl mx-auto overflow-hidden"
        >
          {projectsSecondLayout.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Project;
