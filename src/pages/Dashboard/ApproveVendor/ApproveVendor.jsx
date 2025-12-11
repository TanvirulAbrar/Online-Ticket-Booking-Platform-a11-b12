import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEye, FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const ApproveVendor = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: vendors = [] } = useQuery({
    queryKey: ["vendors", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/vendors");
      return res.data;
    },
  });

  const updateVendorStatus = (vendor, status) => {
    const updateInfo = { status: status, email: vendor.email };
    axiosSecure.patch(`/vendors/${vendor._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `vendor status is set to ${status}.`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleApproval = (vendor) => {
    updateVendorStatus(vendor, "approved");
  };

  const handleRejection = (vendor) => {
    updateVendorStatus(vendor, "rejected");
  };

  return (
    <div>
      <h2 className="text-5xl">vendors Pending Approval: {vendors.length} </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Ticket title</th>
              <th>Booking Quantity</th>
              <th>Total price </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{vendor.name}</td>
                <td>{vendor.email}</td>
                <td>{vendor.district}</td>
                <td>
                  <p
                    className={`${
                      vendor.status === "approved"
                        ? "text-green-800"
                        : "text-red-500"
                    }`}
                  >
                    {vendor.status}
                  </p>
                </td>
                <td>{vendor.workStatus}</td>
                <td>
                  <button className="btn">
                    <FaEye></FaEye>
                  </button>
                  <button
                    onClick={() => handleApproval(vendor)}
                    className="btn"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejection(vendor)}
                    className="btn"
                  >
                    <IoPersonRemoveSharp />
                  </button>
                  <button className="btn">
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

export default ApproveVendor;
