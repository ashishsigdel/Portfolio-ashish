import Marquee from "react-fast-marquee";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { FaSchool } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa6";

export default function Education() {
  const education = [
    {
      name: "Bachelor of Computer Engineering",
      place: "Western Regional Campus",
      duration: "2022 - Present",
      Keywords: ["Bachelor's Degree", "BCT"],
      Key: "Graduation",
    },
    {
      name: "+2 Eduction",
      place: "JanaPriya Multiple Campus",
      duration: "2018 - 2021",
      Keywords: ["+2 Science"],
      Key: "+2 Science",
    },
  ];

  return (
    <div className="bg-gray-950 borderout p-1 sm:p-3 sm:mx-3 flex flex-col">
      <div className="m-1 sm:m-3">
        <div className="flex items-center gap-1 p-2 borderout backtheme">
          <div className="flex gap-1 items-center hover:text-blue-400 transition duration-500 p-2 borderout">
            <p className="text-center font-semibold">Education</p>
            <GoArrowDownRight size={16} />
          </div>
          <Marquee className="m-2">
            <p className="text-center font-semibold verysmall text-gray-400">
              {" "}
              Explore my academic journey and qualifications in the field of
              Computer Science. ⌘ Explore my academic journey and qualifications
              in the field of Computer Science.⌘ Explore my academic journey and
              qualifications in the field of Computer Science. ⌘
            </p>
          </Marquee>
        </div>
      </div>
      <div className="m-1 sm:m-3 flex sm:flex-row flex-col gap-1 sm:gap-4 flex-wrap items-center justify-items-center">
        {education.map((item, index) => (
          <div
            key={index}
            className="flex-1 w-full borderout backtheme m-3 p-4 mx-auto"
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-3 p-3 borderout w-fit">
                <SlCalender />
                {item.duration}
              </div>
              <div className="flex items-center gap-3 p-3 borderout w-fit">
                <FaGraduationCap />
                <p>{item.Key}</p>
              </div>
            </div>
            <h2 className="text-center font-semibold text-3xl my-10 text-gray-400 ">
              {item.name}
            </h2>
            <div className="flex justify-center items-center gap-3 p-3 borderout w-full">
              <FaSchool />
              {item.place}
            </div>

            <p className="mt-10 flex gap-3">
              {item.Keywords.map((keyword, keywordIndex) => (
                <span className="p-2 borderout" key={keywordIndex}>
                  {keyword}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
