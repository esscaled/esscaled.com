# Vercel Deployment & Domain Configuration Guide

## 1. Vercel Deployment Issue
If you encounter the error: **"Your domain is properly configured, but you don't have a production deployment"**

**Resolution:**
- The project includes a proper Vite production build configuration.
- The `package.json` scripts are correctly set:
  - `"dev": "vite"`
  - `"build": "vite build"`
  - `"preview": "vite preview"`
- The output directory is explicitly set to `dist` in `vite.config.ts`.
- When deploying to Vercel, ensure the **Build Command** is set to `npm run build` and the **Output Directory** is set to `dist`.
- Trigger a new deployment in the Vercel dashboard.

## 2. Domain / SSL Error Fix
If the site currently shows: **`net::ERR_CERT_COMMON_NAME_INVALID`**

**Steps to resolve:**
1. **Ensure Vercel is the domain DNS provider or correctly connected**: Check your domain registrar (e.g., GoDaddy, Namecheap) and ensure the nameservers are pointing to Vercel, or that the A/CNAME records are correctly configured to point to Vercel's IP/domain.
2. **Verify domain in Vercel dashboard**: Go to your Vercel project settings -> Domains. Ensure the domain is added and shows a valid configuration status.
3. **Ensure the deployment is marked as Production**: SSL certificates are typically issued for production deployments. Make sure you have a successful production deployment on the `main` branch.
4. **Wait for SSL issuance**: SSL should be automatically issued by Let's Encrypt after a successful deployment and DNS propagation. This can sometimes take a few minutes to an hour.

## 3. Environment Variables
Ensure the following environment variables are added in your Vercel project settings (Settings -> Environment Variables) for the email notification system to work:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `OWNER_EMAIL`
