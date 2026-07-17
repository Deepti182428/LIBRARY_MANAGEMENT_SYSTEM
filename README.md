# Library Management System Backend

This project implements a REST API for a Library Management System using Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, and bcrypt.

## Features
- User registration and login
- JWT-based authentication
- Admin-only book management
- CRUD operations for books
- Validation for required fields and duplicate ISBN/email
- Proper HTTP status codes

## Setup
1. Install dependencies:
   npm install
2. Create a .env file using .env.example.
3. Start the server:
   npm start

## API Endpoints
### Auth
- POST /api/auth/register
- POST /api/auth/login

### Books
- GET /api/books
- GET /api/books/:id
- POST /api/books (Admin only)
- PUT /api/books/:id (Admin only)
- DELETE /api/books/:id (Admin only)

## Example Request Bodies
### Register
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "123456",
  "role": "admin"
}

### Login
{
  "email": "admin@example.com",
  "password": "123456"
}

### Add Book
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "category": "Fantasy",
  "isbn": "9780261102217",
  "availableCopies": 5
}
