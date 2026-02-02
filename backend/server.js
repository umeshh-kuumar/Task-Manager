require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');

const app = express();

//Middleware to handle CORS
app.use(
    cors({
        origin: process.env.client_URL || "*",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

//Database connection
connectDB();

//middleware to parse JSON bodies
app.use(express.json());



// Define routes

app.use("/api/auth", authRoutes);
// app.get("/api/users", userRoutes);
// app.get("/api/tasks", taskRoutes);
// app.get("/api/reports", reportRoutes);


//start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));