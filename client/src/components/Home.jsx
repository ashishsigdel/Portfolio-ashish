import { GoDotFill } from "react-icons/go";
import { FaBloggerB, FaPhone } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import {
  IoCamera,
  IoDesktop,
  IoMusicalNote,
  IoVideocam,
} from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdArrowOutward, MdOutlineTravelExplore } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import HomeProjects from "./HomeProjects";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";

export default function Home() {
  const bannerPhoto =
    "https://firebasestorage.googleapis.com/v0/b/portfolio-e550f.appspot.com/o/me.PNG?alt=media&token=36297b88-ed1a-4105-97f6-5c8e4dc91785";

  const loves = [
    { id: 1, icon: <IoDesktop />, text: "Coding" },
    { id: 2, icon: <IoMusicalNote />, text: "Listening to Music" },
    { id: 3, icon: <MdOutlineTravelExplore />, text: "Exploring" },
    { id: 4, icon: <RiMoneyDollarCircleFill />, text: "Money" },
    { id: 5, icon: <IoCamera />, text: "Photography" },
    { id: 6, icon: <IoVideocam />, text: "Videography" },
    { id: 7, icon: <MdLocalMovies />, text: "Watching Movies" },
  ];

  return (
    <div className="bg-gray-950 borderout p-1 sm:p-3 sm:mx-3 flex flex-col gap-3">
      <div className="flex sm:flex-row flex-col-reverse justify-between gap-3 w-full sm:items-center">
        <div className="sm:w-[29%] m-3 overflow-hidden">
          <img
            src={bannerPhoto}
            alt="Ashish"
            className="w-full md:w-80 h-96 object-cover borderout hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-3 flex flex-col gap-3 sm:w-[70%] w-full">
          <div className="p-3 borderout flex sm:flex-row flex-col gap-3 w-full items-center">
            <Link className="flex flex-col gap-2 items-center mx-auto md:w-1/3 w-full p-2 borderout backtheme text-center  cursor-pointer text-gray-200 hover:text-blue-500 duration-300">
              <div className="flex items-center gap-2 ">
                <GoDotFill size={16} className="text-green-500" />
                <span className="text-md line-clamp-1">
                  Avaiable for Freelance
                </span>
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
                <span className="text-md">Let&apos;s connect</span>
              </div>
            </Link>
          </div>
          <div className="px-3 py-5 borderout my-3 text-center backtheme">
            <div className="flex gap-2 justify-center items-center text-gray-400 text-sm">
              <h1>Hey 👋,</h1>
              <span>I&apos;m</span>
            </div>
            <h1 className="text-4xl font-semibold text-blue-400 mb-3">
              Ashish Sigdel
            </h1>
            <p className="text-gray-400 text-md sm:text-xl">
              a <span className="text-blue-300">Tech Enthusiast</span> and Full
              Stack Developer specializing in the <br />{" "}
              <span className="text-blue-300">MERN</span> and{" "}
              <span className="text-blue-300">Next.js</span> stacks. <br />{" "}
              I&apos;m dedicated to crafting robust and scalable web solutions.
            </p>
          </div>
          <div className="flex gap-3 ">
            <div className="p-3 borderout font-semibold w-25 whitespace-nowrap bg-slate-900 flex gap-2 items-center h-20">
              <h1>I Loves</h1>
              <GiLoveHowl size={20} />
            </div>
            <div className=" sm:w-[38rem]">
              <div>
                <div className="flex flex-wrap gap-3">
                  {loves.map((node) => (
                    <div className="flex gap-2 mr-3 items-center p-1 px-2 borderout w-fit backtheme2">
                      {node.icon}
                      <p className="text-sm">{node.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 borderout m-2 sm:m-3 backtheme2">
        <div className="m-1 sm:m-3">
          <div className="w-full p-2 borderout backtheme">
            <p className="text-center font-semibold">More About Me</p>
          </div>
          <div className="w-full sm:p-2 my-3">
            <p class="p-2 sm:text-xl text-justify borderout">
              I&apos;m Ashish Sigdel, a technology enthusiast and Full Stack
              Developer passionate about crafting innovative web solutions.
              Alongside my web development work, I&apos;m also engaged on
              Machine Learning and Data Science, exploring the fascinating world
              of predictive analytics. I am a Computer Engineering student at
              IOE Western Regional Campus, located in Pokhara, Nepal. <br />{" "}
              <br /> With expertise in the MERN and Next.js stacks, I thrive on
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
      <Skills />
      <HomeProjects />
      <Education />
      <Contact />
    </div>
  );
}
