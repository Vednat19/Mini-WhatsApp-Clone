# Mini WhatsApp Clone

A simple CRUD (Create, Read, Update, Delete) application built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **EJS**. This project demonstrates the basics of backend development by allowing users to create, view, update, and delete chat messages.

---

## Features

* View all chats
* Create a new chat
* Edit an existing chat
* Delete a chat
* Store data in MongoDB
* Render dynamic pages using EJS
* Use RESTful routes
* Support PUT and DELETE requests using Method Override

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* Method Override
* HTML
* CSS

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

Ensure MongoDB is running locally.

The application connects to:

```text
mongodb://127.0.0.1:27017/whatsapp
```

### 5. Start the server

```bash
node index.js
```

or

```bash
nodemon index.js
```

The application will be available at:

```text
http://localhost:3000
```

---

## Routes

| Method | Route             | Description                        |
| ------ | ----------------- | ---------------------------------- |
| GET    | `/`               | Home route                         |
| GET    | `/chats`          | Display all chats                  |
| GET    | `/chats/new`      | Show the form to create a new chat |
| POST   | `/chats`          | Create a new chat                  |
| GET    | `/chats/:id/edit` | Show the edit form                 |
| PUT    | `/chats/:id`      | Update an existing chat            |
| DELETE | `/chats/:id`      | Delete a chat                      |

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

## Dependencies

* Express.js
* Mongoose
* EJS
* Method Override

Install all dependencies using:

```bash
npm install
```

---

## Learning Outcomes

This project covers:

* Express.js routing
* CRUD operations
* MongoDB integration with Mongoose
* RESTful APIs
* EJS templating
* Middleware
* Form handling
* HTTP Method Override
* Dynamic rendering with server-side templates

---

## Future Improvements

* User authentication
* Real-time messaging using Socket.IO
* Search functionality
* Pagination
* Responsive user interface
* Image and file sharing
* Message timestamps with improved formatting
* User profiles

---

## Author

Vedant

---

## License

This project is intended for learning and educational purposes.
