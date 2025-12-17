import React, { useEffect, useState } from "react";

import { CheckCircle, CircleX } from "lucide-react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageTicketCard = ({ ticket, index }) => {
  const [state, setState] = useState(ticket.state);
  const axiosSecure = useAxiosSecure();

  const changeState = (e, state) => {
    e.preventDefault();
    // setState(state);
    // axiosSecure
    //   .patch(`/tickets/${ticket._id}/state`, { state: state })
    //   .then((res) => {
    //     toast(`successful`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.error(`error`);
    //   });
  };
  return (
    <tr key={ticket._id}>
      <th>{index + 1}</th>
      <td>{ticket.email}</td>
      <td>{ticket.title}</td>
      <td>{ticket.quantity}</td>
      <td>${ticket.price}</td>
      <td>{state}</td>
      <td className="flex gap-3">
        <div
          onClick={(e) => {
            changeState(e, "accepted");
          }}
          className="btn btn-square"
        >
          <CheckCircle></CheckCircle>
        </div>
        <div
          onClick={(e) => {
            changeState(e, "rejected");
          }}
          className="btn btn-square"
        >
          <CircleX />
        </div>
      </td>
    </tr>
  );
};

export default ManageTicketCard;
