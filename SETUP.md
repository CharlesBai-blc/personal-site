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

- `frontend/` - Next.js application (React frontend)
- `backend/` - Express.js API server
- Root `package.json` - Scripts to manage both projects

## Migration Notes

The original `src/` folder is still present. Once you've verified everything works with the new structure, you can delete:
- `src/` folder (all files moved to `frontend/src/`)
- Root `package.json` dependencies (moved to `frontend/package.json`)

## Next Steps

1. Test that both servers start correctly
2. Verify the GitHub contributions API works
3. Once confirmed, you can remove the old `src/` folder

