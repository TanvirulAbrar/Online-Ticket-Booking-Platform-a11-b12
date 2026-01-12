import React from 'react';

const LiveChart = ({ 
  title, 
  data, 
  color = "#3b82f6", 
  strokeColor = "#93c5fd", 
  changePercent = "+7%", 
  isPositive = true,
  height = "h-64",
  showTimeLabels = true 
}) => {
    //SVG path from data points
  const generatePath = (points, viewBoxWidth = 400, viewBoxHeight = 150) => {
    if (!points || points.length === 0) return "";
    
    const stepX = viewBoxWidth / (points.length - 1);
    const maxValue = Math.max(...points);
    const minValue = Math.min(...points);
    const range = maxValue - minValue || 1;
    
    return points
      .map((point, index) => {
        const x = index * stepX;
        const y = viewBoxHeight - ((point - minValue) / range) * (viewBoxHeight - 20) - 10;
        return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
      })
      .join(' ');
  };

   // dashed background path
  const generateDashedPath = (points, viewBoxWidth = 400, viewBoxHeight = 150) => {
    if (!points || points.length === 0) return "";
    
    const stepX = viewBoxWidth / (points.length - 1);
    const maxValue = Math.max(...points);
    const minValue = Math.min(...points);
    const range = maxValue - minValue || 1;
    
    return points
      .map((point, index) => {
        const x = index * stepX;
        const y = viewBoxHeight - ((point - minValue + 5) / range) * (viewBoxHeight - 20) - 10;
        return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
      })
      .join(' ');
  };

  const timeLabels = showTimeLabels ? 
    ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "00:00"] :
    ["00:00", "06:00", "12:00", "18:00", "00:00"];

  const maxValue = data ? Math.max(...data) : 0;
  const peakIndex = data ? data.indexOf(maxValue) : 0;
  const peakX = peakIndex * (400 / (data?.length - 1 || 1));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
            <span className={`${isPositive ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'} text-xs font-bold px-2 py-0.5 rounded`}>
              {changePercent}
            </span>
          </div>
          <div className="flex items-center mt-1">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Live</span>
          </div>
        </div>
        <div className="relative">
          <button className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Today
            <span className="ml-1 text-base">▼</span>
          </button>
        </div>
      </div>
      
      <div className={`relative ${height} w-full mt-8`}>
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150">
          {/* Grid line */}
          <line 
            className="dark:stroke-gray-700" 
            stroke="#e5e7eb" 
            strokeWidth="1" 
            x1="0" 
            x2="400" 
            y1="150" 
            y2="150"
          />
          
          {/* Dashed background line */}
          {data && (
            <path
              fill="none"
              opacity="0.6"
              d={generateDashedPath(data)}
              stroke={strokeColor}
              strokeDasharray="4,4"
              strokeWidth="2"
            />
          )}
          
          {/* Main line */}
          {data && (
            <path
              fill="none"
              d={generatePath(data)}
              stroke={color}
              strokeWidth="3"
            />
          )}
          
          {/* Peak point */}
          {data && (
            <>
              <circle cx={peakX} cy={150 - ((maxValue - Math.min(...data)) / (Math.max(...data) - Math.min(...data) || 1)) * 130 - 10} fill={color} r="3" />
              <text 
                className="dark:fill-gray-400" 
                fill="#6b7280" 
                fontSize="10" 
                textAnchor="middle" 
                x={peakX} 
                y={150 - ((maxValue - Math.min(...data)) / (Math.max(...data) - Math.min(...data) || 1)) * 130 - 20}
              >
                {maxValue.toLocaleString()}
              </text>
            </>
          )}
        </svg>
        
        {/* Time labels */}
        <div className="flex justify-between text-[10px] text-gray-400 mt-2 px-1">
          {timeLabels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveChart;