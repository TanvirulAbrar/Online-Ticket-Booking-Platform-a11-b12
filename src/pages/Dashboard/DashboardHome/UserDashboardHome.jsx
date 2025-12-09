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

const UserDashboardHome = () => {
  const navicon = [UserCircle, Ticket, CircleDollarSign];
  const navtext = [" Profile", "My Booked Tickets", "Transaction History"];
  return (
    <div>
      <h2 className="text-4xl">User Dashing</h2>
      {/* <div className="">User Profile</div>
      <div className="">My Booked Tickets</div>
      <div className="">Transaction History</div> */}
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
  );
};

export default UserDashboardHome;
