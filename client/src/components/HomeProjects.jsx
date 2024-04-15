import { Link } from "react-router-dom";
import { MdArrowOutward, MdOutlineTravelExplore } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";
import Marquee from "react-fast-marquee";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function HomeProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/project/get?limit=3");
      const data = await res.json();

      if (res.ok) {
        setProjects((prevProjects) => [...prevProjects, ...data]);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Can't get projects...");
    }
  };

  return (
    <div className="p-1 sm:p-2 borderout m-2 sm:m-3 backtheme2">
      <div className="m-1 sm:m-3">
        <div className="flex items-center gap-1 p-2 borderout backtheme">
          <Link
            to="/projects"
            className="flex gap-1 items-center hover:text-blue-400 transition duration-500 p-2 borderout"
          >
            <p className="text-center font-semibold">Projects</p>
            <GoArrowUpRight size={16} />
          </Link>
          <Marquee className="m-2">
            <p className="text-center font-semibold verysmall text-gray-400">
              {" "}
              Dive into a rich tapestry of my projects, each a testament to my
              passion and expertise in web development. ⌘ Dive into a rich
              tapestry of my projects, each a testament to my passion and
              expertise in web development. ⌘
            </p>
          </Marquee>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
