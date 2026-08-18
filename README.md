<h1>🚀 MERN JWT Authentication Project</h1>

A full-stack **MERN authentication application** implementing secure user registration, login, JWT-based authentication, and protected routes.

## ✨ Features

* 🔐 User Registration
* 🔑 User Login
* 🎟️ JWT Authentication
* 🛡️ Protected Routes
* 💾 JWT stored in Browser `localStorage`
* 👤 Authenticated User Access
* 🚪 Logout functionality
* 🌐 REST API with Express.js
* 🍃 MongoDB with Mongoose
* ⚛️ React.js Frontend
* 🎨 Tailwind CSS UI
* 🔄 Persistent Login using Web Storage
* 📦 Environment Variables with `.env`
* 🚀 Deploy Ready

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* Tailwind CSS
* React Router
* Fetch API / Axios
* Web Storage API (`localStorage`)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* dotenv
* CORS

## 📁 Project Structure

```text
MERN-JWT-Authentication/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🔐 Authentication Flow

```text
User Registration
       ↓
   Backend API
       ↓
   Password Hash
       ↓
     MongoDB
       ↓
      Login
       ↓
   Verify Password
       ↓
    Generate JWT
       ↓
 Store JWT in localStorage
       ↓
 Protected API Requests
       ↓
   Verify JWT
       ↓
 Authenticated User
```

## ⚙️ Backend Setup

Open a terminal and run:

```bash
cd backend
npm install
npm run dev
```

### Backend Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## ⚛️ Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

### Frontend Environment Variables

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api
```

## 🌐 Local Development URLs

### Backend

```text
http://localhost:5000
```

### Frontend

```text
http://localhost:5173
```

## 📡 Authentication Endpoints

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| POST   | `/api/auth/signup` | Register a new user    |
| POST   | `/api/auth/login`    | Login user             |
| GET    | `/api/auth/dashboard`  | Get authenticated user |

## 💾 JWT & localStorage

After successful login, the JWT is stored in the browser's Web Storage:

```javascript
localStorage.setItem("token", token);
```

The token can then be retrieved for authenticated requests:

```javascript
const token = localStorage.getItem("token");
```

On logout:

```javascript
localStorage.removeItem("token");
```

## 🔒 Protected Routes

Protected API requests send the JWT using the `Authorization` header:

```http
Authorization: Bearer <JWT_TOKEN>
```

The backend middleware verifies the token before allowing access to protected resources.

## 🚪 Logout

Logout removes the JWT from browser storage and returns the user to the login page.

```javascript
localStorage.removeItem("token");
```

## 📦 Installation Summary

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🚀 Deployment

* **Frontend:** Vercel
* **Backend:** Vercel
* **Database:** MongoDB Atlas
* **Authentication:** JWT
* **Client Storage:** Browser `localStorage`

## 📌 Notes

* Never commit `.env` files to GitHub.
* Add `.env` to `.gitignore`.
* Use a strong and unique `JWT_SECRET`.
* Configure the production frontend URL in the backend CORS settings.
* Update `VITE_API_URL` when deploying the frontend.
