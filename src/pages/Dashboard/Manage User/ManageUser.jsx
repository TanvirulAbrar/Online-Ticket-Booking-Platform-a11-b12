import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { CheckCircle, CircleX } from "lucide-react";
import ManageUserCard from "./MangeUserCard";

const ManageUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-5xl">RequestBooking {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Add Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <ManageUserCard
                key={user._id}
                user={user}
                index={index}
              ></ManageUserCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
