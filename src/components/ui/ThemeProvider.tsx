'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define theme types
type ThemeColor = 'blue' | 'purple' | 'green' | 'indigo' | 'teal';
type ThemeMode = 'light' | 'dark';
type FontFamily = 'inter' | 'roboto' | 'poppins' | 'montserrat';

// Theme configuration interface
interface ThemeConfig {
  primaryColor: ThemeColor;
  mode: ThemeMode;
  fontFamily: FontFamily;
  borderRadius: 'sm' | 'md' | 'lg' | 'xl';
  brandName: string;
}

// Default theme configuration
const defaultTheme: ThemeConfig = {
  primaryColor: 'blue',
  mode: 'light',
  fontFamily: 'inter',
  borderRadius: 'md',
  brandName: 'KEYSPY',
};

// Create context
interface ThemeContextType {
  theme: ThemeConfig;
  updateTheme: (updates: Partial<ThemeConfig>) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize theme from localStorage if available, otherwise use default
  const [theme, setTheme] = useState<ThemeConfig>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('keyspy-theme');
      return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
    }
    return defaultTheme;
  });

  // Update theme function
  const updateTheme = (updates: Partial<ThemeConfig>) => {
    const newTheme = { ...theme, ...updates };
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('keyspy-theme', JSON.stringify(newTheme));
    }
  };

  // Reset theme function
  const resetTheme = () => {
    setTheme(defaultTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('keyspy-theme', JSON.stringify(defaultTheme));
    }
  };

  // Apply theme to document
  useEffect(() => {
    // Apply dark/light mode
    if (theme.mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Apply primary color as CSS variables
    const root = document.documentElement;
    root.style.setProperty('--primary-color', getPrimaryColorHex(theme.primaryColor));
    root.style.setProperty('--primary-light', getPrimaryLightHex(theme.primaryColor));
    root.style.setProperty('--primary-dark', getPrimaryDarkHex(theme.primaryColor));
    
    // Apply border radius
    root.style.setProperty('--border-radius', getBorderRadiusValue(theme.borderRadius));
    
    // Apply font family
    document.body.className = getFontFamilyClass(theme.fontFamily);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook for using theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Helper functions for theme values
function getPrimaryColorHex(color: ThemeColor): string {
  const colors = {
    blue: '#3b82f6',
    purple: '#8b5cf6',
    green: '#10b981',
    indigo: '#6366f1',
    teal: '#14b8a6',
  };
  return colors[color];
}

function getPrimaryLightHex(color: ThemeColor): string {
  const colors = {
    blue: '#93c5fd',
    purple: '#c4b5fd',
    green: '#6ee7b7',
    indigo: '#a5b4fc',
    teal: '#5eead4',
  };
  return colors[color];
}

function getPrimaryDarkHex(color: ThemeColor): string {
  const colors = {
    blue: '#1d4ed8',
    purple: '#7c3aed',
    green: '#059669',
    indigo: '#4f46e5',
    teal: '#0d9488',
  };
  return colors[color];
}

function getBorderRadiusValue(radius: string): string {
  const radiusValues = {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
  };
  return radiusValues[radius as keyof typeof radiusValues];
}

function getFontFamilyClass(font: FontFamily): string {
  const fontClasses = {
    inter: 'font-inter',
    roboto: 'font-roboto',
    poppins: 'font-poppins',
    montserrat: 'font-montserrat',
  };
  return fontClasses[font];
}
