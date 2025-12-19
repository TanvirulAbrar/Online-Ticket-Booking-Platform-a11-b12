import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { ShieldUser, Tickets, Users, Megaphone, Home } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";

const AdminDashboardHome = () => {
  const navigate = useNavigate();
  const navicon = [ShieldUser, Tickets, Users, Megaphone];
  const navtext = [
    "Profile",
    "Manage Ticket",
    "Manage Users",
    "Advertise Tickets",
  ];
  const navLink = [
    "/dashboard",
    "/dashboard/manage-ticket",
    "/dashboard/manage-user",
    "/dashboard/advertise",
  ];
  const axiosSecure = useAxiosSecure();
  const { data: ticketStats = [] } = useQuery({
    queryKey: ["status-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tickets");
      return res.data;
    },
  });

  const getPieChartData = (data) => {
    return data.map((item) => {
      return { name: item.status, value: item.count };
    });
  };

  return (
    <div>
      {/* <ToastContainer></ToastContainer> */}
      <h1 className="text-3xl font-bold flex px-5 my-5">
        <div className="w-[5px] mr-5 bg-blue-700"></div>Admin Dashboard
        <div className="w-full text-end  content-center bg-blue-400">
          {/* <div
            onClick={() => {
              navigate("/");
            }}
            className="btn mr-5"
          >
            {" "}
            <Home className=" ml-auto"></Home>
          </div> */}
          <button
            type="button"
            className="group flex ml-auto mr-5 flex-wrap  items-center gap-2 p-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:shadow-lg hover:scale-[1.03] transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
            onClick={() => {
              navigate("/");
            }}
          >
            <span className="p-2 rounded-full bg-white shadow-sm">
              <Home className="w-6 h-6" />
            </span>
            {/* <span className="text-sm max-md:hidden text-gray-700">{"Home"}</span> */}
          </button>
        </div>
      </h1>
      <div className="flex gap-5 ">
        <div className="flex flex-col min-h-svh bg-blue-200  min-md:w-[350px] ">
          {navicon.map((Icon, i) => {
            return (
              <NavLink to={navLink[i]} key={"a" + i} className=" flex px-5 p-5">
                <Icon />
                <span className="px-5 max-md:hidden">{navtext[i]}</span>
              </NavLink>
            );
          })}
        </div>
        <div
          className="w-full overflow-scroll
        "
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
