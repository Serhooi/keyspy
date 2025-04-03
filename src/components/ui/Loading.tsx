'use client';

import { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };
  
  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white'
  };

  return (
    <div className="flex justify-center items-center">
      <svg 
        className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`} 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        ></circle>
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}

export function LoadingOverlay({ message = 'Loading...' }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <LoadingSpinner size="lg" color="primary" />
        <p className="mt-4 text-gray-700 font-medium">{message}</p>
      </div>
    </div>
  );
}

export function LoadingButton({ 
  children, 
  isLoading, 
  disabled, 
  className = '', 
  onClick 
}: {
  children: React.ReactNode;
  isLoading: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`relative inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors ${
        isLoading || disabled 
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      } ${className}`}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" color="white" />
        </span>
      )}
      <span className={isLoading ? 'invisible' : ''}>{children}</span>
    </button>
  );
}

export function ProgressBar({ 
  progress, 
  color = 'blue',
  showPercentage = true,
  height = 'h-2'
}: {
  progress: number;
  color?: 'blue' | 'green' | 'red' | 'yellow';
  showPercentage?: boolean;
  height?: string;
}) {
  const [displayProgress, setDisplayProgress] = useState(0);
  
  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600'
  };
  
  useEffect(() => {
    // Animate progress change
    const timer = setTimeout(() => {
      setDisplayProgress(progress);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`${colorClasses[color]} ${height} transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${displayProgress}%` }}
        ></div>
      </div>
      {showPercentage && (
        <div className="text-right text-xs text-gray-500 mt-1">
          {Math.round(displayProgress)}%
        </div>
      )}
    </div>
  );
}
