import React from "react";
// import useRole from "../../../hooks/useRole";
// import Loading from "../../../components/Loading/Loading";
import AdminDashboardHome from "./AdminDashboardHome";
import VendorDashboardHome from "./VendorDashboardHome";
import UserDashboardHome from "./UserDashboardHome";
import Loading from "../../Shared/Loading/Loading";
import ApproveVendor from "../ApproveVendor/ApproveVendor";
import MyTicket from "../MyTicket/MyBookedTicket";
import Payment from "../Payment/Payment";
import PaymentCancelled from "../Payment/PaymentCancelled";
import PaymentSuccess from "../Payment/PaymentSuccess";
import PaymentHistory from "../PaymentHistory/PaymentHistory";
import RevenueOverviewChart from "../RevenueOverview/RevenueOverviewChart";
import { ToastContainer } from "react-toastify";
import useRole from "../../../hooks/useRole";

const DashboardHome = () => {
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return <Loading></Loading>;
  }
  if (role === "admin") {
    return (
      <div className="">
        <ToastContainer></ToastContainer>
        <AdminDashboardHome></AdminDashboardHome>
      </div>
    );
  } else if (role === "vendor") {
    return (
      <div className="">
        <ToastContainer></ToastContainer>
        <VendorDashboardHome></VendorDashboardHome>
      </div>
    );
  } else {
    return (
      <div className="">
        <ToastContainer></ToastContainer>
        <UserDashboardHome></UserDashboardHome>
      </div>
    );
  }

  // return (
  //   <div className="">
  //     {/* <ToastContainer></ToastContainer> */}
  //     <AdminDashboardHome></AdminDashboardHome>
  //     <UserDashboardHome></UserDashboardHome>
  //     <VendorDashboardHome></VendorDashboardHome>
  //     {/* <ApproveVendor></ApproveVendor>
  //      */}
  //     {/* <MyTicket></MyTicket>
  //      */}
  //     {/* <Payment></Payment> */}
  //     {/* <PaymentCancelled></PaymentCancelled> */}
  //     {/* <PaymentSuccess></PaymentSuccess> */}
  //     {/* <PaymentHistory></PaymentHistory> */}
  //   </div>
  // );
};

export default DashboardHome;
