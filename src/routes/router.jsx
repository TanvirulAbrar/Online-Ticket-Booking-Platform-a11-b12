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
import AddTicket from "../pages/Dashboard/Add ticket/AddTicket";
import MyAddedTicket from "../pages/Dashboard/MyAddedTicket/MyAddedTicket";
import UpdateTicket from "../pages/Dashboard/UpdateTicket/UpdateTicket";
import RequestBooking from "../pages/Dashboard/RequestedBooking/RequestBooking";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import Payment from "../pages/Dashboard/Payment/Payment";
import RevenueOverview from "../pages/Dashboard/RevenueOverview/RevenueOverview";
import ManageTicket from "../pages/Dashboard/Manage ticket/ManageTicket";
import ManageUser from "../pages/Dashboard/Manage User/ManageUser";
import Advertise from "../pages/Dashboard/Advertise/Advertise";

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
      {
        path: "/dashboard/add-ticket",
        Component: AddTicket,
      },
      {
        path: "/dashboard/my-added-tickets",
        Component: MyAddedTicket,
      },
      {
        path: "/dashboard/update/:id",
        Component: UpdateTicket,
      },
      {
        path: "/dashboard/requested-bookings",
        Component: RequestBooking,
      },
      {
        path: "/dashboard/revenue",
        Component: RevenueOverview,
      },
      {
        path: "/dashboard/overview",
        Component: PaymentHistory,
      },
      {
        path: "/dashboard/payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "/dashboard/payment/:id",
        Component: Payment,
      },
      {
        path: "/dashboard/payment-cancelled",
        Component: PaymentCancelled,
      },
      {
        path: "/dashboard/manage-ticket",
        Component: ManageTicket,
      },
      {
        path: "/dashboard/manage-user",
        Component: ManageUser,
      },
      {
        path: "/dashboard/advertise",
        Component: Advertise,
      },
    ],
  },
]);
