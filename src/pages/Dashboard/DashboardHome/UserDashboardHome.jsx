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
    "/dashboard/paymentHistory",
    "/dashboard/paymentHistory",
  ];
  const navtext = [" Profile", "My Booked Tickets", "Transaction History"];
  return (
    <div>
      <h2 className="text-4xl">User</h2>
      {/* <div className="">User Profile</div>
      <div className="">My Booked Tickets</div>
      <div className="">Transaction History</div> */}
      <div className="flex gap-5">
        <div className="flex flex-col w-fit">
          {navicon.map((Icon, i) => {
            return (
              <NavLink
                to={navLink[i]}
                key={"a" + i}
                className="bg-blue-100 flex px-5 p-5"
              >
                <Icon />
                <span className="px-5 max-md:hidden">{navtext[i]}</span>
              </NavLink>
            );
          })}
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UserDashboardHome;
