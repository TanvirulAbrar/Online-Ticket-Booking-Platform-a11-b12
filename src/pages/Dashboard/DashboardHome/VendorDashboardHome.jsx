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
import { useState } from "react";

const VendorDashboardHome = () => {
  // const [title, settitle] = useState("");
  const navicon = [
    UserCircle,
    TicketPlus,
    Ticket,
    Inbox,
    CircleDollarSign,
    // LayoutDashboard,
  ];
  const navtext = [
    "Vendor Profile",
    "Add Ticket",
    "My Added Tickets",
    "Requested Bookings",
    "Revenue",
    // "Overview",
  ];
  const navLink = [
    "/dashboard/profile",
    "/dashboard/add-ticket",
    "/dashboard/my-added-tickets",
    "/dashboard/requested-bookings",
    "/dashboard/revenue",
    "/dashboard/overview",
  ];
  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold flex px-5 my-5">
          <div className="w-[5px] mr-5 bg-blue-700"></div>Vendor Dashboard
          {/* <div className="w-[5px] ml-5 bg-blue-700"></div> */}
          <div className="w-full pl-5 content-center  bg-blue-400"></div>
        </h1>
        {/* <div className="">User Profile</div>
             <div className="">My Booked Tickets</div>
             <div className="">Transaction History</div> */}
        <div className="flex gap-5 ">
          <div className="flex flex-col min-h-svh bg-blue-200  min-md:w-[350px] ">
            {navicon.map((Icon, i) => {
              return (
                <NavLink
                  to={navLink[i]}
                  // onClick={() => settitle(navtext[i])}
                  key={"a" + i}
                  className=" flex px-5 p-5"
                >
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
    </div>
  );
};

export default VendorDashboardHome;
