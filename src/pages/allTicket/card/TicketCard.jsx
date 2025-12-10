import React from "react";
import {
  Tag,
  Boxes,
  Image,
  MapPin,
  Navigation,
  DollarSign,
  Sparkles,
  Clock,
  Bus,
  TrainFront,
  Plane,
  Ship,
  ChevronRight,
  Ticket,
} from "lucide-react";

import { NavLink } from "react-router";

const TicketCard = ({ ticket }) => {
  const {
    _id,
    title,
    quantity,
    image,
    from,
    to,
    price,
    perks,
    departure,
    transportType,
  } = ticket;
  return (
    <NavLink to={`/details/${_id}`}>
      <div className="p-4 bg-base-100 rounded-3xl max-w-80 border border-[#e1e1e1] transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
        <figure className="overflow-hidden rounded-2xl h-50">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="banner"
          />
        </figure>

        <div className="py-3 flex flex-col gap-1">
          <h2 className="font-bold h-20">{title}</h2>

          <div className="flex flex-wrap gap-1">
            {" "}
            <div className="w-fit px-2 rounded-[5px] bg-green-200 font-bold text-[#198686]">
              <h2 className="text-[13px]">{transportType}</h2>
            </div>
            <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-blue-400 text-white text-[13px]  ">
              <Ticket className="h-4 w-4 " />
              <span>{quantity + "/" + quantity}</span>
            </div>
            <div className="flex items-center gap-2 w-fit px-2 rounded-[5px]  bg-[#ffffff] text-[13px] border  border-[#d4d4d4]  ">
              <Sparkles className="h-4 w-4" />
              <span>{perks}</span>
            </div>
            <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] border  border-[#d4d4d4] bg-[#ffffff] text-[13px]  ">
              <Clock className="h-4 w-4" />
              <span>{departure}</span>
            </div>
            <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] border  border-[#d4d4d4] bg-[#ffffff] text-[13px]  ">
              <MapPin className="h-4 w-4" />
              <span>{from + "-" + to}</span>
            </div>
          </div>

          <h2 className="pt-3 text-[16px] font-semibold">${price}</h2>

          <div className="card-actions flex items-center w-fit px-2 rounded-[5px] hover:bg-blue-200 font-bold text-[13px] text-[#311986]">
            more details <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default TicketCard;
