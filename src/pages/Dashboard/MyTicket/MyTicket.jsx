import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FiEdit } from "react-icons/fi";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyTicket = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: tickets = [], refetch } = useQuery({
    queryKey: ["my-MyTicket", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/MyTicket?email=${user.email}`);
      return res.data;
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
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Tracking Id</th>
              <th> Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket._id}>
                <th>{index + 1}</th>
                <td>{ticket.ticketName}</td>
                <td>{ticket.cost}</td>
                <td>
                  {ticket.paymentStatus === "paid" ? (
                    <span className="text-green-800">Paid</span>
                  ) : (
                    <button
                      onClick={() => handlePayment(ticket)}
                      className="btn btn-sm btn-primary text-black"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>
                  <Link to={`/track/${ticket.trackingId}`}>
                    {" "}
                    {ticket.trackingId}
                  </Link>
                </td>
                <td>{ticket.Status}</td>
                <td>
                  <button className="btn btn-square hover:bg-primary">
                    <FaMagnifyingGlass />
                  </button>
                  <button className="btn btn-square hover:bg-primary mx-2">
                    <FiEdit></FiEdit>
                  </button>
                  <button
                    onClick={() => handleTicketDelete(ticket._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTicket;
