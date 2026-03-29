import express from "express";

const route = express.Router();

route.get("/api",(req,res)=>{
    res.send("Todo App is running");
})

export default route;