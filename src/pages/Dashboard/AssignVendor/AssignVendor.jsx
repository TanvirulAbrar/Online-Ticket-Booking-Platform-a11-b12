import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignVendor = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const axiosSecure = useAxiosSecure();
  const vendorModalRef = useRef();

  const { data: tickets = [], refetch: ticketsRefetch } = useQuery({
    queryKey: ["tickets", "pending-"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tickets?Status=pending-");
      return res.data;
    },
  });

  const { data: vendors = [], refetch: vendorRefetch } = useQuery({
    queryKey: ["vendors", selectedTicket?.senderDistrict, "available"],
    enabled: !!selectedTicket,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/vendors?status=approved&district=${selectedTicket?.District}&workStatus=available`
      );
      return res.data;
    },
  });

  const openAssignVendorModal = (ticket) => {
    setSelectedTicket(ticket);

    vendorModalRef.current.showModal();
  };

  const handleAssign = (vendor) => {
    const vendorAssignInfo = {
      vendorId: vendor._id,
      vendorEmail: vendor.email,
      vendorName: vendor.name,
      ticketId: selectedTicket._id,
      trackingId: selectedTicket.trackingId,
    };
    axiosSecure
      .patch(`/tickets/${selectedTicket._id}`, vendorAssignInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          vendorModalRef.current.close();
          ticketsRefetch();
          vendorRefetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `assigned.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl">Assign : {tickets.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Created At</th>
              <th>Pickup District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket._id}>
                <th>{index + 1}</th>
                <td>{ticket.ticketName}</td>
                <td>{ticket.cost}</td>
                <td>{ticket.createdAt}</td>
                <td>{ticket.senderDistrict}</td>
                <td>
                  <button
                    onClick={() => openAssignVendorModal(ticket)}
                    className="btn btn-primary text-black"
                  >
                    Find
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog
        ref={vendorModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Vendor: {vendors.length}!</h3>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor, i) => (
                  <tr key={vendor._id}>
                    <th>{i + 1}</th>
                    <td>{vendor.name}</td>
                    <td>{vendor.email}</td>
                    <td>
                      <button
                        onClick={() => handleAssign(vendor)}
                        className="btn btn-primary text-black"
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignVendor;
