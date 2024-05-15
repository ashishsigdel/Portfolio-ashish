import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import Projects from "./Projects";
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import SignUp from "./SignUp";
import Skills from "./Skills";
import Education from "./Education";
import ProjectDesc from "./ProjectDesc";

export default function Portfolio() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="md:flex md:flex-row md:gap-3">
      <div className="md:w-[18rem] borderout bg-slate-950 m-3 md:fixed h-full flex-col overflow-auto">
        <Sidebar />
      </div>
      <div className="m-3 flex-grow md:ml-[19rem]">
        {path === "/" && <Home />}
        {path === "/projects" && <Projects />}
        {path === "/contact" && <Contact />}
        {path === "/signup" && <SignUp />}
        {path === "/skills" && <Skills />}
        {path === "/education" && <Education />}
        <div className="mt-10 mx-3">
          <Footer />
        </div>
      </div>
    </div>
  );
}
