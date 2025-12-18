import React, { useEffect, useState } from "react";
import TicketCard from "../../allTicket/card/TicketCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../Shared/Loading/Loading";

const LatestTickets = () => {
  // const [tickets, settickets] = useState([]);
  // useEffect(() => {
  //   fetch("/tickets.json")
  //     .then((res) => res.json())
  //     .then((data) => settickets(data))
  //     .catch((err) => console.log(err));
  // }, []);
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: tickets = [] } = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tickets?state=approved`);
      console.log(res.data);
      return res.data;
    },
  });
  if (isLoading) return <Loading />;
  if (!tickets) return <Loading />;
  return (
    <div className="max-w-[1000px] p-5 mx-auto">
      <h1 className="text-3xl p-5 font-bold flex  my-5">
        <div className="w-[5px] mr-5 bg-blue-700"></div> Latest
        <div className="w-[5px] ml-5 bg-blue-700"></div>
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {tickets.slice(0, 8).map((ticket, i) => {
          return <TicketCard key={i + "ti"} ticket={ticket}></TicketCard>;
        })}
      </div>
    </div>
  );
};

export default LatestTickets;
