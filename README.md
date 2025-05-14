# 📦 Portfolio Backend API

This is the backend for a Portfolio Builder application, developed using the **MEVN Stack** (MongoDB, Express.js, Vue.js, Node.js). It provides portfolio data like projects, skills, education, and certifications to a Vue.js frontend.

---

## 📡 API Overview

### `GET /api`

Returns full portfolio data from MongoDB.

**Example response:**

```json
{
  "about": [...],
  "skills": [...],
  "projects": [...],
  "education": [...],
  "experience": [...],
  "certifications": [...],
  "contact": {
    "email": "example@example.com",
    "phone": "123-456-7890"
  }
}
```

---

### `POST /api`

Adds a new project.

**Example request body:**

```json
{
  "name": "Portfolio Website",
  "description": "Built with Vue and hosted on Render",
  "tech": ["Vue.js", "Node.js", "MongoDB"]
}
```

---

## ✅ Features Implemented

- ✅ Node.js + Express backend
- ✅ MongoDB Atlas integration with `ObjectId`
- ✅ `GET` and `POST` endpoints for portfolio data
- ✅ Vue frontend-ready JSON structure
- ✅ Prepared for Render deployment
- ✅ Static file serving for `dist/` (optional Vue frontend)

---

## 🛠 Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/anithakona/portfolio-backend.git
cd portfolio-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
```
PORT=5596
MONGODB_URI=your-mongodb-uri
```

### 4. Start the server
```bash
node server.js
```

Then visit:
```
http://localhost:5596/api
```

---

## 📁 Project Structure

```
portfolio-backend/
├── server.js          # Express API and MongoDB logic
├── db.json            # Sample portfolio data
├── dist/              # Vue frontend build (optional)
├── package.json       # Dependencies
└── README.md          # Project documentation
```

---



