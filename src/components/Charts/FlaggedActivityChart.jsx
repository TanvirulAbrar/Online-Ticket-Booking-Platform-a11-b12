import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Clock, CheckCircle, XCircle, AlertCircle, Calendar, Filter } from 'lucide-react';
import { useNavigate } from 'react-router';

const FlaggedActivityChart = ({ 
  approvedCount = 61,
  rejectedCount = 5,
  pendingCount = 4,
  activityData = [
    { status: "Approved", value: "৳45,403,313", count: 61, color: "bg-green-500", trend: "+12%", icon: CheckCircle, route: "/dashboard/paymentHistory" },
    { status: "Rejected", value: "৳841,394", count: 5, color: "bg-red-500", trend: "-3%", icon: XCircle, route: "/dashboard/manage-ticket" },
    { status: "Pending Review", value: "৳2,144,412", count: 4, color: "bg-yellow-500", trend: "+8%", icon: AlertCircle, route: "/dashboard/requested-bookings" }
  ]
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Today");
  const [liveData, setLiveData] = useState(activityData);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [filteredData, setFilteredData] = useState(activityData);
  
  const tabs = ["Today", "Last 7 days", "Last 30 days", "All time"];

    date-based data variations
  const getDataForPeriod = (period) => {
    const baseData = [...activityData];
    
    switch(period) {
      case "Today":
        return baseData.map(item => ({
          ...item,
          count: Math.floor(item.count * 0.1), // 10% of total for today
          value: `৳${Math.floor(parseInt(item.value.replace(/[৳,]/g, '')) * 0.1).toLocaleString()}`
        }));
      case "Last 7 days":
        return baseData.map(item => ({
          ...item,
          count: Math.floor(item.count * 0.4), // 40% of total for week
          value: `৳${Math.floor(parseInt(item.value.replace(/[৳,]/g, '')) * 0.4).toLocaleString()}`
        }));
      case "Last 30 days":
        return baseData.map(item => ({
          ...item,
          count: Math.floor(item.count * 0.8), // 80% of total for month
          value: `৳${Math.floor(parseInt(item.value.replace(/[৳,]/g, '')) * 0.8).toLocaleString()}`
        }));
      case "All time":
      default:
        return baseData; // Full data for all time
    }
  };

  // Update data when tab changes
  useEffect(() => {
    const newData = getDataForPeriod(activeTab);
    setFilteredData(newData);
    setLiveData(newData);
  }, [activeTab]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prevData => 
        prevData.map(item => ({
          ...item,
          count: item.count + Math.floor(Math.random() * 2), // Randomly add 0-1 transactions
          value: `৳${(parseInt(item.value.replace(/[৳,]/g, '')) + Math.floor(Math.random() * 10000)).toLocaleString()}`,
          // Preserve trend and icon properties
          trend: item.trend || '+0%',
          icon: item.icon,
          route: item.route
        }))
      );
      setLastUpdate(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getTotalTransactions = () => {
    return liveData.reduce((sum, item) => sum + item.count, 0);
  };

  const getTotalValue = () => {
    return liveData.reduce((sum, item) => sum + parseInt(item.value.replace(/[৳,]/g, '')), 0);
  };

  const handleExportReport = () => {
    // Simulate export functionality
    const reportData = {
      period: activeTab,
      generatedAt: new Date().toISOString(),
      totalTransactions: getTotalTransactions(),
      totalValue: getTotalValue(),
      data: liveData
    };
    
    // Create and download a JSON file (in a real app, this would be CSV/PDF)
    const dataStr = JSON.stringify(reportData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `transaction-report-${activeTab.toLowerCase().replace(' ', '-')}-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Transaction Activity</h3>
          <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
            <Clock className="w-3 h-3 mr-1" />
            Last updated: {lastUpdate.toLocaleTimeString()}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            ৳{getTotalValue().toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {getTotalTransactions()} transactions
          </div>
          <button 
            onClick={() => navigate('/dashboard/paymentHistory')}
            className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-1 flex items-center"
          >
            <Filter className="w-3 h-3 mr-1" />
            View All →
          </button>
        </div>
      </div>
      
      {/*   Status Cards */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {liveData.map((item, index) => {
          const IconComponent = item.icon || CheckCircle; // Default icon if undefined
          const trend = item.trend || '+0%'; // Default trend if undefined
          const isPositiveTrend = trend.startsWith('+');
          
          return (
            <div key={index} className={`${item.color} p-4 rounded-lg text-white relative overflow-hidden`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className="w-5 h-5 opacity-80" />
                  <div className="flex items-center text-xs">
                    {isPositiveTrend ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {trend}
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{item.count}</div>
                <div className="text-xs opacity-90">{item.status}</div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
            </div>
          );
        })}
      </div>
      
      {/* Tab Navigation */}
      <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 mb-4">
        <div className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <Calendar className="w-3 h-3 mr-1" />
          Period: {activeTab}
        </div> */}
      </div>
      
      {/*   Activity Table */}
      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
              <th className="font-medium text-left py-3">STATUS</th>
              <th className="font-medium text-right py-3">VALUE</th>
              <th className="font-medium text-right py-3">COUNT</th>
            </tr>
          </thead>
          <tbody>
            {liveData.map((item, index) => {
              const IconComponent = item.icon || CheckCircle; // Default icon if undefined
              return (
                <tr 
                  key={index} 
                  className="border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 ${item.color} rounded-full mr-3 flex items-center justify-center`}>
                        <IconComponent className="w-2 h-2 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.status}</span>
                    </div>
                  </td>
                  <td className="text-right py-4">
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.value}</span>
                  </td>
                  <td className="text-right py-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.count}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Summary Footer */}
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <span>Showing {activeTab.toLowerCase()} activity • {getTotalTransactions()} total transactions</span>
          <button 
            onClick={handleExportReport}
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
          >
            Export Report →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlaggedActivityChart;