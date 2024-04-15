import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="borderout shadow-sm shadow-gray-500 p-2 my-2 w-full sm:w-96 ">
      <div className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt=""
          className="w-full h-72 object-cover hover:scale-105  transition duration-500"
        />
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h1 className="mt-4 font-semibold line-clamp-1">{project.title}</h1>
          <p className="text-gray-500 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
        <Link
          to={`/project/${project.slug}`}
          className="p-3 borderout mt-4 hover:text-blue-400 transition duration-500 cursor-pointer"
        >
          <TiArrowRight />
        </Link>
      </div>
    </div>
  );
}
