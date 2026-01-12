import React from "react";
import { NavLink } from "react-router";
import { Gift, ArrowRight } from "lucide-react";
import AddCad from "./AddCad";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
const Adds = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: tickets = [] } = useQuery({
    queryKey: ["adstickets"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/tickets?advertise=added&state=approved`
      );
      return res.data;
    },
  });
  
  if (isLoading) return <Loading />;
  if (!tickets) return <Loading />;
  
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <span className="material-symbols-outlined text-white text-2xl">star</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Advertisements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover exclusive deals and premium travel options handpicked for you. Limited time offers you don't want to miss!
          </p>
        </div>

        {tickets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => {
              return <AddCad key={ticket._id} ticketa={ticket}></AddCad>;
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No Featured Deals Available
            </h3>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Check back soon for exciting offers and exclusive deals!
            </p>
            <NavLink 
              to="/alltickets"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Browse All Tickets
              <ArrowRight className="w-4 h-4 ml-2" />
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default Adds;
