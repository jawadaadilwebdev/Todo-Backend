import express from "express";
import {createTodo} from "../controllers/todo.controller.js";

const route = express.Router();

route.get("/api",(req,res)=>{
    res.send("Todo App is running");
})

route.post("/add",createTodo)

export default route;