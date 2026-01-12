import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import LoginForm from "../pages/Auth/Login/LoginForm";
import Login from "../pages/Auth/Login/Login";
import Loading from "../pages/Shared/Loading/Loading";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        <NavBar></NavBar>
        {/* Spacer to offset fixed navbar height */}
        <div className="h-16" aria-hidden="true" />
        <Outlet></Outlet>
        <ToastContainer />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
