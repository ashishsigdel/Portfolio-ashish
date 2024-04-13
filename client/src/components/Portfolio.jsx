import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import Projects from "./Projects";
import Home from "./Home";
import Footer from "./Footer";

export default function Portfolio() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-col m-2 sm:m-3">
      <div className="md:flex md:flex-row md:gap-3">
        <div className="md:w-[18rem] borderout bg-slate-950 mt-3 mb-3 md:fixed">
          <Sidebar />
        </div>
        <div className=" my-3 flex-grow md:ml-[19rem]">
          {path === "/" && <Home />}
          {path === "/projects" && <Projects />}
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
