import React from "react";
import { NavLink } from "react-router";
import NavBar from "../NavBar/NavBar";

const ErrorPage = () => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-x-hidden bg-slate-50 dark:bg-slate-900">
      {/* Nav */}
      <NavBar/>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-[600px] w-full flex flex-col items-center text-center">
          {/* Icon */}
          <div className="relative mb-10">
            {/* Rings */}
            <div className="absolute inset-0 scale-[1.4] opacity-10 animate-pulse">
              <div className="w-full h-full border-[2px] border-blue-600 rounded-full"></div>
            </div>
            <div className="absolute inset-0 scale-[1.2] opacity-20">
              <div className="w-full h-full border-[1.5px] border-blue-600 rounded-full"></div>
            </div>
            {/* Container */}
            <div className="relative z-10 size-40 md:size-48 bg-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-600/20">
              <div className="text-white scale-[3.5]">
                <span className="material-symbols-outlined text-6xl">directions_bus</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="layout-content-container flex flex-col flex-1">
            <h1 className="text-slate-900 dark:text-white tracking-tight text-7xl md:text-8xl font-black leading-tight pb-2">404</h1>
          </div>

          {/* Text */}
          <div className="layout-content-container flex flex-col flex-1 max-w-md">
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed pb-8 pt-2">
              Oops! The page you are looking for could not be found or has been moved.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center w-full">
            <NavLink 
              to="/" 
              className="group flex min-w-[200px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-14 px-8 bg-blue-600 text-white text-lg font-bold leading-normal tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all"
            >
              <span className="material-symbols-outlined">home</span>
              <span>Go Back Home</span>
            </NavLink>
          </div>
        </div>
      </main>

      {/* Graphics */}
      <div className="fixed top-1/4 -left-20 size-80 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-1/4 -right-20 size-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default ErrorPage;
