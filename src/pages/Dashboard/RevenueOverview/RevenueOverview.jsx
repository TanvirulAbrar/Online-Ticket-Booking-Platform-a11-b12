import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../Shared/Loading/Loading";
import RevenueOverviewChart from "./RevenueOverviewChart";
import { Ticket, DollarSign, Layers } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useState } from "react";
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
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-xl bg-white shadow flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <Ticket size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Tickets Sold</p>
            <h2 className="text-2xl font-bold">{revenue[0]?.quantity}</h2>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white shadow flex items-center gap-4">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <h2 className="text-2xl font-bold">${revenue[0]?.amount}</h2>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white shadow flex items-center gap-4">
          <div className="p-3 rounded-full bg-orange-100 text-orange-600">
            <Layers size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Tickets Added</p>
            <h2 className="text-2xl font-bold">{revenue[0]?.totalTicket}</h2>
          </div>
        </div>
      </div>

      <RevenueOverviewChart
        revenue={revenue[0]?.amount}
        ticketsSold={revenue[0]?.quantity}
        ticketsAdded={revenue[0]?.totalTicket}
      />
      <RevenuePieChart
        revenue={revenue[0].amount}
        ticketsSold={revenue[0].quantity}
        ticketsAdded={revenue[0].totalTicket}
      />
    </div>
  );
};

export default RevenueOverview;
