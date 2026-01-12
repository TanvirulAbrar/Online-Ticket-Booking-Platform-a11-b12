import React from "react";
import { Loader2, BarChart3, Users, Ticket } from "lucide-react";

const Loading = ({ 
  type = "default", 
  message = "Loading...", 
  size = "lg",
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  };

  const containerClasses = fullScreen 
    ? "fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
    : "w-fit m-auto flex flex-col items-center justify-center p-8";

  const renderLoadingType = () => {
    switch (type) {
      case "spinner":
        return (
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className={`${sizeClasses[size]} text-blue-500 animate-spin`} />
            <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">{message}</p>
          </div>
        );

      case "dashboard":
        return (
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-500 animate-bounce" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Loading Dashboard</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">Preparing your analytics...</p>
            </div>
          </div>
        );

      case "skeleton":
        return (
          <div className="space-y-6 w-full max-w-4xl">
            {/* Header */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="space-y-2">
                <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="w-24 h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="w-20 h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {[1, 2].map(i => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                  <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        );

      case "dots":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-2">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className={`w-3 h-3 bg-blue-500 rounded-full animate-bounce`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>
          </div>
        );

      case "pulse":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 bg-blue-500 rounded-full animate-ping absolute"></div>
              <div className="w-16 h-16 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">{message}</p>
          </div>
        );

      case "ticket":
        return (
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-blue-200 dark:border-blue-800 rounded-2xl animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Ticket className="w-8 h-8 text-blue-500 animate-bounce" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Loading Tickets</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">Fetching latest data...</p>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">{message}</p>
          </div>
        );
    }
  };

  return (
    <div className={containerClasses}>
      {renderLoadingType()}
    </div>
  );
};

// Specific loading components for different use cases
export const DashboardLoading = () => (
  <Loading type="dashboard" message="Loading Dashboard" fullScreen={true} />
);

export const SkeletonLoading = () => (
  <Loading type="skeleton" />
);

export const TicketLoading = () => (
  <Loading type="ticket" message="Loading Tickets" />
);

export const SpinnerLoading = ({ message = "Loading..." }) => (
  <Loading type="spinner" message={message} />
);

export default Loading;
