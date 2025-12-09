import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { ticketId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: ticket } = useQuery({
    queryKey: ["tickets", ticketId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tickets/${ticketId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: ticket.cost,
      ticketId: ticket._id,
      senderEmail: ticket.senderEmail,
      ticketName: ticket.ticketName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);

    console.log(res.data);

    window.location.href = res.data.url;
  };

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h2>
        Please Pay ${ticket.cost} for : {ticket.ticketName}{" "}
      </h2>
      <button onClick={handlePayment} className="btn btn-primary text-black">
        Pay
      </button>
    </div>
  );
};

export default Payment;
