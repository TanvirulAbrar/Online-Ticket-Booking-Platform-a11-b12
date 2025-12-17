import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { CheckCircle, CircleX } from "lucide-react";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
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
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <AdvertiseCard
                key={ticket._id}
                ticket={ticket}
                index={index}
              ></AdvertiseCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Advertise;
