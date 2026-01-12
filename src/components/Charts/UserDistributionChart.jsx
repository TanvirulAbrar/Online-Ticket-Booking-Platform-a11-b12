import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const UserDistributionChart = ({ 
  currentHour = 5192, 
  previousHour = 4711,
  deviceData = [
    { name: "Web Users", count: 3705, percentage: 71, color: "#3b82f6" },
    { name: "Mobile Users", count: 1025, percentage: 21, color: "#10b981" },
    { name: "Desktop App", count: 462, percentage: 8, color: "#8b5cf6" }
  ],
  decayedDevices = 43,
  newDevices = 221
}) => {
  const total = deviceData.reduce((sum, device) => sum + device.count, 0);
  
  // Prepare data for Recharts
  const chartData = deviceData.map(device => ({
    name: device.name,
    value: device.count,
    percentage: total > 0 ? Math.round((device.count / total) * 100) : 0,
    color: device.color
  }));

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    if (percent < 0.05) return null; // Don't show label if less than 5%
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-xs font-medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Active Users</h3>
        <button className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          Last period
          <span className="ml-1 text-base">▼</span>
        </button>
      </div>
      
      <div className="flex items-end space-x-8 mt-4 mb-6">
        <div>
          <div className="text-4xl font-bold text-gray-800 dark:text-white">
            {currentHour.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">current period</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-gray-400 dark:text-gray-500">
            {previousHour.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">previous period</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {/* User Distribution Chart */}
        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">User Distribution</h4>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomLabel}
                  outerRadius={50}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name) => [value.toLocaleString(), name]}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Legend */}
          <div className="mt-2 space-y-1">
            {chartData.map((device, index) => (
              <div key={index} className="flex justify-between text-xs">
                <div className="flex items-center">
                  <span 
                    className="w-2 h-2 rounded-full mr-1.5" 
                    style={{ backgroundColor: device.color }}
                  ></span>
                  <span className="text-gray-600 dark:text-gray-400">{device.name}</span>
                </div>
                <div className="text-gray-800 dark:text-gray-200 font-medium">
                  {device.value.toLocaleString()} 
                  <span className="text-gray-400 font-normal ml-1">{device.percentage}%</span>
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

export default UserDistributionChart;