import React from 'react';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

const FormField = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  success,
  loading = false,
  placeholder,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const inputId = `field-${label?.toLowerCase().replace(/\s+/g, '-')}`;
  
  const getInputClasses = () => {
    let classes = 'w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1';
    
    if (error) {
      classes += ' border-red-500 focus:border-red-500 focus:ring-red-500';
    } else if (success) {
      classes += ' border-accent-500 focus:border-accent-500 focus:ring-accent-500';
    } else {
      classes += ' border-neutral-300 dark:border-neutral-600 focus:border-primary-500';
    }
    
    classes += ' bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100';
    
    if (disabled || loading) {
      classes += ' opacity-50 cursor-not-allowed';
    }
    
    return classes;
  };
  
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={getInputClasses()}
          {...props}
        />
        
        {/* Loading spinner */}
        {loading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Loader2 className="h-4 w-4 animate-spin text-neutral-400" />
          </div>
        )}
        
        {/* Success icon */}
        {success && !loading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <CheckCircle className="h-4 w-4 text-accent-500" />
          </div>
        )}
        
        {/* Error icon */}
        {error && !loading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <AlertCircle className="h-4 w-4 text-red-500" />
          </div>
        )}
      </div>
      
      {/* Error message */}
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
          <AlertCircle className="h-3 w-3 flex-shrink-0" />
          {error}
        </p>
      )}
      
      {/* Success message */}
      {success && (
        <p className="text-sm text-accent-600 dark:text-accent-400 flex items-center gap-1">
          <CheckCircle className="h-3 w-3 flex-shrink-0" />
          {success}
        </p>
      )}
    </div>
  );
};

export default FormField;