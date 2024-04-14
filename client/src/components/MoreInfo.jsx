import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { RiContactsBookFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function MoreInfo() {
  const socialMediaIcons = [
    { icon: FaGithub, link: "https://github.com/ashishsigdel" },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/ashish-sigdel-39106a268/",
    },
    { icon: FaInstagram, link: "https://instagram.com/aasissigdel" },
    { icon: FaFacebook, link: "https://www.facebook.com/ashish.sgdl.9/" },
    { icon: FaTwitter, link: "https://twitter.com/_ashishsigdel_" },
    { icon: FaYoutube, link: "https://youtube.com" },
    { icon: FaTwitch, link: "https://twitch.tv" },
  ];

  return (
    <div className="gap-1 my-3 items-center w-full transition duration-500 p-2 borderout backtheme">
      <p className="text-center font-semibold backtheme p-2 borderout w-fit">
        MoreInfo
      </p>
      <div className="my-3 backtheme flex flex-col gap-3">
        <div className="flex">
          <div className="backtheme2 borderout w-full flex gap-5 items-center px-4 ">
            <FaLocationDot />
            <div className="my-5 borderout p-3 w-full">
              <h1 className="font-semibold">Address</h1>
              <p className="text-sm text-gray-500">
                Arjunchaupari-5 Syangja,
                <br /> Nepal
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="backtheme2 borderout w-full flex gap-5 items-center px-4 ">
            <RiContactsBookFill />
            <div className="my-5 borderout p-3 w-full">
              <h1 className="font-semibold">Contact</h1>
              <p className="text-sm text-gray-500">
                Email: a.asis.sigdel01@gmail.com
              </p>
              <p className="text-sm text-gray-500">Phone: +977 9863525170</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around gap-3 borderout p-3">
        {socialMediaIcons.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <item.icon size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
}
