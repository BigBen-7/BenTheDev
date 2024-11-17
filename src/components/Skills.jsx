/* eslint-disable no-unused-vars */
import React from "react";

// Skills array 
const skillsData = [
  {
    id: 1,
    title: "What Can I Do For You",
    color: "#1669B4",
    description:
      'I believe that great design should be intuitive and user-friendly for everyone, including those who don\'t consider themselves "designers". It’s my job to ensure that your audience can interact with your brand in a way that makes sense for them, whether they’re on a laptop or a phone.',
  },
  {
    id: 2,
    title: "Applications I Am Fluent In",
    color: "#67F5B1",
    description:
      "Crafting intuitive user interfaces, building responsive and dynamic websites, and developing engaging web applications. Skilled in turning complex requirements into interactive experiences with HTML, CSS, JavaScript, and frameworks like React. Bringing brands to life through visual elements and delivering user-focused digital solutions that drive engagement..",
  },
  {
    id: 3,
    title: "What Can You Expect",
    color: "#FD97CE",
    description:
      "You can expect me to deliver high-quality work on time and within budget. You can also expect me to be honest with you about your project’s needs, so that we can come up with an approach that works best for both of us.",
  },
];

function Skills() {
  return (
    <div className="bg-[#19191D] w-full">
      <div className="p-12">
        <div className="SKILLS HEADING">
          <h2 className="text-white font-extrabold text-4xl">
            My <span className="text-[#FF8E5E]">skills.</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center my-6  md:gap-4 px-3-3">
          {skillsData.map(({ id, title, color, description }) => (
            <div key={id} className="flex flex-col-reverse md:flex-row gap-3 items-start max-w-sm">
              {/* Conditionally colored line */}
              <div
                className="w-20 h-[2px] md:w-4 md:h-48 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              {/* Text content */}
              <div>
                <span className="font-bold text-gray-300 block mb-2">
                  {title}{" "}
                  <span className="text-3xl" style={{ color }}>
                    {"?"}
                  </span>
                </span>
                <em className="text-sm text-gray-400">{description}</em>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
