import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageTicketCard = ({ ticket, index }) => {
  const [state, setState] = useState(ticket.state);
  const axiosSecure = useAxiosSecure();

  const changeState = (e, newState) => {
    e.preventDefault();

    axiosSecure
      .patch(`/tickets/${ticket._id}/admin-state`, { state: newState })
      .then((res) => {
        toast(`successful`);
        setState(newState);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`error`);
      });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800';
      case 'rejected':
        return 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800';
      case 'pending':
        return 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';
    }
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
        <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getStatusColor(state)}`}>
          {state.toUpperCase()}
        </span>
      </td>
      <td className="px-6 py-6 text-center">
        <div className="flex gap-2 justify-center">
          <button
            onClick={(e) => changeState(e, "approved")}
            className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
            title="Approve Ticket"
          >
            <span className="material-symbols-outlined text-sm">check_circle</span>
          </button>
          <button
            onClick={(e) => changeState(e, "rejected")}
            className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
            title="Reject Ticket"
          >
            <span className="material-symbols-outlined text-sm">cancel</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageTicketCard;
