import React, { useEffect, useState } from "react";
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

  const getRoleColor = (userRole) => {
    switch (userRole) {
      case 'admin':
        return 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800';
      case 'vendor':
        return 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      case 'fraud':
        return 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-6 text-slate-600 dark:text-slate-400">
        {index + 1}
      </td>
      <td className="px-6 py-6 text-slate-800 dark:text-slate-200 font-medium">
        {user.displayName}
      </td>
      <td className="px-6 py-6 text-slate-600 dark:text-slate-300">
        {user.email}
      </td>
      <td className="px-6 py-6 text-center">
        <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getRoleColor(role)}`}>
          {role.toUpperCase()}
        </span>
      </td>
      <td className="px-6 py-6 text-center">
        <div className="flex gap-2 justify-center">
          <button
            onClick={(e) => changeState(e, "admin")}
            className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
            title="Make Admin"
          >
            <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
          </button>
          <button
            onClick={(e) => changeState(e, "user")}
            className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
            title="Make User"
          >
            <span className="material-symbols-outlined text-sm">person</span>
          </button>
          <button
            onClick={(e) => changeState(e, "vendor")}
            className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
            title="Make Vendor"
          >
            <span className="material-symbols-outlined text-sm">business</span>
          </button>
          <button
            onClick={(e) => changeState(e, "fraud")}
            className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors"
            title="Mark as Fraud"
          >
            <span className="material-symbols-outlined text-sm">block</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageUserCard;
