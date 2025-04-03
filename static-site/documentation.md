# KEYSPY Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Deployment Guide](#deployment-guide)
3. [Customization Guide](#customization-guide)
4. [User Manual](#user-manual)
5. [Developer Notes](#developer-notes)

## Introduction

KEYSPY is an AI-powered SEO and SEM platform built with Next.js and Tailwind CSS. It helps users analyze their website for SEO gaps, discover missing keywords, generate SEO-optimized content, and get ad copy suggestions based on competitor analysis.

This documentation provides comprehensive guidance on deploying, customizing, and using the KEYSPY platform.

## Deployment Guide

### Prerequisites
- Node.js 16.x or higher
- Git
- Vercel account (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/keyspy.git
   cd keyspy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

### Deployment to Vercel

1. **Create a Vercel account**
   If you don't have a Vercel account, sign up at [vercel.com](https://vercel.com).

2. **Install Vercel CLI (optional)**
   ```bash
   npm install -g vercel
   ```

3. **Deploy using Vercel Dashboard**
   - Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
   - Log in to your Vercel dashboard
   - Click "New Project"
   - Import your repository
   - Configure project settings (environment variables if needed)
   - Click "Deploy"

4. **Deploy using Vercel CLI**
   ```bash
   vercel login
   vercel
   ```

5. **Configure custom domain (optional)**
   - In the Vercel dashboard, go to your project settings
   - Navigate to "Domains"
   - Add your custom domain and follow the instructions

### Environment Variables

For production deployment, you may need to set the following environment variables:

- `NEXT_PUBLIC_API_URL`: Your API endpoint URL
- `NEXT_AUTH_SECRET`: Secret for NextAuth.js authentication
- `STRIPE_SECRET_KEY`: Your Stripe secret key for billing
- `STRIPE_WEBHOOK_SECRET`: Secret for Stripe webhooks

## Customization Guide

KEYSPY is designed to be easily customizable without coding knowledge. Here's how to customize various aspects of the platform:

### Brand Customization

All brand-related information is centralized in the `src/config.ts` file. You can edit this file to update:

1. **Brand Information**
   - Name
   - Tagline
   - Description
   - Logo type
   - Copyright text

2. **Contact Information**
   - Email
   - Phone
   - Address

3. **Social Media Links**
   - Twitter
   - Facebook
   - LinkedIn

4. **Feature Descriptions**
   - SEO Audit
   - Content Generator
   - Ad Intelligence
   - Analytics

5. **Pricing Plans**
   - Free
   - Pro
   - Enterprise

6. **Navigation Items**
   - Main navigation
   - Footer links

7. **Call to Action Buttons**
   - Primary CTA
   - Secondary CTA

### Theme Customization

KEYSPY includes a built-in theme customizer that allows you to change the visual appearance without editing code:

1. **Access Theme Customizer**
   - Click the settings icon in the bottom-right corner of any page

2. **Customize Theme Settings**
   - Brand Name: Change the displayed name of your application
   - Primary Color: Choose from blue, purple, green, indigo, or teal
   - Mode: Switch between light and dark mode
   - Font Family: Select from Inter, Roboto, Poppins, or Montserrat
   - Border Radius: Adjust the roundness of UI elements

3. **Apply Changes**
   - Click "Apply Changes" to save your customizations
   - Theme settings are stored in the browser's localStorage

### Advanced Customization

For more advanced customization that requires code editing:

1. **CSS Customization**
   - Edit `src/app/globals.css` to modify global styles
   - CSS variables are defined at the top of this file

2. **Component Customization**
   - UI components are located in `src/components/ui`
   - Layout components are in `src/components/layout`
   - Feature-specific components are in their respective directories

3. **Page Customization**
   - Pages are located in `src/app` directory
   - Each page can be customized independently

## User Manual

### Dashboard

The dashboard provides an overview of your SEO and SEM performance:

1. **Quick Actions**
   - SEO Audit: Analyze your website for SEO gaps
   - Content Generator: Create SEO-optimized content
   - Ad Intelligence: Get ad copy suggestions

2. **Analytics Overview**
   - SEO Performance: Track your website's SEO metrics
   - Content Distribution: View content performance statistics

3. **Recent Activity**
   - View recent actions and their results

### SEO Audit

The SEO Audit module helps you analyze your website for SEO opportunities:

1. **Website Analysis**
   - Enter your website URL
   - Select analysis depth (basic or comprehensive)
   - Click "Start Analysis"

2. **Results**
   - Review SEO issues and opportunities
   - Get actionable recommendations
   - Export results as PDF or CSV

### Content Generator

The AI Content Generator helps you create SEO-optimized content:

1. **Content Creation**
   - Enter target keywords
   - Select content type (blog post, product description, etc.)
   - Choose tone and length
   - Click "Generate Content"

2. **Content Editing**
   - Review and edit generated content
   - Check SEO score
   - Export or publish content

### Ad Intelligence

The Ad Intelligence module provides insights for your SEM campaigns:

1. **Competitor Analysis**
   - Enter competitor URLs or keywords
   - Select analysis parameters
   - Click "Analyze Competitors"

2. **Ad Suggestions**
   - Review ad copy suggestions
   - Compare with competitor ads
   - Export suggestions

## Developer Notes

### Project Structure

```
keyspy/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js pages
│   ├── components/     # React components
│   │   ├── advertising/  # Ad intelligence components
│   │   ├── auth/         # Authentication components
│   │   ├── content/      # Content generator components
│   │   ├── dashboard/    # Dashboard components
│   │   ├── layout/       # Layout components
│   │   ├── seo/          # SEO audit components
│   │   └── ui/           # UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── config.ts       # Configuration file
│   └── ...
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

### Technology Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Payment Processing**: Stripe
- **Deployment**: Vercel

### Adding New Features

To add new features to KEYSPY:

1. **Create Components**
   - Add new components in the appropriate directory
   - Follow the existing component structure

2. **Add Pages**
   - Create new pages in the `src/app` directory
   - Use the MainLayout component for consistent UI

3. **Update Configuration**
   - Add new feature information to `src/config.ts`
   - Update navigation items if needed

4. **Test Thoroughly**
   - Test on different devices and browsers
   - Ensure responsive design works correctly
