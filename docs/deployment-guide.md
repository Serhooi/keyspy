# KEYSPY Deployment Guide

This guide provides step-by-step instructions for deploying your KEYSPY platform to Vercel, making it accessible online.

## Prerequisites

Before deploying, ensure you have:

1. A [Vercel account](https://vercel.com/signup) (free tier is available)
2. Your KEYSPY codebase in a Git repository (GitHub, GitLab, or Bitbucket)
3. Completed any customizations you want for your initial deployment

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended for Non-Technical Users)

1. **Log in to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in to your account
   - If you don't have an account, create one using your GitHub, GitLab, or email

2. **Import Your Project**
   - Click the "Add New..." button and select "Project"
   - Connect to your Git provider if you haven't already
   - Select your KEYSPY repository from the list

3. **Configure Project**
   - Vercel will automatically detect Next.js and suggest optimal settings
   - Project Name: Enter a name for your deployment (e.g., "keyspy")
   - Framework Preset: Should be automatically set to "Next.js"
   - Root Directory: Leave as default (/)
   - Build and Output Settings: Leave as default

4. **Environment Variables (Optional)**
   - If you're using authentication or Stripe, add the required environment variables:
     - `NEXT_PUBLIC_API_URL`: Your API endpoint URL
     - `NEXT_AUTH_SECRET`: Secret for NextAuth.js authentication
     - `STRIPE_SECRET_KEY`: Your Stripe secret key for billing
     - `STRIPE_WEBHOOK_SECRET`: Secret for Stripe webhooks

5. **Deploy**
   - Click the "Deploy" button
   - Vercel will build and deploy your application
   - Once complete, you'll receive a URL where your application is live

### Option 2: Deploy via Vercel CLI (For Technical Users)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Log in to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to Your Project Directory**
   ```bash
   cd path/to/keyspy
   ```

4. **Deploy**
   ```bash
   vercel
   ```

5. **Follow the CLI Prompts**
   - Confirm deployment settings
   - Set environment variables if needed
   - Vercel will build and deploy your application

## Setting Up a Custom Domain

To use your own domain name instead of the Vercel-provided URL:

1. **Add Domain in Vercel Dashboard**
   - Go to your project in the Vercel dashboard
   - Click on "Settings" > "Domains"
   - Enter your domain name and click "Add"

2. **Configure DNS**
   - Follow Vercel's instructions to update your DNS settings
   - This typically involves adding CNAME or A records at your domain registrar
   - DNS changes may take up to 48 hours to propagate

## Automatic Deployments

One of the benefits of using Vercel is automatic deployments:

1. **Push to Main Branch**
   - When you push changes to the main branch of your repository, Vercel automatically rebuilds and deploys your application

2. **Preview Deployments**
   - When you create pull requests, Vercel creates preview deployments
   - This allows you to test changes before merging them to the main branch

## Troubleshooting Deployment Issues

If you encounter issues during deployment:

1. **Check Build Logs**
   - In the Vercel dashboard, go to your project
   - Click on the latest deployment
   - Review the build logs for errors

2. **Verify Environment Variables**
   - Ensure all required environment variables are correctly set

3. **Check for Unsupported Features**
   - Some features may require additional configuration on Vercel
   - Refer to [Vercel documentation](https://vercel.com/docs) for specific requirements

4. **Contact Support**
   - If you can't resolve the issue, contact Vercel support or consult the Vercel community forums
