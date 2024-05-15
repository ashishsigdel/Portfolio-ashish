import { Link, useLocation } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaBlog, FaHome, FaPhone, FaSchool, FaSkiing } from "react-icons/fa";
import { FaFingerprint } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { HiBars3 } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdInsertComment } from "react-icons/md";

export default function Sidebar() {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(false);

  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname
      ? "borderactive font-semibold text-blue-300"
      : "borderout";
  };

  const handleClick = () => setClick(!click);

  const Data = {
    logo: "https://firebasestorage.googleapis.com/v0/b/portfolio-e550f.appspot.com/o/Dark%20theme.png?alt=media&token=69e05c67-927a-4851-9b00-efceac2e844b",
    name: "Ashish Sigdel",
    slogon: "MERN Developer | AI Enthusiast",
    profilePic:
      "https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-6/431629247_1496026204295411_1766973030847955168_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9KMkpBEX1aEQ7kNvgGGPZ1T&_nc_ht=scontent.fpkr1-1.fna&oh=00_AYCZCEnELN1iu5ttb3HhGHk0XDynn3_G5ggxTBpTJHVQmA&oe=6649E5C4",
  };

  return (
    <div className="flex flex-col ">
      <div className="hidden md:inline-block">
        <div className="borderout m-3 backtheme">
          <img src={Data.logo} alt="" className="h-20 invert" />
        </div>

        <div className="h-20 borderout m-3 flex gap-5 items-center justify-center align-items-center backtheme">
          <img src={Data.profilePic} alt="" className="h-14 borderout" />
          <div>
            <h1 className="font-semibold">{Data.name}</h1>
            <p className="text-xs text-gray-400">{Data.slogon}</p>
            <div className="flex gap-1 verysmall items-center">
              <IoLocationSharp className="text-blue-400" />
              <span className="text-gray-500">Nepal</span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden inline-block">
        <div className="borderout m-3 backtheme flex items-center justify-between">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-e550f.appspot.com/o/Dark%20theme.png?alt=media&token=69e05c67-927a-4851-9b00-efceac2e844b"
            alt=""
            className="h-16 invert"
          />
          <div
            className="mr-5 cursor-pointer transition-transform duration-300 ease-in-out transform"
            onClick={handleClick}
            style={{ transform: click ? "rotate(90deg)" : "none" }}
          >
            {click ? <IoClose size={28} /> : <HiBars3 size={28} />}
          </div>
        </div>
      </div>
      <div className="hidden md:inline-block mt-24">
        <ul className="m-3 flex flex-col gap-3">
          <li>
            <Link
              to="/"
              className={`flex gap-4 items-center borderout p-3 px-7 backtheme ${isActive(
                "/"
              )}`}
            >
              <span>
                <FaHome className="text-blue-400" />
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="https://blog.ashishsigdel.com.np"
              target="_blank"
              className={`flex gap-4 items-center borderout p-3 px-7 backtheme `}
            >
              <span>
                <FaBlog className="text-blue-400" />
              </span>
              <span>Blogs</span>
            </Link>
          </li>

          <li>
            <Link
              to="/skills"
              className={`flex gap-4 items-center borderout p-3 px-7 backtheme ${isActive(
                "/skills"
              )}`}
            >
              <span>
                <FaSkiing className="text-blue-400" />
              </span>
              <span>Skills</span>
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className={`flex gap-4 items-center borderout p-3 px-7 backtheme ${isActive(
                "/projects"
              )}`}
            >
              <span>
                <GrAppsRounded className="text-blue-400" />
              </span>
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className={`flex gap-4 items-center borderout p-3 px-7 backtheme ${isActive(
                "/education"
              )}`}
            >
              <span>
                <FaSchool className="text-blue-400" />
              </span>
              <span>Education</span>
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={`flex gap-4 items-center borderout p-3 px-7 backtheme ${isActive(
                "/contact"
              )}`}
            >
              <span>
                <FaPhone className="text-blue-400" />
              </span>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      {click && (
        <div className="md:hidden inline-block">
          <div className="">
            <ul className="m-3 flex flex-col gap-3">
              <li>
                <Link
                  onClick={handleClick}
                  to="/"
                  className={`flex gap-4 items-center p-3 px-7 ${isActive(
                    "/"
                  )}`}
                >
                  <span>
                    <FaHome className="text-blue-400" />
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="/skills"
                  className={`flex gap-4 items-center p-3 px-7 ${isActive(
                    "/skills"
                  )}`}
                >
                  <span>
                    <FaSkiing className="text-blue-400" />
                  </span>
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="/projects"
                  className={`flex gap-4 items-center p-3 px-7 ${isActive(
                    "/projects"
                  )}`}
                >
                  <span>
                    <GrAppsRounded className="text-blue-400" />
                  </span>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="/education"
                  className={`flex gap-4 items-center p-3 px-7 ${isActive(
                    "/education"
                  )}`}
                >
                  <span>
                    <FaSchool className="text-blue-400" />
                  </span>
                  <span>Education</span>
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleClick}
                  to="/contact"
                  className={`flex gap-4 items-center p-3 px-7 ${isActive(
                    "/contact"
                  )}`}
                >
                  <span>
                    <FaPhone className="text-blue-400" />
                  </span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="hidden md:inline-block">
        <div className="flex justify-between m-3 ">
          <div className="flex gap-4 text-blue-500 borderout px-3 py-2">
            <FaGithub size={20} />
            <FaLinkedin size={20} />
            <FaInstagram size={20} />
          </div>
          <div className="borderout px-3 py-2">
            <span>&#169; 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
