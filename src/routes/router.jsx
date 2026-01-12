import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ErrorPage from "../pages/Shared/404/ErrorPage";
import Loading from "../pages/Shared/Loading/Loading";
import Home from "../pages/Home/Home/Home";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import DashboardOverview from "../pages/Dashboard/Overview/DashboardOverview";

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
import AdminRoute from "./AdminRoute";
import VendorRoute from "./VendorRoute";

// Additional Content Pages
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import Help from "../pages/Help/Help";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import Showcase1 from "../pages/Showcase/Showcase1";
import Showcase2 from "../pages/Showcase/Showcase2";
import Showcase3 from "../pages/Showcase/Showcase3";
import Showcase4 from "../pages/Showcase/Showcase4";

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
          // <PrivateRoute>
          <TicketDetail />
          //</PrivateRoute>
        ),
      },
      // Additional Content Pages
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/help",
        Component: Help,
      },
      {
        path: "/privacy",
        Component: Privacy,
      },
      {
        path: "/terms",
        Component: Terms,
      },
      {
        path: "/showcase",
        element: <Navigate to="/showcase/1" replace />,
      },
      {
        path: "/showcase/1",
        Component: Showcase1,
      },
      {
        path: "/showcase/2",
        Component: Showcase2,
      },
      {
        path: "/showcase/3",
        Component: Showcase3,
      },
      {
        path: "/showcase/4",
        Component: Showcase4,
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
        index: true,
        Component: DashboardOverview,
      },
      {
        path: "/dashboard/profile",
        Component: Profile,
      },
      {
        path: "/dashboard/overview",
        Component: DashboardOverview,
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
        path: "/dashboard/payment/:id",
        Component: Payment,
      },
      {
        path: "/dashboard/add-ticket",
        element: (
          <VendorRoute>
            <AddTicket />
          </VendorRoute>
        ),
      },
      {
        path: "/dashboard/my-added-tickets",
        element: (
          <VendorRoute>
            <MyAddedTicket />
          </VendorRoute>
        ),
      },
      {
        path: "/dashboard/update/:id",
        element: (
          <VendorRoute>
            <UpdateTicket />
          </VendorRoute>
        ),
      },
      {
        path: "/dashboard/requested-bookings",
        element: (
          <VendorRoute>
            <RequestBooking />
          </VendorRoute>
        ),
      },
      {
        path: "/dashboard/revenue",
        element: (
          <VendorRoute>
            <RevenueOverview />
          </VendorRoute>
        ),
      },
      // {
      //   path: "/dashboard/overview",
      //   Component: PaymentHistory,
      // },
      {
        path: "/dashboard/payment-success",
        Component: PaymentSuccess,
      },

      {
        path: "/dashboard/payment-cancelled",
        Component: PaymentCancelled,
      },
      {
        path: "/dashboard/manage-ticket",
        element: (
          <AdminRoute>
            <ManageTicket></ManageTicket>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-user",
        element: (
          <AdminRoute>
            <ManageUser />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/advertise",
        element: (
          <AdminRoute>
            <Advertise />
          </AdminRoute>
        ),
      },
    ],
  },
]);
