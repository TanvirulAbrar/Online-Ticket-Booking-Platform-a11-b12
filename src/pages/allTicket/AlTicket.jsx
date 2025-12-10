import React, { useEffect, useState } from "react";
import TicketCard from "./card/TicketCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AlTicket = () => {
  // const [tickets, settickets] = useState([]);
  // useEffect(() => {
  //   fetch("/tickets.json")
  //     .then((res) => res.json())
  //     .then((data) => settickets(data))
  //     .catch((err) => console.log(err));
  // }, []);
  const axiosSecure = useAxiosSecure();
  const { data: tickets = [] } = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tickets`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      all ticket
      <div className="grid grid-cols-3 gap-5">
        {tickets.map((ticket, i) => {
          return <TicketCard key={i + "ti"} ticket={ticket}></TicketCard>;
        })}
      </div>
    </div>
  );
};

export default AlTicket;
