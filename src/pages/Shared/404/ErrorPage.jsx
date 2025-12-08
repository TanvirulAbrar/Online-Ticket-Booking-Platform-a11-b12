import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import logo from "./404.png";
import { NavLink } from "react-router";
const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mx-auto w-fit ">
        <NavLink to="/" className="mx-auto w-fit ">
          <img src={logo} className="h-svh" alt="" />
        </NavLink>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
