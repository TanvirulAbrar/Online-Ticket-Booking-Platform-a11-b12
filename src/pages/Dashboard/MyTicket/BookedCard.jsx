import React, { useEffect, useState } from "react";

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
  ChevronRightCircle,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const BookedCard = ({ bookedTicket }) => {
  const navigate = useNavigate();
  const [state, setstate] = useState(bookedTicket.state);
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: ticket = {} } = useQuery({
    queryKey: ["ticket", bookedTicket._id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tickets/${bookedTicket.TicketId}`);
      console.log(res.data);
      return res.data;
    },
  });
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
    booked,
  } = ticket;
  useEffect(() => {
    if (user && ticket?.booked) {
      const isAlreadyBooked = booked.find((a) => a.email == user.email);
      isAlreadyBooked && setstate(isAlreadyBooked.state);
    }
  }, [user, ticket]);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    if (!ticket?.departure || state === "rejected") return;

    const interval = setInterval(() => {
      const departureTime = new Date(ticket.departure).getTime();
      const now = new Date().getTime();

      const distance = departureTime - now;

      if (distance <= 0) {
        setCountdown("Departed");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [ticket]);

  return (
    <div
      className={`${ticket?.state === "hidden" && "hidden"} ${
        !ticket && "hidden"
      }`}
      to={`/details/${_id}`}
    >
      <div className="p-4 bg-base-100 rounded-3xl w-60 border border-[#e1e1e1] transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
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
          {state != "" && (
            <div className="bg-gray-50 p-3 flex items-center rounded-xl mb-4">
              <Tag className="w-4 h-4 mx-1  text-blue-500" /> {state}
            </div>
          )}
          <div
            className={` ${
              state === "rejected" && "hidden"
            } flex items-center gap-2 text-sm font-medium text-purple-600 mt-2`}
          >
            <Clock className="w-4 h-4" />
            <span>
              {countdown === "Departed" ? (
                <span className="text-red-500 font-semibold">Departed</span>
              ) : (
                <>
                  Departure in:{" "}
                  <span className={`font-semibold `}>{countdown}</span>
                </>
              )}
            </span>
          </div>
          <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-blue-400 text-white text-[13px]  ">
            <Ticket className="h-4 w-4 " /> Booked quantity
            <span>{bookedTicket.quantity + "/" + quantity}</span>
          </div>
          <h2 className="pt-3 text-[16px] font-semibold">${price}</h2>
          {state == "accepted" && (
            <button
              onClick={() => navigate(`/dashboard/payment/${bookedTicket._id}`)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              {countdown === "Departed" ? "Time Ended" : "pay"}
              <ChevronRightCircle className="w-5 h-5" />
            </button>
          )}
          <NavLink
            to={`/details/${_id}`}
            className="card-actions flex items-center w-fit px-2 rounded-[5px] hover:bg-blue-200 font-bold text-[13px] text-[#311986]"
          >
            more details <ChevronRight className="h-4 w-4" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BookedCard;
