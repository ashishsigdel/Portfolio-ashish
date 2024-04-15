import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import Marquee from "react-fast-marquee";
import { GoArrowDownRight } from "react-icons/go";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(6);
  const [startIndex, setStartIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, [limit, startIndex]);
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/project/get?limit=${limit}&startIndex=${startIndex}`
      );
      const data = await res.json();

      if (res.ok) {
        if (data.length === 0) {
          setHasMore(false);
        }
        setProjects((prevProjects) => [...prevProjects, ...data]);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Can't get projects...");
    } finally {
      setLoading(false);
    }
  };

  const handleSeeMore = () => {
    setStartIndex(startIndex + limit);
  };

  return (
    <div className="bg-gray-950 borderout p-1 sm:p-3 sm:mx-3 flex flex-col">
      <div className="m-2 sm:m-3 flex flex-col">
        <div className="flex items-center gap-1 p-2 borderout backtheme">
          <Link
            to="/projects"
            className="flex gap-1 items-center hover:text-blue-400 transition duration-500 p-2 borderout"
          >
            <p className="text-center font-semibold">Projects</p>
            <GoArrowDownRight size={16} />
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
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {hasMore ? (
              <button
                onClick={handleSeeMore}
                className="p-3 borderout backtheme self-end"
              >
                See more
              </button>
            ) : (
              ""
            )}
          </>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
