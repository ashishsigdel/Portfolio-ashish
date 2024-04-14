import { Link } from "react-router-dom";
import { MdArrowOutward, MdOutlineTravelExplore } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";
import Marquee from "react-fast-marquee";
import { GoArrowUpRight } from "react-icons/go";

export default function HomeProjects() {
  const projects = [
    {
      title: "Ecommerce Website",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e550f.appspot.com/o/IMG_1387.PNG?alt=media&token=f2a41718-f235-45ed-8da2-04b4d0837489",
      description: "Full Stack Development",
      link: "/project/1",
    },
    {
      title: "Real Estate Website",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e550f.appspot.com/o/Screenshot_2024-04-11_11_51_09.png?alt=media&token=fa2c95bf-11d7-470e-a7ae-b5d774f65281",
      description: "Full Stack Mern Development",
      link: "/project/1",
    },
    {
      title: "Ecommerce Website",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-e550f.appspot.com/o/IMG_1387.PNG?alt=media&token=f2a41718-f235-45ed-8da2-04b4d0837489",
      description: "Full Stack Development",
      link: "/project/1",
    },
  ];

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
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-around w-full p-1 sm:p-3 my-3">
          {projects.map((project) => (
            <div className="borderout backtheme shadow-sm shadow-gray-500 p-2">
              <div className="overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt=""
                  className="w-full sm:w-72 h-72 object-cover hover:scale-105  transition duration-500"
                />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h1 className="mt-4 font-semibold line-clamp-1">
                    {project.title}
                  </h1>
                  <p className="text-gray-500 text-sm line-clamp-1">
                    {project.description}
                  </p>
                </div>
                <Link
                  to={project.link}
                  className="p-3 borderout mt-4 hover:text-blue-400 transition duration-500 cursor-pointer"
                >
                  <TiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
