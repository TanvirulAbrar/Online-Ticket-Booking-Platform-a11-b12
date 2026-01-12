import { useState, useEffect } from "react";
import {
  UserCircle,
  Ticket,
  CircleDollarSign,
  Home,
  BarChart3,
  Menu,
  X,
  Sun,
  Moon,
  LogOut,
} from "lucide-react";
import { NavLink, Outlet, useNavigate, Link } from "react-router";
import { useTheme } from "../../../contexts/ThemeContext";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const UserDashboardHome = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { logOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navicon = [BarChart3, UserCircle, Ticket, CircleDollarSign];
  const navLink = [
    "/dashboard/overview",
    "/dashboard/profile",
    "/dashboard/my-booked-ticket",
    "/dashboard/paymentHistory",
  ];
  const navtext = ["Overview", " Profile", "My Booked Tickets", "Transaction History"];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.classList.add('mobile-menu-open');
  };

  // Cleanup effect to remove body class on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error("Logout failed");
      });
  };

  const NavigationItems = ({ mobile = false }) => (
    <>
      {navicon.map((Icon, i) => (
        <NavLink
          key={i}
          to={navLink[i]}
          onClick={mobile ? closeMobileMenu : undefined}
          className={({ isActive }) =>
            `group flex items-center px-6 py-3 ${
              isActive
                ? "bg-blue-50 dark:bg-gray-700 border-l-4 border-blue-500 text-blue-500 font-medium"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-400 transition-colors border-l-4 border-transparent"
            }`
          }
        >
          <Icon className="mr-3 text-2xl" />
          {navtext[i]}
        </NavLink>
      ))}
    </>
  );
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-display h-screen flex overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between transition-colors duration-300 hidden lg:flex shrink-0 z-20">
        <div>
          <div className="h-20 flex items-center px-8 border-b border-gray-100 dark:border-gray-800">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="bg-blue-500 p-1.5 rounded text-white mr-3">
                <UserCircle className="text-lg" />
              </div>
              <h1 className="text-2xl font-bold text-blue-500 tracking-tight">TicketZone</h1>
            </Link>
          </div>
          <nav className="mt-6 flex flex-col space-y-1">
            <NavigationItems />
          </nav>
        </div>
        
        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors group"
          >
            <LogOut className="mr-3 text-xl group-hover:scale-110 transition-transform" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between transition-transform duration-300 z-50 lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div>
          <div className="h-20 flex items-center justify-between px-8 border-b border-gray-100 dark:border-gray-800">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="bg-blue-500 p-1.5 rounded text-white mr-3">
                <UserCircle className="text-lg" />
              </div>
              <h1 className="text-2xl font-bold text-blue-500 tracking-tight">TicketZone</h1>
            </Link>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="mt-6 flex flex-col space-y-1">
            <NavigationItems mobile={true} />
          </nav>
        </div>
        
        {/* Mobile Logout Button */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              handleLogout();
              closeMobileMenu();
            }}
            className="w-full flex items-center px-6 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors group"
          >
            <LogOut className="mr-3 text-xl group-hover:scale-110 transition-transform" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="h-20 bg-gray-50 dark:bg-gray-900 flex items-center justify-between px-4 lg:px-8 shrink-0 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={openMobileMenu}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors mr-4 lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">User Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              type="button"
              className="group flex items-center gap-2 p-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:shadow-lg hover:scale-[1.03] transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              onClick={() => navigate("/")}
            >
              <span className="p-2 rounded-full bg-white shadow-sm">
                <Home className="w-6 h-6" />
              </span>
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 pt-0">
          <div className="mt-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboardHome;
