# E-Commerce Platform

## Project Structure
- `/backend` - Laravel API
- `/frontend` - Next.js Frontend

## Setup Instructions

### Backend Setup
1. Navigate to backend directory: `cd backend`
2. Install dependencies: `composer install`
3. Copy .env.example: `cp .env.example .env`
4. Generate key: `php artisan key:generate`
5. Configure database in .env
6. Run migrations: `php artisan migrate`

### Frontend Setup
1. Navigate to frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Copy .env.example: `cp .env.example .env.local`
4. Start development server: `npm run dev`

## Development Workflow
1. Backend API development: `php artisan serve`
2. Frontend development: `npm run dev`

## Code Style
- Frontend uses Prettier for formatting
- Commits are automatically linted using husky