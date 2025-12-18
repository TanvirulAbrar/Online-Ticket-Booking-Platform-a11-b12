import { Star, Wallet, Package, Truck, Gift, ArrowRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const AddCad = ({ ticketa }) => {
  const ticket = ticketa;
  return (
    <div className="relative h-40 w-full rounded-2xl overflow-hidden shadow-md group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: `url('${ticket?.image}')`,
        }}
      ></div>

      <NavLink to={`/details/${ticket._id}`} className="block h-full w-full">
        <div
          className="relative flex flex-col justify-between h-full w-full p-4
      bg-linear-to-r from-black/0  to-black/50 text-white"
        >
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 w-fit rounded-lg">
            <Star className="w-4 h-4 text-yellow-300" />
            <h1 className="text-lg font-bold">{ticket.title}</h1>
          </div>

          <div className="flex items-end justify-between w-full">
            <div className="flex flex-wrap gap-2 text-[12px]">
              <p className="flex items-center gap-1 bg-white/90 text-gray-700 rounded-md px-3 py-1 shadow-sm">
                <Wallet className="w-3 h-3" />
                {ticket.price}
              </p>

              <p className="flex items-center gap-1 bg-white/90 text-gray-700 rounded-md px-3 py-1 shadow-sm">
                <Package className="w-3 h-3" />
                {ticket.quantity}
              </p>

              <p className="flex items-center gap-1 bg-white/90 text-gray-700 rounded-md px-3 py-1 shadow-sm">
                <Truck className="w-3 h-3" />
                {ticket.transportType}
              </p>

              <p className="flex items-center gap-1 bg-white/90 text-gray-700 rounded-md px-3 py-1 shadow-sm">
                <Gift className="w-3 h-3" />
                {ticket.perks}
              </p>
            </div>

            <p className="flex items-center gap-1 text-sm underline decoration-white/40 underline-offset-2">
              See details
              <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default AddCad;
