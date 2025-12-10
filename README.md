# Personal Site - Monorepo

A full-stack personal website with separated frontend and backend.

## Structure

```
psite/
├── frontend/     # Next.js frontend application
├── backend/      # Express.js backend API
└── package.json  # Root package.json with scripts
```

## Setup

### 1. Install Dependencies

```bash
npm run install:all
```

Or install individually:
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

### 2. Configure Environment Variables

**Backend** (`backend/.env`):
```env
GITHUB_TOKEN=your_github_token_here
PORT=3001
FRONTEND_URL=http://localhost:3000
```

**Frontend** (`frontend/.env.local`):
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

### 3. Run Development Servers

Run both frontend and backend:
```bash
npm run dev
```

Or run individually:
```bash
# Frontend (port 3000)
npm run dev:frontend

# Backend (port 3001)
npm run dev:backend
```

## Available Scripts

### Root Level
- `npm run dev` - Run both frontend and backend
- `npm run build` - Build both frontend and backend
- `npm run install:all` - Install dependencies for all projects

### Frontend
- `cd frontend && npm run dev` - Start Next.js dev server
- `cd frontend && npm run build` - Build for production
- `cd frontend && npm run start` - Start production server

### Backend
- `cd backend && npm run dev` - Start Express dev server with hot reload
- `cd backend && npm run build` - Compile TypeScript
- `cd backend && npm run start` - Start production server

## Tech Stack

**Frontend:**
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

**Backend:**
- Express.js
- TypeScript
- Node.js
