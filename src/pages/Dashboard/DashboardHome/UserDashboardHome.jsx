import React from "react";
import {
  UserCircle,
  TicketPlus,
  Ticket,
  Inbox,
  CircleDollarSign,
  LayoutDashboard,
} from "lucide-react";
import { NavLink, Outlet } from "react-router";

const UserDashboardHome = () => {
  const navicon = [UserCircle, Ticket, CircleDollarSign];
  const navLink = [
    "/dashboard/profile",
    "/dashboard/my-booked-ticket",
    "/dashboard/paymentHistory",
  ];
  const navtext = [" Profile", "My Booked Tickets", "Transaction History"];
  return (
    <div>
      <h1 className="text-3xl font-bold flex px-5 my-5">
        <div className="w-[5px] mr-5 bg-blue-700"></div>User Dashboard
        <div className="w-[5px] ml-5 bg-blue-700"></div>
      </h1>
      {/* <div className="">User Profile</div>
      <div className="">My Booked Tickets</div>
      <div className="">Transaction History</div> */}
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

export default UserDashboardHome;
