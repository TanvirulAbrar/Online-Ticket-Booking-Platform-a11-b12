import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { ChevronRightCircle } from "lucide-react";
import { toast } from "react-toastify";

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  //console.log(id);
  const { isLoading, data: bookedTicket } = useQuery({
    queryKey: ["bookedbookedTicket", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booked-tickets/${id}`);

      // const res = await axiosSecure.get(
      //   `/booked-bookedTickets/${bookedTicketId}`
      // );
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: bookedTicket.price,
      bookedTicketId: bookedTicket._id,
      ticketId: bookedTicket.TicketId,
      quantity: bookedTicket.quantity,
      email: bookedTicket.email,
      title: bookedTicket.title,
    };

    // const res = await axiosSecure.post(
    //   "/payment-checkout-session",
    //   paymentInfo
    // );
    let res = {};

    await axiosSecure
      .post("/payment-checkout-session", paymentInfo)
      .then((a) => (res = a))
      .catch((error) => console.log(error));

    //console.log(res.data);

    window.location.href = res.data.url;
  };

  // if (isLoading) {
  //   return (
  //     <div>
  //       <span className="loading loading-infinity loading-xl"></span>
  //     </div>
  //   );
  // }

  return (
    <div className="">
      <h1 className="">pay for :{bookedTicket?.title}</h1>
      <button
        onClick={handlePayment}
        className="w-fit px-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
      >
        pay
        <ChevronRightCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Payment;
