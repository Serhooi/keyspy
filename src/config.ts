// config.ts - Central configuration file for KEYSPY
// This file contains all the editable text and configuration variables

export const AppConfig = {
  // Brand Information
  brand: {
    name: 'KEYSPY',
    tagline: 'AI-Powered SEO & SEM Platform',
    description: 'Analyze your website, discover keywords, and generate SEO-optimized content with the power of AI.',
    logoType: 'zap', // Uses Lucide icon name
    copyright: `© ${new Date().getFullYear()} KEYSPY. All rights reserved.`,
  },
  
  // Contact Information
  contact: {
    email: 'support@keyspy.example.com',
    phone: '+1 (555) 123-4567',
    address: '123 AI Avenue, Tech City, TC 12345',
  },
  
  // Social Media Links
  social: {
    twitter: 'https://twitter.com/keyspy',
    facebook: 'https://facebook.com/keyspy',
    linkedin: 'https://linkedin.com/company/keyspy',
  },
  
  // Feature Descriptions
  features: {
    seoAudit: {
      title: 'SEO Audit',
      description: 'Analyze your website for SEO gaps and discover opportunities to improve your rankings.',
      icon: 'search',
    },
    contentGenerator: {
      title: 'AI Content Generator',
      description: 'Create SEO-optimized content and articles with our advanced AI technology.',
      icon: 'fileText',
    },
    adIntelligence: {
      title: 'Ad Intelligence',
      description: 'Get ad copy suggestions based on competitor analysis and improve your SEM campaigns.',
      icon: 'target',
    },
    analytics: {
      title: 'Analytics Dashboard',
      description: 'Track your SEO performance and content effectiveness in one place.',
      icon: 'barChart2',
    },
  },
  
  // Pricing Plans
  plans: {
    free: {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic SEO audit',
        '3 AI-generated articles per month',
        'Basic analytics',
      ],
    },
    pro: {
      name: 'Pro',
      price: '$49',
      period: 'per month',
      features: [
        'Advanced SEO audit',
        'Unlimited AI-generated articles',
        'Ad intelligence',
        'Advanced analytics',
        'Priority support',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: '$199',
      period: 'per month',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Team collaboration',
        'Dedicated account manager',
        'API access',
      ],
    },
  },
  
  // Navigation Items
  navigation: {
    main: [
      { name: 'Dashboard', href: '/dashboard', icon: 'home' },
      { name: 'SEO Audit', href: '/seo-audit', icon: 'search' },
      { name: 'Content Generator', href: '/content', icon: 'penTool' },
      { name: 'Ad Intelligence', href: '/advertising', icon: 'target' },
      { name: 'Analytics', href: '/analytics', icon: 'barChart2' },
      { name: 'Reports', href: '/reports', icon: 'fileText' },
      { name: 'Settings', href: '/settings', icon: 'settings' },
    ],
    footer: [
      { name: 'About', href: '/about' },
      { name: 'Features', href: '/#features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ],
  },
  
  // Call to Action Buttons
  cta: {
    primary: {
      text: 'Get Started',
      href: '/dashboard',
    },
    secondary: {
      text: 'Learn More',
      href: '/about',
    },
  },
  
  // Default Theme Settings
  defaultTheme: {
    primaryColor: 'blue',
    mode: 'light',
    fontFamily: 'inter',
    borderRadius: 'md',
  },
};

// Helper function to get config values
export function getConfig(path: string): string | number | object | null {
  return path.split('.').reduce((prev: any, curr) => {
    return prev ? prev[curr] : null;
  }, AppConfig);
}

// Export default config
export default AppConfig;
