import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import LoginForm from "../pages/Auth/Login/LoginForm";
import Login from "../pages/Auth/Login/Login";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
