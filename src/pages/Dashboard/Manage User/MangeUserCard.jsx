import React, { useEffect, useState } from "react";

import {
  Ban,
  CheckCircle,
  CircleX,
  FileUser,
  ShieldUser,
  UserCheck,
} from "lucide-react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUserCard = ({ user, index }) => {
  const [role, setrole] = useState(user.role);
  const axiosSecure = useAxiosSecure();

  const changeState = (e, state) => {
    e.preventDefault();
    const newUser = {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: state,
      createdAt: user.createdAt,
    };
    axiosSecure
      .patch(`/users/${user._id}/role`, newUser)
      .then((res) => {
        toast(`successful`);
        setrole(state);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`error`);
      });
  };
  return (
    <tr key={user._id}>
      <th>{index + 1}</th>
      <td>{user.displayName}</td>
      <td>{user.email}</td>
      <td>{role}</td>
      <td className="flex gap-3">
        <div
          onClick={(e) => {
            changeState(e, "admin");
          }}
          className="btn btn-square"
        >
          <ShieldUser />
        </div>
        <div
          onClick={(e) => {
            changeState(e, "user");
          }}
          className="btn btn-square"
        >
          <UserCheck />
        </div>
        <div
          onClick={(e) => {
            changeState(e, "vendor");
          }}
          className="btn btn-square"
        >
          <FileUser />
        </div>
        <div
          onClick={(e) => {
            changeState(e, "fraud");
          }}
          className="btn btn-square"
        >
          <Ban />
        </div>
      </td>
    </tr>
  );
};

export default ManageUserCard;
