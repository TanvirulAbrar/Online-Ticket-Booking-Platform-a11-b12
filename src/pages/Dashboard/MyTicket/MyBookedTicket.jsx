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

  const {
    isLoading,
    data: tickets = [],
    refetch,
  } = useQuery({
    queryKey: ["userticket", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tickets`);
      const tickets = res.data;

      const filteredData = [];

      tickets.forEach((ticket) => {
        ticket.booked?.forEach((b) => {
          if (b.email === user?.email) {
            filteredData.push(ticket);
          }
        });
      });

      return filteredData;
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
      <h2>All of my : {tickets.length}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tickets.map((ticket, i) => {
          return <BookedCard key={i + "ti"} ticket={ticket}></BookedCard>;
        })}
      </div>
    </div>
  );
};

export default MyBookedTicket;
