// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Loading, { TicketLoading } from "../../Shared/Loading/Loading";
import RevenueOverviewChart from "./RevenueOverviewChart";
import { Ticket, DollarSign, Layers } from "lucide-react";
import { useSearchParams } from "react-router";
import RevenuePieChart from "./RevenuePieChart";

const RevenueOverview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [revenue, setrevenue] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/revenues?email=${user?.email}`).then((res) => {
      setrevenue(res.data);
      console.log(res.data);
    });
  }, [user]);

  if (!revenue[0]) {
    return <TicketLoading />;
  }

  return (
    <div className="p-6">
      {/* Modern Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Revenue Overview
          </h1>
          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
            ৳{revenue[0]?.amount} Total
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 ml-8">
          Track your earnings, ticket sales, and business performance metrics
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
              <Ticket size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Tickets Sold</p>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{revenue[0]?.quantity}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">৳{revenue[0]?.amount}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300">
              <Layers size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Tickets Added</p>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{revenue[0]?.totalTicket}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <RevenueOverviewChart
            revenue={revenue[0]?.amount}
            ticketsSold={revenue[0]?.quantity}
            ticketsAdded={revenue[0]?.totalTicket}
          />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <RevenuePieChart
            revenue={revenue[0].amount}
            ticketsSold={revenue[0].quantity}
            ticketsAdded={revenue[0].totalTicket}
          />
        </div>
      </div>
    </div>
  );
  
};

export default RevenueOverview;
