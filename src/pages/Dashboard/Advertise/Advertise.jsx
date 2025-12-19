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
      const res = await axiosSecure.get(`/tickets?state=approved`);
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold flex  my-5">
        <div className="w-[5px] mr-5 bg-blue-700"></div>Advertise{" "}
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
