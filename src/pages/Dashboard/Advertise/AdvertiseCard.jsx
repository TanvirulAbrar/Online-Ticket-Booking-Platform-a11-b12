import React, { useEffect, useState } from "react";

import { CheckCircle, CircleX } from "lucide-react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdvertiseCard = ({ ticket, index }) => {
  const [checked, setChecked] = useState(
    ticket?.advertise === "added" ? true : false
  );
  const [state, setState] = useState(ticket?.advertise || "not added");
  const axiosSecure = useAxiosSecure();

  const changeState = (e) => {
    e.preventDefault();
    let state = "not added";
    if (!checked) {
      state = "added";
    }
    axiosSecure
      .patch(`/tickets/${ticket._id}/admin`, { advertise: state })
      .then((res) => {
        if (res.data?.message === "full") {
          return toast(`cannot add more then 6`);
        }
        toast(`successful`);
        setState(state);
        setChecked(!checked);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`error`);
      });
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
        <input
          type="checkbox"
          checked={checked}
          onChange={changeState}
          className="toggle toggle-info"
        />
      </td>
    </tr>
  );
};

export default AdvertiseCard;
