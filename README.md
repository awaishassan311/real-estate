# Real Estate Platform

A full-stack real estate platform built with Next.js, TypeScript, Express, Sequelize, and PostgreSQL. The project combines a polished property browsing experience with authentication, profile management, dashboard screens, and a configurable backend API.

## Highlights

- Multi-page real estate experience with home, listing, detail, agency, agent, blog, pricing, and dashboard routes.
- Property search and filtering flows for listing pages.
- Authentication API with signup, login, JWT issuance, and protected profile routes.
- User dashboard screens for profile, saved searches, favorites, property management, reviews, messages, and memberships.
- PostgreSQL persistence through Sequelize and Sequelize TypeScript models.
- Environment-based frontend and backend configuration for local development and deployment.
- Production build, lint, and backend typecheck workflows.

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | Next.js 14, React 18, TypeScript |
| Styling | SCSS, Bootstrap 5, Bootstrap Icons, Font Awesome |
| State and forms | Redux Toolkit, React Redux, React Hook Form, Yup |
| UI utilities | Fancyapps, React Slick, Chart.js, React Toastify |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL, Sequelize, Sequelize TypeScript |
| Auth | JWT, bcrypt |
| Contact | EmailJS browser SDK |

## Project Structure

```text
.
|-- public/                    # Static assets, fonts, images, compiled CSS
|-- src/
|   |-- app/                   # Next.js App Router pages and layout
|   |-- components/            # Reusable UI, forms, listings, dashboard modules
|   |-- data/                  # Listing, blog, menu, FAQ, agent, and project data
|   |-- hooks/                 # Property filtering and UI hooks
|   |-- layouts/               # Header, footer, and wrapper components
|   |-- redux/                 # Redux store and slices
|   |-- styles/                # Main SCSS entry
|   |-- types/                 # Local TypeScript declarations
|   `-- utils/                 # API client and browser utilities
`-- real-estate-backend/
    |-- config/                # Sequelize CLI configuration
    |-- migrations/            # Database migrations
    |-- models/                # Sequelize CLI model output
    `-- src/
        |-- config/            # Runtime database connection
        |-- controllers/       # Auth controller
        |-- middleware/        # JWT middleware
        |-- models/            # Sequelize TypeScript models
        |-- routes/            # Auth and protected API routes
        |-- app.ts             # Express app configuration
        `-- server.ts          # API startup entry
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- PostgreSQL

### 1. Clone the repository

```bash
git clone https://github.com/awaishassan311/real-estate.git
cd real-estate
```

### 2. Configure environment variables

Create the frontend environment file:

```bash
cp .env.example .env.local
```

Create the backend environment file:

```bash
cd real-estate-backend
cp .env.example .env
```

Update the backend `.env` file with your PostgreSQL credentials and a long random `JWT_SECRET`.

### 3. Install dependencies

Install frontend dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd real-estate-backend
npm install
```

### 4. Prepare the database

Create a local PostgreSQL database that matches `DB_NAME` in `real-estate-backend/.env`.

```sql
CREATE DATABASE real_estate_backend;
```

Run migrations from the backend directory when using Sequelize CLI:

```bash
npx sequelize-cli db:migrate
```

For quick local experiments only, `DB_SYNC=true` can be used to let Sequelize sync models on startup.

### 5. Run the app locally

Start the backend API:

```bash
cd real-estate-backend
npm run dev
```

Start the frontend in another terminal:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

### Frontend

| Variable | Example | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | `http://localhost:5000/api` | Base URL for backend API requests |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Public frontend URL used for metadata and social previews |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `service_xxxxxx` | EmailJS service ID for the contact form |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `template_xxxxxx` | EmailJS template ID for the contact form |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `public_key` | EmailJS public key for browser email sending |

### Backend

| Variable | Example | Purpose |
| --- | --- | --- |
| `PORT` | `5000` | API server port |
| `NODE_ENV` | `development` | Runtime environment |
| `CORS_ORIGIN` | `http://localhost:3000` | Allowed frontend origin |
| `DB_HOST` | `127.0.0.1` | PostgreSQL host |
| `DB_PORT` | `5432` | PostgreSQL port |
| `DB_NAME` | `real_estate_backend` | PostgreSQL database name |
| `DB_USER` | `postgres` | PostgreSQL user |
| `DB_PASSWORD` | `password` | PostgreSQL password |
| `JWT_SECRET` | `long-random-secret` | Secret used to sign and verify JWTs |
| `DB_SYNC` | `false` | Enables Sequelize model sync on startup when set to `true` |

## API Overview

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/health` | API health check |
| `POST` | `/auth/signup` | Create a user and issue a JWT |
| `POST` | `/auth/login` | Authenticate a user and issue a JWT |
| `GET` | `/profile` | Get the authenticated user's profile |
| `PUT` | `/profile` | Update the authenticated user's profile |

Protected routes require an authorization header:

```bash
Authorization: Bearer YOUR_TOKEN
```

## Quality Checks

Run these before opening a pull request or pushing a release branch.

Frontend:

```bash
npm run lint
npm run build
```

Backend:

```bash
cd real-estate-backend
npm run typecheck
npm run build
```

## Engineering Notes

- The frontend API client reads `NEXT_PUBLIC_API_URL`, so the same build can target local, staging, or production APIs.
- The backend database connection and Sequelize CLI config are environment-driven.
- JWT signing and verification use the same required `JWT_SECRET`.
- User responses from auth endpoints return public profile fields only.
- Generated dependencies and local environment files are intentionally excluded from Git.

## Author

Built by [Awais Hassan](https://github.com/awaishassan311) as a full-stack real estate platform project.
