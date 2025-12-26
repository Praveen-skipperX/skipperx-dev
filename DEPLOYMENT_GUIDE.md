# Backend Deployment Guide

## Current Issue: Backend Not Deployed

Your frontend is live at `https://www.skipperx.io` but the backend is NOT deployed anywhere. You're running it locally on `localhost:5000`.

## Solution: Deploy Backend to Vercel

### Step 1: Deploy Backend to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your GitHub repository: `Praveen-skipperX/skipperx-dev`
4. **Configure Project:**
   - Framework Preset: **Other**
   - Root Directory: **backend**
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

### Step 2: Set Environment Variables in Vercel

Add these in **Project Settings → Environment Variables:**

```
NODE_ENV=production
MONGODB_URI=mongodb+srv://abbashaider:xkvUYtKPXGF1W91Q@cluster0.7daxcbm.mongodb.net/skipperx_db?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=e9f4b2a7d1c8e3f56b9a0d2f4c7e1a8b5d3g6h9j2k5m8n1p4q7r0s3t6u9v2x5y
RESEND_API_KEY=re_gcBhzWVh_Hux59Fgj8Dy3xy4VQtQcoUBj
MSG_CENTRAL_CUSTOMER_ID=C-ABDFD280480048B
MSG_CENTRAL_API_KEY=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLUFCREZEMjgwNDgwMDQ4QiIsImlhdCI6MTc2NjU3NzkwNCwiZXhwIjoxOTI0MjU3OTA0fQ.BEq5_tyeiq5Z8D7y_MeMoElpC7azLjcvuWnOHZSKNjw3JvhfxooOVihu-f7fpevdHf-jNQHqLLc_iPYI9_4Vow
MSG_CENTRAL_SENDER_ID=SKPRX
GOOGLE_CLIENT_ID=40624230566-nbo8b2if3nuqfauiemsffue73c7inpib.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
PORT=5000
```

**LEAVE THESE BLANK FOR NOW** (will set after deployment):
```
GOOGLE_CALLBACK_URL=
FRONTEND_URL=https://www.skipperx.io
```

### Step 3: Deploy and Get Backend URL

1. Click **Deploy**
2. Wait for deployment to complete
3. Vercel will give you a URL like: `https://your-backend.vercel.app`

### Step 4: Set Up Custom Domain (Recommended)

#### Option A: Use api.skipperx.io (Recommended)

1. In Vercel project settings, go to **Domains**
2. Add custom domain: `api.skipperx.io`
3. Vercel will show you DNS records to add
4. Go to your DNS provider (where skipperx.io is registered)
5. Add the CNAME record:
   ```
   Type: CNAME
   Name: api
   Value: cname.vercel-dns.com
   ```
6. Wait for DNS to propagate (5-30 minutes)

#### Option B: Use Vercel subdomain
Just use the Vercel URL: `https://your-backend.vercel.app`

### Step 5: Update Environment Variables

Once you have your backend URL (either `api.skipperx.io` or vercel URL), update these in Vercel:

```
GOOGLE_CALLBACK_URL=https://api.skipperx.io/api/auth/google/callback
```

Or if using Vercel URL:
```
GOOGLE_CALLBACK_URL=https://your-backend.vercel.app/api/auth/google/callback
```

### Step 6: Update Google Console

Go to [Google Cloud Console](https://console.cloud.google.com/) and update redirect URIs to:
- `https://api.skipperx.io/api/auth/google/callback`

Or if using Vercel URL:
- `https://your-backend.vercel.app/api/auth/google/callback`

### Step 7: Update Frontend Environment Variables

In your frontend Vercel project (www.skipperx.io), set:

```
REACT_APP_API_URL=https://api.skipperx.io/api
REACT_APP_GOOGLE_AUTH_URL=https://api.skipperx.io/api/auth/google
```

Or if using Vercel URL:
```
REACT_APP_API_URL=https://your-backend.vercel.app/api
REACT_APP_GOOGLE_AUTH_URL=https://your-backend.vercel.app/api/auth/google
```

### Step 8: Redeploy Frontend

After updating frontend env variables in Vercel, trigger a new deployment.

---

## Quick Fix: If Backend Already Deployed

If your backend is already deployed somewhere, just tell me the URL and I'll update all the configuration files.

**Is your backend deployed at:**
- `api.skipperx.io` ?
- Some Vercel URL?
- Another hosting service?

Let me know and I'll fix all the URLs immediately!
