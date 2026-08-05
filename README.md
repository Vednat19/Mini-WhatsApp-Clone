# 💬 Mini WhatsApp Clone

A simple **CRUD (Create, Read, Update, Delete)** web application built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **EJS**. This project demonstrates the fundamentals of backend development by allowing users to create, view, edit, update, and delete chat messages through a clean WhatsApp-inspired interface while implementing proper asynchronous and validation error handling.

---

## 🚀 Features

* 📄 View all chats
* ➕ Create a new chat
* ✏️ Edit an existing chat
* 🗑️ Delete a chat
* 💾 Store chat data in MongoDB
* 🎨 WhatsApp-inspired user interface
* ⚡ RESTful routing
* 🔄 Support PUT & DELETE requests using Method Override
* 🖥️ Dynamic server-side rendering using EJS
* ✔️ Delete confirmation using client-side JavaScript
* 🚨 Centralized asynchronous error handling using `wrapAsync()`
* ⚠️ Custom error handling with `ExpressError`
* ✅ Mongoose validation error handling middleware

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* HTML5
* CSS3
* JavaScript
* Method Override

---

## 📁 Project Structure

```text
Mini-WhatsApp-Clone/
│
├── init/
│   └── init.js
│
├── models/
│   └── chat.js
│
├── public/
│   ├── style.css
│   ├── new.css
│   ├── edit.css
│   └── app.js
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

## 📂 Folder Overview

| Folder/File        | Description                                  |
| ------------------ | -------------------------------------------- |
| `models/chat.js`   | Mongoose schema for chat messages            |
| `views/`           | EJS templates for rendering pages            |
| `public/style.css` | Styling for the main chat page               |
| `public/new.css`   | Styling for the Create Chat page             |
| `public/edit.css`  | Styling for the Edit Chat page               |
| `public/app.js`    | Client-side JavaScript (Delete confirmation) |
| `init/init.js`     | Script to insert sample chat data            |
| `ExpressError.js`  | Custom error class                           |
| `index.js`         | Main Express server                          |

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Vednat19/Mini-WhatsApp-Clone.git
```

### 2. Navigate to the project directory

```bash
cd Mini-WhatsApp-Clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running locally.

Default MongoDB connection:

```text
mongodb://127.0.0.1:27017/fakewhatsapp
```

### 5. Seed the Database (Optional)

```bash
node init/init.js
```

### 6. Start the Application

```bash
node index.js
```

or

```bash
nodemon index.js
```

Open your browser and visit:

```text
http://localhost:3000/chats
```

---

## 📌 RESTful Routes

| Method | Route             | Description           |
| ------ | ----------------- | --------------------- |
| GET    | `/`               | Home Route            |
| GET    | `/chats`          | Display all chats     |
| GET    | `/chats/new`      | Show Create Chat form |
| POST   | `/chats`          | Create a new chat     |
| GET    | `/chats/:id`      | Display a single chat |
| GET    | `/chats/:id/edit` | Show Edit Chat form   |
| PUT    | `/chats/:id`      | Update a chat         |
| DELETE | `/chats/:id`      | Delete a chat         |

---

## 🗄️ Chat Schema

```javascript
{
    from: String,
    to: String,
    message: String,
    created_at: Date
}
```

---

## 🚨 Error Handling

This project implements centralized error handling for cleaner and more maintainable code.

### Async Error Wrapper

A reusable `wrapAsync()` helper catches errors from asynchronous route handlers and forwards them to Express error-handling middleware.

```javascript
function wrapAsync(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(next);
    };
}
```

### Custom Error Class

A custom `ExpressError` class is used for application-specific errors (such as **404 - Chat Not Found**).

### Validation Error Handling

Mongoose validation errors are intercepted and handled through custom middleware before reaching the global error handler.

### Global Error Middleware

All uncaught application errors are handled in a centralized Express error middleware for consistent responses.

---

## 📦 Dependencies

* express
* mongoose
* ejs
* method-override
* uuid

Install all dependencies using:

```bash
npm install
```

---

## 🎯 Learning Outcomes

This project helped me understand:

* Express.js Routing
* CRUD Operations
* MongoDB Integration
* Mongoose Models & Schemas
* RESTful APIs
* EJS Templating
* Express Middleware
* HTML Form Handling
* Method Override
* Dynamic Server-Side Rendering
* Organizing an MVC-style Project
* Async/Await
* Promise Error Handling
* Custom Middleware (`wrapAsync`)
* Global Error Handling
* Custom Error Classes
* Mongoose Validation

---

## 📸 Screenshots

You can add screenshots here after uploading them to your repository.

### Home Page

```
screenshots/home.png
```

### New Chat Page

```
screenshots/new-chat.png
```

### Edit Chat Page

```
screenshots/edit-chat.png
```

---

## 🚀 Future Improvements

* 🔐 User Authentication
* 💬 Real-time Chat using Socket.IO
* 🔍 Search Messages
* 📄 Pagination
* 📱 Better Mobile Responsiveness
* 😊 Emoji Support
* 📤 Image & File Sharing
* 👤 User Profiles
* 🌙 Dark Mode
* ⏰ Better Timestamp Formatting
* 💬 Flash Messages
* ⚙️ Environment Variables (`.env`)
* 🛡️ Input Validation & Sanitization

---

## 👨‍💻 Author

**Vedant**

GitHub: https://github.com/Vednat19

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create your feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push the branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📄 License

This project is created for learning and educational purposes.

Feel free to fork this repository, improve it, and use it as a reference while learning **Node.js**, **Express.js**, **MongoDB**, and **EJS**.

If you found this project helpful, consider giving it a ⭐ on GitHub.
