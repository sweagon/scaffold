import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tw-merge'; // Import twMerge

// Define the types for the button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger'; // Button types
  size?: 'small' | 'medium' | 'large'; // Button sizes
  className?: string; // Custom class names
  isLoading?: boolean; // For a loading state
  type?: 'button' | 'submit' | 'reset'; // Ensure proper button type for forms
  name?: string; // For form-related buttons, 'name' is important for form submission
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary', // Default variant
  size = 'medium', // Default size
  className = '',
  isLoading = false, // Default is not loading
  type = 'button', // Default to 'button' to prevent unintended form submission
  name,
  ...props
}) => {
  // Define base classes for the button component
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300';

  // Define styles for different variants
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  // Define styles for different sizes
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  // Define loading state styles
  const loadingStyles = 'opacity-50 cursor-not-allowed';

  // Combine all styles into a single string
  const mergedClassName = twMerge(
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${isLoading ? loadingStyles : ''} ${className}`
  );

  return (
    <button
      className={mergedClassName}
      type={type} // Correct type for the button
      name={name} // Add the 'name' attribute for form-related buttons
      disabled={isLoading} // Disable the button when loading
      aria-disabled={isLoading} // Accessible loading state
      {...props} // Spread any additional props (like onClick, aria-label, etc.)
    >
      {isLoading ? (
        <span>Loading...</span> // Custom loading text or spinner can be added here
      ) : (
        children // Display the button text/content
      )}
    </button>
  );
};

export default React.memo(Button);
