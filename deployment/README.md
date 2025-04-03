# KEYSPY Deployment Configuration

This directory contains the necessary configuration files for deploying KEYSPY to Vercel.

## Files

- `vercel.json` - Main configuration file for Vercel deployment
- `.github/workflows/vercel-deploy.yml` - GitHub Actions workflow for CI/CD

## Vercel Configuration

The `vercel.json` file configures how Vercel builds and deploys the application:

- Framework: Next.js
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: `.next`

## CI/CD Pipeline

The GitHub Actions workflow in `.github/workflows/vercel-deploy.yml` sets up continuous integration and deployment:

- Runs on push to main branch
- Runs tests before deployment
- Deploys to Vercel automatically if tests pass

## Environment Variables

For production deployment, set these environment variables in Vercel:

- `NEXT_PUBLIC_API_URL`: Your API endpoint URL
- `NEXT_AUTH_SECRET`: Secret for NextAuth.js authentication
- `STRIPE_SECRET_KEY`: Your Stripe secret key for billing
- `STRIPE_WEBHOOK_SECRET`: Secret for Stripe webhooks
