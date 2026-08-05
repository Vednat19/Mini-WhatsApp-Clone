# Mini WhatsApp Clone

A simple CRUD (Create, Read, Update, Delete) application built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **EJS**. This project demonstrates backend development concepts by allowing users to create, view, update, and delete chat messages while implementing proper asynchronous and validation error handling.

---

## Features

* View all chats
* Create a new chat
* Edit an existing chat
* Delete a chat
* Store chat data in MongoDB
* Render dynamic pages using EJS
* RESTful routing
* Support PUT and DELETE requests using Method Override
* Centralized asynchronous error handling using a custom `wrapAsync()` utility
* Custom error handling with `ExpressError`
* Mongoose validation error handling middleware

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* Method Override
* HTML5
* CSS3

---

## Project Structure

```text
Mini-Whatsapp/
│
├── models/
│   └── chat.js
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── ExpressError.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mini-whatsapp.git
```

### 2. Navigate to the project directory

```bash
cd mini-whatsapp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running locally.

The application connects to:

```text
mongodb://127.0.0.1:27017/fakewhatsapp
```

### 5. Start the server

```bash
node index.js
```

or

```bash
nodemon index.js
```

Visit the application at:

```text
http://localhost:3000
```

---

## REST API Routes

| Method | Route             | Description                                                         |
| ------ | ----------------- | ------------------------------------------------------------------- |
| GET    | `/`               | Home route                                                          |
| GET    | `/chats`          | Display all chats                                                   |
| GET    | `/chats/new`      | Show form to create a new chat                                      |
| POST   | `/chats`          | Create a new chat                                                   |
| GET    | `/chats/:id`      | Display a single chat (includes custom error handling if not found) |
| GET    | `/chats/:id/edit` | Show edit form                                                      |
| PUT    | `/chats/:id`      | Update an existing chat                                             |
| DELETE | `/chats/:id`      | Delete a chat                                                       |

---

## Chat Schema

```javascript
{
  from: String,
  to: String,
  message: String,
  created_at: Date
}
```

---

## Error Handling

This project implements centralized error handling for cleaner and more maintainable code.

### Async Error Wrapper

A reusable `wrapAsync()` helper is used to catch errors from asynchronous route handlers and forward them to Express's error middleware.

```javascript
function wrapAsync(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(next);
    };
}
```

### Custom Error Class

A custom `ExpressError` class is used for generating application-specific errors such as **404 - Chat Not Found**.

### Validation Error Handling

Mongoose validation errors are intercepted and processed through custom middleware before reaching the global error handler.

### Global Error Middleware

All application errors are handled in one place using Express error-handling middleware, ensuring consistent error responses.

---

## Dependencies

* Express.js
* Mongoose
* EJS
* Method Override

Install dependencies with:

```bash
npm install
```

---

## Learning Outcomes

This project helped reinforce concepts such as:

* Express.js routing
* CRUD operations
* MongoDB integration with Mongoose
* RESTful architecture
* EJS templating
* Express middleware
* HTTP Method Override
* Form handling
* Custom middleware creation
* Async/await
* Promise error handling
* Centralized async error handling using `wrapAsync`
* Custom error classes
* Global error-handling middleware
* Mongoose validation

---

## Future Improvements

* User authentication and authorization
* Real-time messaging with Socket.IO
* Search and filter chats
* Pagination
* Responsive UI
* Image and file sharing
* Better timestamp formatting
* User profiles
* Flash messages for CRUD operations
* Environment variable support using `.env`
* Input sanitization and security enhancements

---

## Author

**Vedant**

---

## License

This project is intended for learning and educational purposes.
