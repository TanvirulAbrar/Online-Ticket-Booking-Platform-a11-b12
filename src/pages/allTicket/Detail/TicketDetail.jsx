import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

import {
  Bus,
  Train,
  Plane,
  Ship,
  MapPin,
  CalendarClock,
  Clock,
  Users,
  Ticket,
  BadgeCheck,
  ChevronRightCircle,
  CheckCircle,
  Tag,
  ShieldCheck,
  PackageCheck,
  DollarSign,
} from "lucide-react";
import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const TicketDetail = () => {
  const { id } = useParams();
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isbooked, setisbooked] = useState(false);
  const [bookedQuantity, setbookedQuantity] = useState(0);
  const [state, setstate] = useState("");
  const [modalActive, setmodalActive] = useState(false);

  const handelQuntity = (event) => {
    event.preventDefault();
    setbookedQuantity(event.target.value);
  };
  const {
    isLoading,
    data: ticket = {},
    refetch,
  } = useQuery({
    queryKey: ["ticket", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tickets/${id}`);
      console.log(res.data);
      return res.data;
    },
  });
  const {
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
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    if (!ticket?.departure) return;

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
  useEffect(() => {
    if (user && ticket?.booked) {
      const isAlreadyBooked = booked.find((a) => a.email == user.email);
      isAlreadyBooked && setbookedQuantity(isAlreadyBooked.num);
      isAlreadyBooked && setisbooked(true);
      isAlreadyBooked && setstate(isAlreadyBooked.state);
    }
  }, [user, ticket]);

  if (isLoading) return <Loading />;
  if (!ticket) return <Loading />;

  const transportIcon = {
    bus: <Bus className="w-4 h-4 text-blue-600" />,
    train: <Train className="w-4 h-4 text-blue-600" />,
    plane: <Plane className="w-4 h-4 text-blue-600" />,
    ship: <Ship className="w-4 h-4 text-blue-600" />,
  };

  const handelBook = (event) => {
    event.preventDefault();
    if (ticket.quantity <= 0 && !isbooked) {
      return;
    }
    if (bookedQuantity <= 0 && !isbooked) {
      return toast.error("quantity cannot be 0 or less. or more ");
    }
    if (bookedQuantity > ticket.quantity && !isbooked) {
      return toast.error("quantity cannot be 0 or less. or more ");
    }
    console.log(user);
    let quantity = ticket.quantity;
    let booked = [];

    let data = {
      email: user.email,
      num: Number(bookedQuantity),
      state: "",
    };

    if (!isbooked) {
      booked = [...ticket.booked, data];
      quantity -= Number(bookedQuantity);
      data.state = "pending";
    } else if (state === "pending") {
      booked = ticket.booked.filter((a) => a.email !== user.email);
      quantity += Number(bookedQuantity);
      setstate("");
    }
    const newTicket = {
      title: ticket.title,
      from: ticket.from,
      to: ticket.to,
      transportType: ticket.transportType,
      price: ticket.price,
      quantity: quantity,
      departure: ticket.departure,
      perks: ticket.perks,
      image: ticket.image,
      booked: booked,
      state: ticket.state,
    };

    axiosSecure
      .patch(`/tickets/${ticket._id}`, newTicket)
      .then((res) => {
        const data = res.data;
        console.log("add c", data);
        console.log("Submitted Data:", newTicket);

        if (isbooked) {
          toast("canceled successfully");
          setisbooked(false);
        } else {
          toast.success(" booked successfully!");
        }
        refetch();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Server error — please try again later!");
      });
  };
  // 2
  const handelPayment = (e) => {
    e.preventDefault();
    countdown === "Departed";
  };
  return (
    <div className="">
      <div
        className={`fixed inset-0 z-20 flex items-center justify-center ${
          !modalActive && "hidden"
        } bg-black/10`}
      >
        <div className="p-10 h-fit w-fit rounded-2xl bg-white shadow-sm">
          <div className="flex flex-col items-center gap-2 mt-3">
            <label htmlFor="" className="text-gray-500 font-medium">
              Quantity
            </label>
            <input
              onChange={(e) => {
                handelQuntity(e);
              }}
              type="text"
              value={bookedQuantity}
              placeholder="Enter quantity"
              className={`flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-violet-400 ${
                isbooked && "hidden"
              }`}
            />
            <div className="bg-gray-50 p-3 flex items-center rounded-xl ">
              <DollarSign className="w-4 h-4 mx-1  text-blue-500" />{" "}
              {bookedQuantity * price}
            </div>

            {countdown === "Departed" ? (
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                Departed <ChevronRightCircle className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={(e) => handelBook(e)}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  state === "approved" && "hidden"
                }`}
              >
                {isbooked ? "cancel book" : "Book Now"}
                <ChevronRightCircle className="w-5 h-5" />
              </button>
            )}
            {state == "approved" && (
              <button
                onClick={(e) => handelPayment(e)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {countdown === "Departed" ? "Time Ended" : "pay"}
                <ChevronRightCircle className="w-5 h-5" />
              </button>
            )}
            {state != "" && (
              <div className="bg-gray-50 p-3 flex items-center rounded-xl mb-4">
                <Tag className="w-4 h-4 mx-1  text-blue-500" /> {state}
              </div>
            )}
            <button
              onClick={() => setmodalActive(!modalActive)}
              className={`w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                state === "approved" && "hidden"
              }`}
            >
              cancel
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-40 w-full  shadow-md group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 "
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg')",
          }}
        ></div>
      </div>
      <div className="flex flex-col sm:flex-row p-5 gap-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm font-medium">
            {transportIcon[transportType?.toLowerCase()] || (
              <Ticket className="w-4 h-4" />
            )}
            <span className="capitalize">{transportType}</span>
          </div>

          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>

          <div className="flex items-center gap-2 w-fit px-2 py-1 rounded-md bg-emerald-600 text-white text-sm font-semibold">
            <Users className="h-4 w-4" />
            <span>Tickets Available: {quantity}</span>
          </div>

          <div className="my-3 text-gray-600 text-sm space-y-1">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>
                {from} → {to}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarClock className="w-4 h-4 text-purple-600" />
              <span>Departure: {departure}</span>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-purple-600 mt-2">
              <Clock className="w-4 h-4" />
              <span>
                {countdown === "Departed" ? (
                  <span className="text-red-500 font-semibold">Departed</span>
                ) : (
                  <>
                    Departure in:{" "}
                    <span className="font-semibold">{countdown}</span>
                  </>
                )}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl   p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Ticket Includes
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm">
              {perks?.map((p, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center border-gray-400 border-b pb-2 last:border-0"
                >
                  <span>{p}</span>
                  <CheckCircle className="text-green-500 h-5 w-5" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 bg-base-100 rounded-3xl max-w-80 border border-gray-200 shadow-sm hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
          <figure className="overflow-hidden rounded-xl h-48 mb-3">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="ticket-banner"
            />
          </figure>

          <div className="bg-white rounded-xl  p-4 shadow-sm">
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  ৳{price}
                </span>
                <span className="text-sm line-through text-gray-400">
                  ৳{price * 1.5}
                </span>
              </div>

              <p className="text-sm text-green-600 font-medium mt-1">
                Limited Time Offer — Hurry!
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm mb-3 text-gray-600">
              <ShieldCheck className="text-blue-600 w-4 h-4" />
              <span>Secure Booking Guarantee</span>
            </div>

            <div className="bg-gray-50 p-3 rounded-xl mb-4">
              <p className="font-semibold text-gray-700 mb-2 text-sm">
                Ticket Bonus
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <PackageCheck className="w-4 h-4 text-blue-500" /> Fast
                  Check-in
                </li>
                <li className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-blue-500" /> Auto-Applied
                  Discount
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2 mt-3">
              {/* <input
                onChange={(e) => {
                  handelQuntity(e);
                }}
                type="text"
                value={bookedQuantity}
                placeholder="Enter quantity"
                className={`flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-violet-400 ${
                  isbooked && "hidden"
                }`}
              /> */}
              <div className="bg-gray-50 p-3 flex items-center rounded-xl ">
                <DollarSign className="w-4 h-4 mx-1  text-blue-500" />{" "}
                {bookedQuantity * price}
              </div>

              {countdown === "Departed" ? (
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  Departed <ChevronRightCircle className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => setmodalActive(!modalActive)}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    state === "approved" && "hidden"
                  }`}
                >
                  {isbooked ? "cancel book" : "Book Now"}
                  <ChevronRightCircle className="w-5 h-5" />
                </button>
              )}
              {state == "approved" && (
                <button
                  onClick={(e) => handelPayment(e)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {countdown === "Departed" ? "Time Ended" : "pay"}
                  <ChevronRightCircle className="w-5 h-5" />
                </button>
              )}
              {state != "" && (
                <div className="bg-gray-50 p-3 flex items-center rounded-xl mb-4">
                  <Tag className="w-4 h-4 mx-1  text-blue-500" /> {state}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
