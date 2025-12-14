import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { CheckCircle, CircleX } from "lucide-react";
import RequestBookingCard from "./RequestBookingCard";

const RequestBooking = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookedTicket = [] } = useQuery({
    queryKey: ["bookedTicket", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/booked-tickets?createdBy=${user.email}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-5xl">RequestBooking {bookedTicket.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Ticket Title</th>
              <th>Booking Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookedTicket.map((bookedTicket, index) => (
              <RequestBookingCard
                key={bookedTicket._id}
                bookedTicket={bookedTicket}
                index={index}
              ></RequestBookingCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestBooking;
