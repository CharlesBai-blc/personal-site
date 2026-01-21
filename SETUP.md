# Setup Instructions

## Quick Start

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up environment variables:**

   Create `backend/.env`:
   ```env
   GITHUB_TOKEN=your_github_token_here
   PORT=3001
   FRONTEND_URL=http://localhost:3000
   ```

   Create `frontend/.env.local`:
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
   ```

3. **Run both servers:**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend on http://localhost:3000
   - Backend on http://localhost:3001

## Project Structure

```
psite/
├── frontend/     # Next.js frontend application
│   └── src/
│       ├── app/          # Pages and layouts
│       └── components/   # Reusable components
├── backend/      # Express.js backend API
│   └── src/
│       ├── routes/       # API routes
│       └── server.ts     # Express server
└── package.json  # Root package.json with scripts
```

## GitHub Token

To enable the GitHub contributions heatmap:

1. Go to https://github.com/settings/tokens
2. Generate a new token (classic) with `public_repo` scope
3. Add it to `backend/.env` as `GITHUB_TOKEN`
