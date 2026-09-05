# MERN User Authentication System

A full-stack user authentication system built using the MERN stack. The project provides secure user registration, password hashing, login authentication, JWT-based authorization, protected API routes, and a protected React dashboard.

## Features

- User registration
- Registration input validation
- Secure password hashing using bcrypt
- User login
- JWT authentication
- Protected backend API routes
- Protected React dashboard
- Authentication state using localStorage
- Logout functionality
- React Router navigation
- MongoDB Atlas database
- Responsive authentication UI
- Environment-based API configuration

## Technology Stack

### Frontend
- React
- Vite
- React Router DOM
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token
- CORS
- dotenv

## Project Structure

```text
MERN-User-Authentication/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── loginController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── validateRegistration.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── ProtectedRoute.jsx
    │   ├── pages/
    │   │   ├── Register.jsx
    │   │   ├── Login.jsx
    │   │   └── Dashboard.jsx
    │   ├── services/
    │   │   └── authService.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .env
    └── package.json
Authentication Flow
User
  │
  ▼
React Register Page
  │
  ▼
POST /api/auth/register
  │
  ▼
Validate Registration Data
  │
  ▼
Hash Password with bcrypt
  │
  ▼
Store User in MongoDB
  │
  ▼
Registration Successful
  │
  ▼
React Login Page
  │
  ▼
POST /api/auth/login
  │
  ▼
Verify Email & Password
  │
  ▼
Generate JWT Token
  │
  ▼
Store Token in Browser
  │
  ▼
Protected Dashboard
  │
  ▼
GET /api/users/profile
  │
  ▼
JWT Authentication Middleware
  │
  ▼
Authorized User
Backend API Endpoints
Register
POST /api/auth/register

Example request:

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}
Login
POST /api/auth/login

Example request:

{
  "email": "test@example.com",
  "password": "password123"
}
Protected Profile
GET /api/users/profile

Authorization header:

Authorization: Bearer <JWT_TOKEN>
Security
Passwords are never stored as plain text.
bcrypt is used for password hashing.
JWT tokens are used for authentication.
Protected routes require a valid JWT.
Invalid or expired tokens are rejected.
Environment variables are used for sensitive configuration.
.env files are excluded from Git using .gitignore.
Installation
1. Clone the repository
git clone https://github.com/Sathiuppar2242/MERN-User-Authentication.git
cd MERN-User-Authentication
2. Install backend dependencies
cd backend
npm install
3. Configure backend environment variables

Create:

backend/.env

Add:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
4. Start backend
npm run dev

Backend runs on:

http://localhost:5000
5. Install frontend dependencies

Open another terminal:

cd frontend
npm install
6. Configure frontend environment

Create:

frontend/.env

Add:

VITE_API_URL=http://localhost:5000/api
7. Start frontend
npm run dev

Frontend runs on:

http://localhost:5173
Testing

The application was tested for:

Successful user registration
Duplicate email validation
Invalid registration data
Successful login
Invalid login credentials
JWT generation
Protected API access
Unauthorized protected-route access
Dashboard authentication
Logout functionality
GitHub

Repository:

https://github.com/Sathiuppar2242/MERN-User-Authentication

Future Improvements
Password reset functionality
Email verification
Refresh tokens
Role-based authorization
User profile editing
Password change functionality
Deployment using cloud services
Author

Sathish R