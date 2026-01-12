import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FiEdit } from "react-icons/fi";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";
import TicketCard from "../../allTicket/card/TicketCard";
import BookedCard from "./BookedCard";
import { TicketLoading } from "../../Shared/Loading/Loading";

const MyBookedTicket = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookedTickets = [], refetch, isLoading } = useQuery({
    queryKey: ["bookedTickets", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booked-tickets?email=${user.email}`);
      const data = res.data;
      //console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <TicketLoading />;
  }

  const handleTicketDelete = (id) => {
    //console.log(id);

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
          //console.log(res.data);

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

    // //console.log(res.data.url);
    window.location.assign(res.data.url);
  };

  return (
    <div className="p-6">
      {/* Modern Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Booked Tickets
          </h1>
          <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            {bookedTickets.length} Bookings
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 ml-8">
          View and manage your ticket bookings and payment status
        </p>
      </div>

      <div className="overflow-x-auto flex w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
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
