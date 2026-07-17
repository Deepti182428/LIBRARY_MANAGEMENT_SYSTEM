# Library Management System (Backend)
A RESTful backend application developed using **Node.js**, **Express.js**, **MongoDB**, and
**Mongoose** following the **MVC Architecture**. The project includes user authentication, rolebased authorization, and complete CRUD operations for managing library books.
---
## Features
### Authentication
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Role-Based Authorization (Admin/User)
### Book Management
- Add Book (Admin)
- Update Book (Admin)
- Delete Book (Admin)
- View All Books
- View Single Book
### Validation
- Required Field Validation
- Duplicate Email Validation
- Duplicate ISBN Validation
- Proper Error Handling
- HTTP Status Codes
---
## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- dotenv
---
## Project Structure
```
Library-Management-System/
│

├── config/
│ └── db.js
│

├── controllers/
│ ├── authController.js
│ └── bookController.js
│

├── middleware/
│ ├── authMiddleware.js
│ └── adminMiddleware.js
│

├── models/
│ ├── User.js
│ └── Book.js
│

├── routes/
│ ├── authRoutes.js
│ └── bookRoutes.js
│

├── .env
├── package.json
├── server.js
└── README.md
```
---
## Installation
### 1. Clone the Repository
```bash
git clone <repository-url>
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment Variables
Create a `.env` file.
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
### 4. Start the Server
```bash
npm run dev
```
---
## API Endpoints
### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login user |
### Books
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get single book |
| POST | /api/books | Add a new book (Admin) |
| PUT | /api/books/:id | Update a book (Admin) |
| DELETE | /api/books/:id | Delete a book (Admin) |
---
## HTTP Status Codes
- 200 – Success
- 201 – Created
- 400 – Bad Request
- 401 – Unauthorized
- 403 – Forbidden
- 404 – Not Found
- 500 – Internal Server Error
---
## API Testing
Use **Thunder Client** or **Postman** to test all endpoints.
---
## Author
Backend Practice Project – Library Management system
