import React from 'react';

const OptimizedLoading = React.memo(({ 
  type = 'default', 
  size = 'medium', 
  message = 'Loading...' 
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  const containerClasses = {
    small: 'p-2',
    medium: 'p-4',
    large: 'p-8'
  };

  if (type === 'skeleton') {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    );
  }

  if (type === 'spinner') {
    return (
      <div className={`flex items-center justify-center ${containerClasses[size]}`}>
        <div className={`${sizeClasses[size]} border-2 border-blue-200 dark:border-blue-800 border-t-blue-500 rounded-full animate-spin`}></div>
        {message && (
          <span className="ml-3 text-gray-600 dark:text-gray-400 animate-pulse">{message}</span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${containerClasses[size]}`}>
      <div className={`${sizeClasses[size]} border-2 border-blue-200 dark:border-blue-800 border-t-blue-500 rounded-full animate-spin`}></div>
      {message && (
        <span className="ml-3 text-gray-600 dark:text-gray-400">{message}</span>
      )}
    </div>
  );
});

OptimizedLoading.displayName = 'OptimizedLoading';

export default OptimizedLoading;