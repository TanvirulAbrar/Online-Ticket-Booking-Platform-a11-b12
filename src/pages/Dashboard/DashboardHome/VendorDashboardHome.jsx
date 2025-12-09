import React from "react";
import {
  UserCircle,
  TicketPlus,
  Ticket,
  Inbox,
  CircleDollarSign,
  LayoutDashboard,
} from "lucide-react";
import { NavLink } from "react-router";

const VendorDashboardHome = () => {
  const navicon = [
    UserCircle,
    TicketPlus,
    Ticket,
    Inbox,
    CircleDollarSign,
    LayoutDashboard,
  ];
  const navtext = [
    "Vendor Profile",
    "Add Ticket",
    "My Added Tickets",
    "Requested Bookings",
    "Revenue",
    "Overview",
  ];
  return (
    <div>
      <div className="">
        <h2 className="text-4xl">VendorDashboardHome </h2>
        <div className="flex flex-col">
          {navicon.map((Icon, i) => {
            return (
              <NavLink
                to={"/"}
                key={"a" + i}
                className="bg-blue-100 flex px-5 p-5"
              >
                <Icon />
                <span className="px-5 max-md:hidden">{navtext[i]}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboardHome;
