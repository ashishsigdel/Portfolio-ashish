import Marquee from "react-fast-marquee";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { FaCode, FaGit, FaGitAlt } from "react-icons/fa";
import React from "react";
import { IoLogoJavascript, IoLogoCss3, IoLogoPython } from "react-icons/io";
import {
  DiFirebase,
  DiReact,
  DiNodejs,
  DiGithubBadge,
  DiVisualstudio,
  DiPhotoshop,
  DiJqueryLogo,
} from "react-icons/di";
import { SiExpress, SiFirebase, SiInsomnia, SiPostman } from "react-icons/si";
import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiCplusplus,
  SiFigma,
} from "react-icons/si";
import { FaC } from "react-icons/fa6";

export default function Skills() {
  const skillsData = {
    "Design Tools": [
      { name: "Photoshop", icon: <DiPhotoshop /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
    "Technologies/Languages": [
      { name: "CSS3", icon: <IoLogoCss3 /> },
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JQuery", icon: <DiJqueryLogo /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "NodeJs", icon: <DiNodejs /> },
      { name: "NextJs", icon: <DiNodejs /> },
      { name: "Framer Motion", icon: <FaCode /> },
      { name: "ExpressJs", icon: <SiExpress /> },
      { name: "C", icon: <FaC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "ReactJS", icon: <DiReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Python", icon: <IoLogoPython /> },
    ],
    "Development Tools & Environments": [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <DiGithubBadge /> },
      { name: "Visual Studio Code", icon: <DiVisualstudio /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Insomnia", icon: <SiInsomnia /> },
    ],
  };

  return (
    <div className="bg-gray-950 borderout p-1 sm:p-3 sm:mx-3 flex flex-col">
      {" "}
      <div className="m-1 sm:m-3">
        <div className="flex items-center gap-1 p-2 borderout backtheme">
          <div className="flex gap-1 items-center hover:text-blue-400 transition duration-500 p-2 borderout">
            <p className="text-center font-semibold">Skills</p>
            <GoArrowDownRight size={16} />
          </div>
          <Marquee className="m-2">
            <p className="text-center font-semibold verysmall text-gray-400">
              {" "}
              ⌘ Explore on a journey through a carefully curated collection of
              skills, each a testament to my expertise and dedication. ⌘ Explore
              on a journey through a carefully curated collection of skills,
              each a testament to my expertise and dedication.
            </p>
          </Marquee>
        </div>
      </div>
      <div>
        <div className="w-full">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="borderout backtheme m-3 text-center mx-auto w-full p-4"
            >
              <h2 className="text-center font-semibold text-3xl my-4 text-gray-400 w-full">
                {category}
              </h2>
              <ul className="flex flex-wrap justify-center gap-2 sm:gap-5 w-full">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="p-3 borderout flex gap-3 items-center"
                  >
                    {React.cloneElement(skill.icon, { size: 25 })} {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
