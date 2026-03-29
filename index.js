import express from "express";
import cors from "cors";
import todoRoute from "./routes/todo.routes.js";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/",todoRoute);

// Start Server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})