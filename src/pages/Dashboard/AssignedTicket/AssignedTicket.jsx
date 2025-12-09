import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedTicket = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: tickets = [], refetch } = useQuery({
    queryKey: ["tickets", user.email, "user_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/tickets/user?userEmail=${user.email}&ticketStatas=user_assigned`
      );

      return res.data;
    },
  });

  const handleStatusUpdate = (ticket, status) => {
    const statusInfo = {
      Status: status,
      vendorId: ticket.vendorId,
      trackingId: ticket.trackingId,
    };
    ticket;

    let message = `ticket Status is updated with ${status
      .split("_")
      .join(" ")}`;

    axiosSecure
      .patch(`/tickets/${ticket._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl">tickets Pending Pickup: {tickets.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Confirm</th>
              <th>Other Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, i) => (
              <tr key={ticket._id}>
                <th>{i + 1}</th>
                <td>{ticket.ticketName}</td>
                <td>
                  {ticket.Status === "driver_assigned" ? (
                    <>
                      <button
                        onClick={() =>
                          handleStatusUpdate(ticket, "vendor_arriving")
                        }
                        className="btn btn-primary text-black"
                      >
                        Accept
                      </button>
                      <button className="btn btn-warning text-black ms-2">
                        Reject
                      </button>
                    </>
                  ) : (
                    <span>Accepted</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleStatusUpdate(ticket, "ticket_picked_up")
                    }
                    className="btn btn-primary text-black"
                  >
                    Mark as Picked Up
                  </button>
                  <button
                    onClick={() =>
                      handleStatusUpdate(ticket, "ticket_delivered")
                    }
                    className="btn btn-primary text-black mx-2"
                  >
                    Mark as Delivered
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

export default AssignedTicket;
