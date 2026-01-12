import { useState } from "react";
import { useNavigate } from "react-router";

export default function NavItems({ layout = "row" }) {
  const navigate = useNavigate();
  
  const items = [
    { 
      key: "home", 
      label: "Home", 
      icon: "home",
      action: () => navigate("/")
    },
    { 
      key: "tickets", 
      label: "All Tickets", 
      icon: "confirmation_number",
      action: () => navigate("/alltickets")
    },
    { 
      key: "about", 
      label: "About", 
      icon: "info",
      action: () => navigate("/about")
    },
    { 
      key: "blog", 
      label: "Blog", 
      icon: "article",
      action: () => navigate("/blog")
    },
    { 
      key: "contact", 
      label: "Contact", 
      icon: "contact_mail",
      action: () => navigate("/contact")
    },
    { 
      key: "dashboard", 
      label: "Dashboard", 
      icon: "dashboard",
      action: () => navigate("/dashboard")
    },
  ];

  return (
    <nav className="relative w-fit flex-wrap font-semibold bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-[#adadad] dark:shadow-gray-900 text-sm text-gray-500 dark:text-gray-400 mx-auto content-center p-5 translate-y-[-50px] items-center">
      <div
        className={
          layout === "row"
            ? "flex gap-3 w-fit flex-wrap items-center"
            : "grid grid-cols-2   sm:grid-cols-3 gap-3"
        }
      >
        {items.map(({ key, label, icon, action }) => (
          <button
            key={key}
            type="button"
            className="group flex flex-wrap items-center gap-2 p-3 rounded-2xl bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:scale-[1.03] transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            onClick={action}
          >
            <span className="p-2 rounded-full bg-white dark:bg-gray-600 shadow-sm">
              <span className="material-symbols-outlined w-6 h-6 text-blue-500">{icon}</span>
            </span>
            <span className="text-sm max-md:hidden text-gray-700 dark:text-gray-300">{label}</span>
          </button>
        ))}
      </div>
      
    </nav>
  );
}
