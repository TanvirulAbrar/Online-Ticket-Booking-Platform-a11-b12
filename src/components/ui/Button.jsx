import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  const isDisabled = disabled || loading;
  
  const getVariantClasses = (variant) => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-500 hover:bg-primary-600 text-white border-primary-500';
      case 'secondary':
        return 'bg-secondary-500 hover:bg-secondary-600 text-white border-secondary-500';
      case 'accent':
        return 'bg-accent-500 hover:bg-accent-600 text-white border-accent-500';
      case 'outline':
        return 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent';
      case 'ghost':
        return 'text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900 bg-transparent border-transparent';
      default:
        return 'bg-primary-500 hover:bg-primary-600 text-white border-primary-500';
    }
  };

  const getSizeClasses = (size) => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl border transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2';
  
  return (
    <button
      className={`${baseClasses} ${getVariantClasses(variant)} ${getSizeClasses(size)} ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin" />
      )}
      
      {!loading && Icon && iconPosition === 'left' && (
        <Icon className="h-4 w-4" />
      )}
      
      {children}
      
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="h-4 w-4" />
      )}
    </button>
  );
};

// Button variants for common use cases
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;
export const AccentButton = (props) => <Button variant="accent" {...props} />;
export const OutlineButton = (props) => <Button variant="outline" {...props} />;
export const GhostButton = (props) => <Button variant="ghost" {...props} />;

export default Button;