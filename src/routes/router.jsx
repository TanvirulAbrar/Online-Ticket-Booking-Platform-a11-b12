import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import { Eraser } from "lucide-react";
import ErrorPage from "../pages/Shared/404/ErrorPage";
import Loading from "../pages/Shared/Loading/Loading";
import Home from "../pages/Home/Home/Home";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";

import AlTicket from "../pages/allTicket/AlTicket";
import TicketDetail from "../pages/allTicket/Detail/TicketDetail";
import PrivateRoute from "./PrivateRoute";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Profile from "../pages/Dashboard/profile/Profile";
import MyBookedTicket from "../pages/Dashboard/MyTicket/MyBookedTicket";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/profile",
            Component: Profile,
          },
          {
            path: "/dashboard/my-booked-ticket",
            Component: MyBookedTicket,
          },
          {
            path: "/dashboard/paymentHistory",
            Component: PaymentHistory,
          },
        ],
      },
      {
        path: "/alltickets",
        Component: AlTicket,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <TicketDetail />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
