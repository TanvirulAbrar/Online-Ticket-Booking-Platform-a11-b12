import React from 'react';

const ActiveDevicesChart = ({ 
  currentHour = 5192, 
  previousHour = 4711,
  deviceData = [
    { name: "Web Users", count: 3705, percentage: 81, color: "#3b82f6" },
    { name: "Mobile Users", count: 1025, percentage: 21, color: "#10b981" },
    { name: "Desktop App", count: 462, percentage: 8, color: "#8b5cf6" }
  ],
  decayedDevices = 43,
  newDevices = 221
}) => {
  const total = deviceData.reduce((sum, device) => sum + device.count, 0);
  
  // Calculate stroke-dasharray for each segment
  const circumference = 2 * Math.PI * 15.9155;
  
  // Recalculate percentages to ensure they add up to 100%
  const normalizedData = deviceData.map(device => ({
    ...device,
    percentage: total > 0 ? (device.count / total) * 100 : 0
  }));
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Active Users</h3>
        <button className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          Last hour
          <span className="ml-1 text-base">▼</span>
        </button>
      </div>
      
      <div className="flex items-end space-x-8 mt-4 mb-6">
        <div>
          <div className="text-4xl font-bold text-gray-800 dark:text-white">
            {currentHour.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">this period</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-gray-400 dark:text-gray-500">
            {previousHour.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">previous period</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Device Type Chart */}
        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">User Distribution</h4>
          <div className="relative w-28 h-28 mx-auto">
            <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
              {/* Background circle */}
              <path
                className="text-gray-100 dark:text-gray-700"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
              />
              
              {/* Device segments */}
              {normalizedData.map((device, index) => {
                const dashArray = (device.percentage / 100) * circumference;
                const previousSegments = normalizedData.slice(0, index);
                const dashOffset = -previousSegments.reduce((sum, seg) => sum + (seg.percentage / 100) * circumference, 0);
                
                return (
                  <path
                    key={index}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={device.color}
                    strokeDasharray={`${dashArray}, ${circumference}`}
                    strokeDashoffset={dashOffset}
                    strokeWidth="4.5"
                  />
                );
              })}
            </svg>
          </div>
          
          {/* Legend */}
          <div className="mt-4 space-y-1">
            {normalizedData.map((device, index) => (
              <div key={index} className="flex justify-between text-xs">
                <div className="flex items-center">
                  <span 
                    className="w-2 h-2 rounded-full mr-1.5" 
                    style={{ backgroundColor: device.color }}
                  ></span>
                  <span className="text-gray-600 dark:text-gray-400">{device.name}</span>
                </div>
                <div className="text-gray-800 dark:text-gray-200 font-medium">
                  {device.count.toLocaleString()} 
                  <span className="text-gray-400 font-normal ml-1">{Math.round(device.percentage)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex flex-col space-y-6 justify-center">
          <div>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">Inactive Users</h4>
            <div className="flex items-center mt-1">
              <span className="text-3xl font-bold text-gray-700 dark:text-gray-200">{decayedDevices}</span>
              <span className="ml-2 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs font-bold px-1.5 py-0.5 rounded">+3%</span>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Users inactive for 30+ days</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">New Users</h4>
            <div className="flex items-center mt-1">
              <span className="text-3xl font-bold text-gray-700 dark:text-gray-200">{newDevices}</span>
              <span className="ml-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold px-1.5 py-0.5 rounded">+19%</span>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">New users registered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveDevicesChart;