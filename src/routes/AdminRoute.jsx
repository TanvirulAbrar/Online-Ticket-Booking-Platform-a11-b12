import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";
import Loading from "../pages/Shared/Loading/Loading";
import useRole from "../hooks/useRole";
// import Loading from '../components/Loading/Loading';

const AdminRoute = ({ children }) => {
  const { loading, logOut } = useAuth();
  const { role, roleLoading } = useRole();

  //console.log(role);
  if (loading || roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== "admin") {
    // console.log("hit");

    logOut();
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default AdminRoute;
