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
        Component: DashboardHome,
      },
      {
        path: "/alltickets",
        Component: AlTicket,
      },
      {
        path: "/details/:id",
        Component: TicketDetail,
      },
    ],
  },
]);
