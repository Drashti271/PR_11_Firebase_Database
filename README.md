# Firebase Todo App (React + Redux Toolkit)

## 📌 Project Overview
This is a simple Todo application built using:
- React (Vite)
- Redux Toolkit
- Firebase Realtime Database
- Axios

The app allows users to:
- Add todos
- Store data in Firebase
- Fetch and display todos

---

## 📁 Folder Structure

```
src/
│
├── api/
│   └── apiInstance.js       # Axios configuration
│
├── app/
│   └── store.js             # Redux store setup
│
├── assets/                  # Images and static files
│
├── features/
│   └── todo/
│       └── todoSlice.js     # Redux slice for todos
│
├── App.jsx                  # Main component
├── main.jsx                 # Entry point
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run the App
```bash
npm run dev
```

---

## 🔥 Firebase Setup

1. Go to Firebase Console
2. Create a new project
3. Enable Realtime Database
4. Copy your database URL

Update in:
```
src/api/apiInstance.js
```

Example:
```js
const apiInstance = axios.create({
  baseURL: 'https://your-project-id.firebaseio.com'
});
```

---

## ⚙️ Features

- ✅ Add Todo
- ✅ Store in Firebase
- ✅ Async API using Redux Toolkit
- ✅ Clean folder structure

---

## 📦 Technologies Used

- React
- Redux Toolkit
- Axios
- Firebase
- Vite

---

## 🧑‍💻 Author

Bilimoria Drashti

---

