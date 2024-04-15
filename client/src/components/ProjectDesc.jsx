import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectDesc() {
  const [project, setProject] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    const res = await fetch(`/api/project/get-project/${slug}`);
    const data = await res.json();
    if (res.ok) {
      setProject(data);
    } else {
      console.log(data.message);
    }
  };

  return (
    <div className="md:flex md:flex-row md:gap-3">
      <div className="md:w-[18rem] borderout bg-slate-950 m-3 md:fixed md:mb-3">
        <Sidebar />
      </div>
      <div className="m-3 flex-grow md:ml-[19rem]">
        <div className="p-1 sm:p-2 borderout m-2 sm:m-3 backtheme2">
          <div className="m-1 sm:m-3">
            <div className="flex gap-1 items-center hover:text-blue-400 transition duration-500 p-3 line-clamp-1 borderout w-full backtheme">
              <p className="text-center font-semibold">{project.title}</p>
            </div>
            <div className="w-full p-3 sm:p-5 my-3 borderout backtheme">
              <p className="text-gray-500 text-sm">{project.category}</p>
              <h2 className="mb-2 font-semibold text-3xl text-gray-300 ">
                {project.title}
              </h2>
              <p className="mt-5 text-gray-400">{project.description}</p>
            </div>
          </div>
        </div>
        <div className="p-1 sm:p-2 borderout my-5 m-3 backtheme2 ">
          <div className="flex justify-evenly gap-4 p-2">
            <Link
              to={project.link}
              target="_blank"
              className="p-3 w-full borderout backtheme flex gap-2 items-center justify-center"
            >
              Demo website
              <GoArrowUpRight />
            </Link>
            <Link
              to={project.github}
              target="_blank"
              className="p-3 w-full borderout backtheme flex gap-2 items-center justify-center"
            >
              Source Code
              <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="p-1 sm:p-2 borderout m-2 sm:m-3 backtheme2 ">
          <div className="product-image">
            <img
              src={project.imageUrl}
              alt=""
              className="h-[50vh] sm:h-[70vh] w-full object-cover hover:scale-105 overflow-hidden transition duration-500"
            />
          </div>
        </div>

        <div className="p-1 sm:p-2 borderout my-5 m-3 backtheme2 ">
          <div className="flex justify-evenly gap-4 p-2">
            <Link
              to={project.blogUrl}
              target="_blank"
              className="p-3 w-full borderout backtheme flex gap-2 items-center justify-center"
            >
              See full Blog
              <GoArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="mt-10 mx-3">
          <Footer />
        </div>
      </div>
    </div>
  );
}
