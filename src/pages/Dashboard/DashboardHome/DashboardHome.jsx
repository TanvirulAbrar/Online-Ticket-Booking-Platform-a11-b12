import React from "react";
// import useRole from "../../../hooks/useRole";
// import Loading from "../../../components/Loading/Loading";
import AdminDashboardHome from "./AdminDashboardHome";
import VendorDashboardHome from "./VendorDashboardHome";
import UserDashboardHome from "./UserDashboardHome";
import Loading from "../../Shared/Loading/Loading";

const DashboardHome = () => {
  // const { role, roleLoading } = useRole();
  // if (roleLoading) {
  //   return <Loading></Loading>;
  // }
  // if (role === "admin") {
  //   return <AdminDashboardHome></AdminDashboardHome>;
  // } else if (role === "vendor") {
  //   return <VendorDashboardHome></VendorDashboardHome>;
  // } else {
  //   return <UserDashboardHome></UserDashboardHome>;
  // }

  return (
    <div className="">
      <AdminDashboardHome></AdminDashboardHome>
      <VendorDashboardHome></VendorDashboardHome>
      <UserDashboardHome></UserDashboardHome>
    </div>
  );
};

export default DashboardHome;
