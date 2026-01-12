import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ZAxis,
  Treemap,
  FunnelChart,
  Funnel,
  LabelList
} from 'recharts';

// Combined Chart (Bar + Line)
export const CombinedChart = ({ data, title = "Revenue & Tickets Analysis" }) => {
  const chartData = [
    { month: 'Jan', revenue: 45000, tickets: 120, growth: 5 },
    { month: 'Feb', revenue: 52000, tickets: 140, growth: 15 },
    { month: 'Mar', revenue: 48000, tickets: 130, growth: -8 },
    { month: 'Apr', revenue: 61000, tickets: 165, growth: 27 },
    { month: 'May', revenue: 55000, tickets: 150, growth: -10 },
    { month: 'Jun', revenue: 67000, tickets: 180, growth: 22 }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Revenue</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Tickets</span>
          </div>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              className="text-xs text-gray-400"
            />
            <YAxis 
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              className="text-xs text-gray-400"
            />
            <YAxis 
              yAxisId="right" 
              orientation="right"
              axisLine={false}
              tickLine={false}
              className="text-xs text-gray-400"
            />
            <Tooltip 
              formatter={(value, name) => [
                name === 'revenue' ? `৳${value.toLocaleString()}` : value.toLocaleString(),
                name === 'revenue' ? 'Revenue' : name === 'tickets' ? 'Tickets Sold' : 'Growth %'
              ]}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar yAxisId="left" dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="tickets" 
              stroke="#10b981" 
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Scatter Plot for User Behavior Analysis
export const UserBehaviorScatter = ({ data, title = "User Engagement Analysis" }) => {
  const scatterData = [
    { x: 100, y: 200, z: 200, name: 'New Users' },
    { x: 120, y: 100, z: 260, name: 'Active Users' },
    { x: 170, y: 300, z: 400, name: 'Premium Users' },
    { x: 140, y: 250, z: 280, name: 'Regular Users' },
    { x: 150, y: 400, z: 500, name: 'VIP Users' },
    { x: 110, y: 280, z: 200, name: 'Casual Users' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 leading-tight">
          {title}
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Behavior Analysis
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="Sessions"
              axisLine={false}
              tickLine={false}
              className="text-xs text-gray-400"
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="Revenue"
              axisLine={false}
              tickLine={false}
              className="text-xs text-gray-400"
            />
            <ZAxis type="number" dataKey="z" range={[60, 400]} name="Engagement" />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }}
              formatter={(value, name) => [value, name]}
              labelFormatter={(label) => `User Type: ${label}`}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Scatter name="Users" data={scatterData} fill="#8b5cf6" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Funnel Chart for Conversion Analysis
export const ConversionFunnel = ({ data, title = "Booking Conversion Funnel" }) => {
  const funnelData = [
    { name: 'Visitors', value: 1000, fill: '#3b82f6' },
    { name: 'Interested', value: 750, fill: '#10b981' },
    { name: 'Added to Cart', value: 500, fill: '#f59e0b' },
    { name: 'Initiated Checkout', value: 300, fill: '#ef4444' },
    { name: 'Completed Purchase', value: 200, fill: '#8b5cf6' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 leading-tight">
          {title}
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Conversion Analysis
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip 
              formatter={(value, name) => [`${value} users`, name]}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Funnel
              dataKey="value"
              data={funnelData}
              isAnimationActive
            >
              <LabelList position="center" fill="#fff" stroke="none" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
      
      {/* Conversion Rates */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">20%</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Overall Conversion</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">66.7%</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Checkout Completion</div>
        </div>
      </div>
    </div>
  );
};

// Treemap for Category Analysis
export const CategoryTreemap = ({ data, title = "Ticket Categories" }) => {
  const treeData = [
    { name: 'Bus Tickets', size: 3500, fill: '#3b82f6' },
    { name: 'Train Tickets', size: 2800, fill: '#10b981' },
    { name: 'Flight Tickets', size: 1200, fill: '#f59e0b' },
    { name: 'Event Tickets', size: 900, fill: '#ef4444' },
    { name: 'Movie Tickets', size: 600, fill: '#8b5cf6' },
    { name: 'Sports Tickets', size: 400, fill: '#06b6d4' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 leading-tight">
          {title}
        </h3>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
  <>
    <Treemap
      data={treeData}
      dataKey="size"
      ratio={4 / 3}
      stroke="#fff"
      strokeWidth={2}
    />
    <Tooltip
      formatter={(value) => [`${value} tickets`, 'Sales']}
      contentStyle={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
      }}
    />
  </>
</ResponsiveContainer>

      </div>
    </div>
  );
};

export default {
  CombinedChart,
  UserBehaviorScatter,
  ConversionFunnel,
  CategoryTreemap
};