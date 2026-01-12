import { useState, useEffect } from "react";
import Logo from "../Footer/logo.png";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { Menu, X, Home, Ticket, LayoutDashboard, Info, Moon, Sun, FileText, MessageCircle } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.classList.add('mobile-menu-open');
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup effect to remove body class on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  const navigationItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/alltickets", label: "All Tickets", icon: Ticket },
    { to: "/about", label: "About", icon: Info },
    { to: "/blog", label: "Blog", icon: FileText },
    { to: "/contact", label: "Contact", icon: MessageCircle },
    // { to: "/showcase", label: "Showcase", icon: Eye },
    ...(user ? [{ to: "/dashboard", label: "Dashboard", icon: LayoutDashboard }] : []),
  ];

  const NavigationItems = ({ mobile = false }) => (
    <>
      {navigationItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.to}
            onClick={mobile ? closeMobileMenu : undefined}
            className={({ isActive }) =>
              mobile
                ? `group flex items-center px-6 py-3 ${
                    isActive
                      ? "bg-blue-50 dark:bg-gray-700 border-l-4 border-blue-500 text-blue-500 font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-400 transition-colors border-l-4 border-transparent"
                  }`
                : `px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  }`
            }
          >
            {mobile && <item.icon className="mr-3 text-xl" />}
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );
  return (
    <div className="relative">
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between transition-transform duration-300 z-50 lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div>
          <div className="h-20 flex items-center justify-between px-8 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center">
              <img src={Logo} className="w-16 mr-3" alt="TicketZone Logo" />
              <h1 className="text-xl font-bold text-blue-500 tracking-tight">TicketZone</h1>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="mt-6">
            <ul className="flex flex-col">
              <NavigationItems mobile={true} />
            </ul>
          </nav>
        </div>
        <div className="mb-6 px-6 space-y-3">
          {/* Theme */}
          <button
            onClick={() => {
              toggleTheme();
              const newDark = !isDark;
              toast.info(newDark ? "Switched to dark mode" : "Switched to light mode", { autoClose: 1200 });
              closeMobileMenu();
            }}
            className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 font-semibold py-3 rounded-lg transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
          
          {/* Auth Button */}
          {user ? (
            <button 
              onClick={() => {
                handleLogOut();
                closeMobileMenu();
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Log Out
            </button>
          ) : (
            <Link 
              to="/login"
              onClick={closeMobileMenu}
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg text-center transition-colors"
            >
              Log In
            </Link>
          )}
        </div>
      </aside>

      {/* Navbar */}
      <nav className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        isScrolled ? 'shadow-lg bg-white/98 dark:bg-gray-800/98' : 'shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left */}
            <div className="flex items-center">
              {/* Menu */}
              <button
                onClick={openMobileMenu}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors mr-4 lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </button>
              
              {/* Logo */}
              <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                <img src={Logo} className="w-12 h-auto mr-2" alt="TicketZone Logo" />
                <span className="text-xl font-bold text-blue-500 tracking-tight hidden sm:block">TicketZone</span>
              </Link>
            </div>

            {/* Center */}
            <div className="hidden lg:flex">
              <ul className="flex space-x-1">
                <NavigationItems />
              </ul>
            </div>

            {/* Right */}
            <div className="flex items-center space-x-3">
              {/* Theme */}
              <button
              onClick={() => {
                toggleTheme();
                const newDark = !isDark;
                toast.info(newDark ? "Switched to dark mode" : "Switched to light mode", { autoClose: 1200 });
              }}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              {/* Auth */}
              {user ? (
                <button 
                  onClick={handleLogOut}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  Log Out
                </button>
              ) : (
                <Link 
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
