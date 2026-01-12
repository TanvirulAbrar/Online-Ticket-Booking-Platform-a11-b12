import {
  MapPin,
  Sparkles,
  Clock,
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
      <div className="p-4 bg-base-100 rounded-3xl w-full max-w-80 h-[460px] border border-[#e1e1e1] transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] flex flex-col overflow-hidden">
        <figure className="overflow-hidden rounded-2xl h-40 flex-shrink-0 mb-3">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="banner"
          />
        </figure>

        <div className="flex flex-col gap-2 flex-1 min-h-0">
          {/* Title Section */}
          <div className="h-12 overflow-hidden flex-shrink-0">
            <h2 className="font-bold text-sm leading-tight auto-scroll-horizontal whitespace-nowrap">
              {title}
            </h2>
          </div>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-1 flex-shrink-0">
            <div className="px-2 py-1 rounded-[5px] bg-green-200 font-bold text-[#198686] text-[11px]">
              {transportType}
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-[5px] bg-blue-400 text-white text-[11px]">
              <Ticket className="h-3 w-3" />
              <span>{quantity}/{quantity}</span>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-wrap gap-1 flex-shrink-0">
            <div className="flex items-center gap-1 px-2 py-1 rounded-[5px] bg-[#ffffff] text-[11px] border border-[#d4d4d4]">
              <Sparkles className="h-3 w-3" />
              <span className="truncate max-w-[60px]">{perks}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-[5px] border border-[#d4d4d4] bg-[#ffffff] text-[11px]">
              <Clock className="h-3 w-3" />
              <span>{departure}</span>
            </div>
          </div>

          {/* Route Section */}
          <div className="flex items-center gap-2 px-2 py-1 rounded-[5px] border border-[#d4d4d4] bg-[#ffffff] text-[11px] flex-shrink-0 overflow-hidden">
            <MapPin className="h-3 w-3 flex-shrink-0" />
            <span className=" whitespace-nowrap">
              {from} - {to}
            </span>
          </div>

          {/* Spacer */}
          <div className="flex-1 min-h-[10px]"></div>

          {/* Price Section */}
          <div className="flex-shrink-0 mb-2">
            <h2 className="text-lg font-bold text-primary">${price}</h2>
          </div>

          {/* More Details Button */}
          <div className="flex-shrink-0">
            <div className="w-full flex items-center justify-center px-3 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200 font-semibold text-[13px] text-[#311986] transition-all duration-200">
              <span>View Details</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default TicketCard;
