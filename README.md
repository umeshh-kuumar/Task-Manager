# 📋 Task Manager

A modern, full-stack Task Management application designed for efficiency and ease of use. This project features a robust backend built with Node.js and Express, and a sleek, responsive frontend powered by React and Tailwind CSS.

![Task Manager Dashboard]

## 🚀 Features

- **User Authentication**: Secure signup and login with JWT authentication.
- **Task Management**: Create, view, update, and delete tasks with ease.
- **Priority Levels**: Assign priorities (Low, Medium, High) to stay organized.
- **Checklists**: Add sub-tasks to each task to track progress.
- **Dashboard Analytics**: Visualize task statistics with interactive bar charts.
- **File Uploads**: Attach relevant files to your tasks.
- **Excel Export**: Download your task data in Excel format for offline use.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Navigation**: React Router 7
- **Icons**: React Icons
- **Data Visualization**: Recharts
- **Notifications**: React Hot Toast
- **API Client**: Axios

### Backend
- **Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JSON Web Token (JWT) & BcryptJS
- **File Handling**: Multer
- **Data Export**: ExcelJS

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd "Task Manager"
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add your configuration:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=8000
   JWT_SECRET=your_jwt_secret_key
   ADMIN_INVITE_TOKEN=your_admin_token
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

### Backend
- `npm start`: Starts the server using Node.
- `npm run dev`: Starts the server with Nodemon for development.

### Frontend
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build.

## 📄 License

This project is licensed under the ISC License.

---

Made with ❤️ by Umesh Kumar
