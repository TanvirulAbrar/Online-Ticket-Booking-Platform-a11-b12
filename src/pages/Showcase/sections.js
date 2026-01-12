import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import Loading from "../Shared/Loading/Loading";
import Home from "../Home/Home/Home";
import Banner from "../Home/Banner/Banner";
import Features from "../Home/Features/Features";
import LatestTickets from "../Home/LatestTickets/LatestTickets";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Help from "../Help/Help";
import Privacy from "../Privacy/Privacy";
import Terms from "../Terms/Terms";
import AlTicket from "../allTicket/AlTicket";
import TicketDetail from "../allTicket/Detail/TicketDetail";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import DashboardOverview from "../Dashboard/Overview/DashboardOverview";
import ErrorPage from "../Shared/404/ErrorPage";

export const SHOWCASE_SECTIONS = [
  { id: "home", title: "Home (full)", Component: Home },
  { id: "alltickets", title: "All Tickets", Component: AlTicket },
  { id: "ticketdetail", title: "Ticket Detail", Component: TicketDetail },
  { id: "about", title: "About", Component: About },
  { id: "blog", title: "Blog", Component: Blog },
  { id: "contact", title: "Contact", Component: Contact },
  { id: "help", title: "Help", Component: Help },
  { id: "privacy", title: "Privacy", Component: Privacy },
  { id: "terms", title: "Terms", Component: Terms },
  { id: "auth-login", title: "Login", Component: Login },
  { id: "auth-register", title: "Register", Component: Register },
  { id: "dashboard-home", title: "Dashboard Home", Component: DashboardHome },
  {
    id: "dashboard-overview",
    title: "Dashboard Overview",
    Component: DashboardOverview,
  },
  { id: "loading", title: "Loading", Component: Loading },
  { id: "error", title: "404 / Error Page", Component: ErrorPage },
  { id: "footer", title: "Footer", Component: Footer },
];
