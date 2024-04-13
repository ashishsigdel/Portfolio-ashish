import { GoDotFill } from "react-icons/go";
import { FaBloggerB, FaPhone } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import { TiArrowRight } from "react-icons/ti";
import {
  IoCamera,
  IoDesktop,
  IoMusicalNote,
  IoVideocam,
} from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdArrowOutward, MdOutlineTravelExplore } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function Home() {
  const loves = [
    { id: 1, icon: <IoDesktop />, text: "Coding" },
    { id: 2, icon: <IoMusicalNote />, text: "Listening to Music" },
    { id: 3, icon: <MdOutlineTravelExplore />, text: "Exploring" },
    { id: 4, icon: <RiMoneyDollarCircleFill />, text: "Money" },
    { id: 5, icon: <IoCamera />, text: "Photography" },
    { id: 6, icon: <IoVideocam />, text: "Videography" },
    { id: 7, icon: <MdLocalMovies />, text: "Watching Movies" },
  ];

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
    <div className="bg-gray-950 borderout p-1 sm:p-3">
      <div className="flex sm:flex-row flex-col-reverse justify-between gap-3 w-full sm:items-center">
        <div className="sm:w-[29%] m-3">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-e550f.appspot.com/o/me.PNG?alt=media&token=36297b88-ed1a-4105-97f6-5c8e4dc91785"
            alt=""
            className="w-full md:w-80 h-96 object-cover borderout"
          />
        </div>
        <div className="p-3 flex flex-col gap-3 sm:w-[70%] w-full">
          <div className="p-3 borderout flex sm:flex-row flex-col gap-3 w-full items-center">
            <Link className="flex flex-col gap-2 items-center mx-auto md:w-1/3 w-full p-2 borderout backtheme text-center  cursor-pointer text-gray-200 hover:text-blue-500 duration-300">
              <div className="flex items-center gap-2 ">
                <GoDotFill size={16} className="text-green-500" />
                <span className="text-md ">Avaiable for Freelance</span>
              </div>
            </Link>
            <Link
              to="https://blog.ashishsigdel.com.np"
              target="_blank"
              className="flex flex-col gap-2 items-center mx-auto md:w-1/3 w-full p-2 borderout h-fit backtheme text-center hover:text-blue-500 duration-500"
            >
              <div className="flex items-center gap-2">
                <FaBloggerB size={16} className="text-green-500" />
                <span className="text-md">See Blogs</span>
              </div>
            </Link>
            <Link
              to="/contact"
              className="flex flex-col gap-2 items-center mx-auto md:w-1/3 w-full p-2 borderout h-fit backtheme text-center hover:text-blue-500 transition duration-500"
            >
              <div className="flex items-center gap-2 ">
                <FaPhone size={16} className="text-green-500" />
                <span className="text-md">Contact</span>
              </div>
            </Link>
          </div>
          <div className="px-3 py-5 borderout my-3 text-center backtheme">
            <div className="flex gap-2 justify-center items-center text-gray-400 text-sm">
              <h1>Hey 👋,</h1>
              <span>I'm</span>
            </div>
            <h1 className="text-4xl font-semibold text-blue-400 mb-3">
              Ashish Sigdel
            </h1>
            <p className="text-gray-400 text-md sm:text-xl">
              a <span className="text-blue-300">Tech Enthusiast</span> and Full
              Stack Developer specializing in the <br />{" "}
              <span className="text-blue-300">MERN</span> and{" "}
              <span className="text-blue-300">Next.js</span> stacks. <br /> I'm
              dedicated to crafting robust and scalable web solutions.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="p-3 borderout font-semibold w-25 whitespace-nowrap bg-slate-900 flex gap-2 items-center">
              <h1>I Loves</h1>
              <GiLoveHowl size={20} />
            </div>
            <Marquee className="borderout sm:w-[38rem]">
              <div>
                <div className="flex ">
                  {loves.map((node) => (
                    <div className="flex gap-2 mr-3 items-center p-1 px-2 borderout w-fit backtheme2">
                      {node.icon}
                      <p className="text-sm">{node.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
      <div className="p-2 borderout m-3 backtheme2">
        <div className="m-3">
          <div className="w-full p-2 borderout backtheme">
            <p className="text-center font-semibold">More About Me</p>
          </div>
          <div className="w-full p-3 borderout backtheme my-3">
            <p class="p-2 sm:text-xl text-justify">
              I'm Ashish Sigdel, a technology enthusiast and Full Stack
              Developer passionate about crafting innovative web solutions.
              Alongside my web development work, I'm also engaged on Machine
              Learning and Data Science, exploring the fascinating world of
              predictive analytics. I am a Computer Engineering student at IOE
              Western Regional Campus, located in Pokhara, Nepal. <br /> <br />{" "}
              With expertise in the MERN and Next.js stacks, I thrive on
              creating seamless user experiences and robust backend
              architectures. Beyond coding, I love staying up-to-date with tech
              trends and enjoying the outdoors.
              <br />
              <br />
              Excited to connect and collaborate on exciting projects. Let's
              build something amazing together!
            </p>
          </div>
        </div>
      </div>
      <div className="p-1 sm:p-2 borderout m-3 backtheme2">
        <div className="m-3">
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
          <div className="flex flex-col sm:flex-row gap-3 justify-around w-full p-3 backtheme my-3">
            {projects.map((project) => (
              <div className="borderout shadow-sm shadow-gray-500 p-">
                <div className="overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt=""
                    className="w-72 h-72 object-cover hover:scale-105  transition duration-500"
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
    </div>
  );
}
