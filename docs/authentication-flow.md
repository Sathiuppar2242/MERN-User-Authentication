# Authentication Flow Diagram

The following diagram shows the complete authentication flow of the MERN User Authentication System.

```mermaid
flowchart TD
    A[User] --> B[React Registration Page]
    B --> C[POST /api/auth/register]
    C --> D[Validate Registration Data]
    D --> E[Hash Password using bcrypt]
    E --> F[Store User in MongoDB]
    F --> G[Registration Successful]

    G --> H[React Login Page]
    H --> I[POST /api/auth/login]
    I --> J[Find User in MongoDB]
    J --> K[Verify Password using bcrypt]
    K --> L[Generate JWT Token]
    L --> M[Store JWT Token in Browser]

    M --> N[Protected Dashboard]
    N --> O[GET /api/users/profile]
    O --> P[JWT Authentication Middleware]
    P --> Q{Token Valid?}

    Q -->|Yes| R[Allow Access]
    R --> S[Display User Profile]

    Q -->|No| T[Reject Request]
    T --> U[Redirect to Login]

    N --> V[Logout]
    V --> W[Remove JWT and User Data]
    W --> H
Authentication Process
The user registers through the React registration page.
The backend validates the registration data.
The password is securely hashed using bcrypt.
User information is stored in MongoDB.
The user logs in with their email and password.
The backend verifies the password.
A JWT token is generated after successful authentication.
The frontend stores the authentication token.
The protected dashboard sends the JWT with API requests.
Authentication middleware verifies the JWT.
Valid tokens allow access to protected resources.
Invalid or expired tokens are rejected.
Logout removes the stored authentication data.
Technologies Used
React
Node.js
Express.js
MongoDB
Mongoose
bcryptjs
JSON Web Token
React Router