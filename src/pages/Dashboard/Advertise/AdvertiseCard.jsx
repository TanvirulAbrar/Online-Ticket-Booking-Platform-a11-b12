import { useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ToggleSwitch from "../../../components/ui/ToggleSwitch";

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
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-6 text-slate-600 dark:text-slate-400">
        {index + 1}
      </td>
      <td className="px-6 py-6 text-slate-600 dark:text-slate-300">
        {ticket.email}
      </td>
      <td className="px-6 py-6 text-slate-800 dark:text-slate-200 font-medium">
        <div className="max-w-xs truncate" title={ticket.title}>
          {ticket.title}
        </div>
      </td>
      <td className="px-6 py-6 text-slate-600 dark:text-slate-400">
        {ticket.quantity}
      </td>
      <td className="px-6 py-6 text-green-600 dark:text-green-400 font-bold text-right">
        ${ticket.price}
      </td>
      <td className="px-6 py-6 text-center">
        <span className={`px-3 py-1 text-xs font-bold rounded-full border ${
          state === "added" 
            ? "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800" 
            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
        }`}>
          {state.toUpperCase()}
        </span>
      </td>
      <td className="px-6 py-6 text-center">
        <ToggleSwitch
          checked={checked}
          onChange={changeState}
          id={`advertise-toggle-${ticket._id}`}
          className="m-0"
        />
      </td>
    </tr>
  );
};

export default AdvertiseCard;
