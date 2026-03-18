# IONIS Autism Screening Tool - Deployment Guide

This document outlines the standard operating procedures required to deploy and maintain the IONIS Autism Screening prototype to staging or production environments. 

## 1. Local Development
To run the full stack locally for testing or development:
1. **Backend**: 
   ```bash
   cd backend
   uv run python server.py
   ```
2. **Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```
   *The app will be accessible at [http://localhost:3000](http://localhost:3000).*

## 2. Infrastructure as Code (PaaS)
We have provided configuration files for one-click setup on the most popular Platform-as-a-Service environments:
* **Backend (Render.com)**: We've provided `render.yaml`. Connecting your GitHub repository to Render will automatically set up the web service, configure the Docker root context, and expose port 8001.
* **Frontend (Vercel.com)**: We've provided `frontend/vercel.json`. Connecting the `/frontend` directory as a Next.js project will successfully build the app automatically on every code push. 

## 3. Initial Cloud Setup
1. Push all source code to a private GitHub repository.
2. Link the repository to your Render account (Blueprint) and Vercel account.
3. Once the **Backend** finishes deploying on Render, copy its public HTTPS URL (e.g., `https://ionis-backend.onrender.com`).
4. In your Vercel Dashboard, navigate to the Frontend project -> **Settings -> Environment Variables**.
5. Add the key `NEXT_PUBLIC_API_BASE` and paste your Render URL.
6. Trigger a redeploy on Vercel so the frontend bakes the new API url into the static build.

## 4. Custom Domains (Using IONIS)
To route traffic from your custom IONIS domain to Vercel:
1. Go to Vercel -> Project Settings -> Domains.
2. Enter your custom domain (e.g., `screening.ionis-medical.com`).
3. Vercel will provide an A Record (IP Address) or CNAME.
4. Log into your IONIS DNS settings and add the provided A Record/CNAME pointing to Vercel.

## 5. Operations & Scaling
* **Logs**: The backend uses the Python `logging` module. Render has a "Logs" tab where you can view every request code and error trace.
* **Rollbacks**: Vercel offers instantaneous branch rollbacks if a bad UI update breaks the app.
* **Scaling**: Since the ML models run efficiently in memory without a persistent database, you can scale the backend horizontally by simply increasing instance counts manually in Render if demand spikes. 
