import React from "react";
import Logo from "../Footer/logo.png";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="">f</NavLink>
      </li>
      <li>
        <NavLink to="/send-parcel">a</NavLink>
      </li>
      <li>
        <NavLink to="/rider">b</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">c</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard/a">da</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="">About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar font-[600] bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <span className="btn btn-ghost w-fit p-0 overflow-hidden text-xl">
          <img src={Logo} className="w-20" alt="" />
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a onClick={handleLogOut} className="btn">
            Log Out
          </a>
        ) : (
          <Link className="btn" to="/login">
            Log in
          </Link>
        )}
        <Link className="btn bg-blue-500 text-white mx-4" to="/c">
          get
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
