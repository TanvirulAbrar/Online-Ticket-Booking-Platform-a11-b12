import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { CheckCircle, CircleX } from "lucide-react";
import RequestBookingCard from "./RequestBookingCard";
import { TicketLoading } from "../../Shared/Loading/Loading";

const RequestBooking = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookedTicket = [], isLoading } = useQuery({
    queryKey: ["bookedTicket", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/booked-tickets?createdBy=${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <TicketLoading />;
  }

  return (
    <div className="p-6">
      {/* Modern Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Requested Bookings
          </h1>
          <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            {bookedTicket.length} Requests
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 ml-8">
          Manage and approve ticket booking requests from customers
        </p>
      </div>

      {/* Table Container */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors duration-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">#</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ticket Title</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Booking Quantity</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Total Price</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {bookedTicket.map((bookedTicket, index) => (
                <RequestBookingCard
                  key={bookedTicket._id}
                  bookedTicket={bookedTicket}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Showing 1 to {Math.min(bookedTicket.length, 10)} of {bookedTicket.length} results
          </span>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded text-sm font-medium hover:bg-white dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestBooking;
