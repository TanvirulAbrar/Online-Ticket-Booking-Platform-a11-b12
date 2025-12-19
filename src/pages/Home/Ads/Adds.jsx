import React from "react";
import { NavLink } from "react-router";
import { Star, Wallet, Package, Truck, Gift, ArrowRight } from "lucide-react";
import AddCad from "./AddCad";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
const Adds = () => {
  // const [tickets, settickets] = useState([]);
  // useEffect(() => {
  //   fetch("/tickets.json")
  //     .then((res) => res.json())
  //     .then((data) => settickets(data))
  //     .catch((err) => console.log(err));
  // }, []);
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: tickets = [] } = useQuery({
    queryKey: ["adstickets"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/tickets?advertise=added&state=approved`
      );
      //console.log(res.data);
      return res.data;
    },
  });
  if (isLoading) return <Loading />;
  if (!tickets) return <Loading />;
  return (
    <div className="max-w-[1000px] p-5 mx-auto">
      <h1 className="text-3xl font-bold flex  my-5">
        <div className="w-[5px] mr-5 bg-blue-700"></div>Advertisement
        <div className="w-[5px] ml-5 bg-blue-700"></div>
      </h1>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-5">
        {" "}
        {/* 1 */}
        {tickets.map((ticket) => {
          return <AddCad key={ticket._id} ticketa={ticket}></AddCad>;
        })}
      </div>
    </div>
  );
};

export default Adds;
