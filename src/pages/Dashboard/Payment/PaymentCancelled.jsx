import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div>
      <h2>Payment is cancelled. Please try again</h2>
      <Link to="/dashboard/my-booked-ticket">
        <button className="btn bg-blue-500 text-white">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
