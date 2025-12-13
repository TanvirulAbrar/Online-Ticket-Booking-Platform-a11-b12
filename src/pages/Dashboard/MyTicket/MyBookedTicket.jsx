import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FiEdit } from "react-icons/fi";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";
import TicketCard from "../../allTicket/card/TicketCard";
import BookedCard from "./BookedCard";

const MyBookedTicket = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookedTickets = [] } = useQuery({
    queryKey: ["bookedTickets", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booked-tickets?email=${user.email}`);
      const data = res.data;
      console.log(data);
      return data;
    },
  });

  const handleTicketDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/tickets/${id}`).then((res) => {
          console.log(res.data);

          if (res.data.deletedCount) {
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your Ticket  has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePayment = async (ticket) => {
    const ticketInfo = {
      cost: ticket.cost,
      ticketId: ticket._id,
      senderEmail: ticket.senderEmail,
      Name: ticket.Name,
      trackingId: ticket.trackingId,
    };
    const res = await axiosSecure.post("/payment-checkout-session", ticketInfo);

    // console.log(res.data.url);
    window.location.assign(res.data.url);
  };

  return (
    <div>
      <h2>Booked Ticket : {bookedTickets.length}</h2>
      <div className="overflow-x-auto flex  w-full">
        {" "}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 min-w-max  gap-4">
          {bookedTickets.map((ticket, i) => {
            return (
              <BookedCard key={i + "ti"} bookedTicket={ticket}></BookedCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyBookedTicket;
