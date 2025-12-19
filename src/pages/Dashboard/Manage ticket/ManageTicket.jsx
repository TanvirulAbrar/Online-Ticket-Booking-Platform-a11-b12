import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { CheckCircle, CircleX } from "lucide-react";
import ManageTicketCard from "./MangeTicketCard";

const ManageTicket = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: tickets = [] } = useQuery({
    queryKey: ["pendingTicket", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tickets`);
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold flex  my-5">
        <div className="w-[5px] mr-5 bg-blue-700"></div>Manage Ticket{" "}
        {tickets.length}
        <div className="w-[5px] ml-5 bg-blue-700"></div>
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Ticket Title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <ManageTicketCard
                key={ticket._id}
                ticket={ticket}
                index={index}
              ></ManageTicketCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTicket;
