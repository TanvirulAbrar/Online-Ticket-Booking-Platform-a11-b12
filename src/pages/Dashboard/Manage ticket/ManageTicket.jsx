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
      <h2 className="text-5xl">RequestBooking {tickets.length}</h2>
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
