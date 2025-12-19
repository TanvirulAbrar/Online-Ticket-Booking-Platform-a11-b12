import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useRef } from "react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  const hasCalled = useRef(false);

  useEffect(() => {
    if (!sessionId || hasCalled.current) return;

    hasCalled.current = true;

    axiosSecure
      .patch(`/payment-success?session_id=${sessionId}`)
      .then((res) => {
        //console.log("send 1");

        setPaymentInfo({
          transactionId: res.data.transactionId,
          id: res.data._id,
        });
      });
  }, [sessionId]);

  return (
    <div>
      <h2 className="text-4xl">Payment successful</h2>
      <p>Your TransactionId: {paymentInfo.transactionId}</p>
      <p>Your ticket Tracking id: {paymentInfo.id}</p>
    </div>
  );
};

export default PaymentSuccess;
