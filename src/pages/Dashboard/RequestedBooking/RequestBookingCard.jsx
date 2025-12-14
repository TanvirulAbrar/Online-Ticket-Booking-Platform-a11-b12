import React, { useEffect, useState } from "react";

import { CheckCircle, CircleX } from "lucide-react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const RequestBookingCard = ({ bookedTicket, index }) => {
  const [state, setState] = useState(bookedTicket.state);
  const axiosSecure = useAxiosSecure();

  const changeState = (e, state) => {
    e.preventDefault();
    setState(state);
    axiosSecure
      .patch(`/booked-tickets/${bookedTicket._id}/state`, { state: state })
      .then((res) => {
        toast(`successful`);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`error`);
      });
  };
  return (
    <tr key={bookedTicket._id}>
      <th>{index + 1}</th>
      <td>{bookedTicket.email}</td>
      <td>{bookedTicket.title}</td>
      <td>{bookedTicket.quantity}</td>
      <td>${bookedTicket.price}</td>
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

export default RequestBookingCard;
