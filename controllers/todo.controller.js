import Todo from "../models/todo.model.js";

// Create Todo

export const createTodo = async(req,res)=>{
    try {
        const {title,description} = req.body;
        if (!title || title.trim()===""){
            return res.status(500).json({
                message : "Title si required",
                succes : false
            })
        }

        const todo = new Todo.create({
            title,
            description
        })
        return res.status(201).json({
            
        })
        
    } catch (error) {
        return res.status(500).json({
            message : "Internal Server Error",
            success : false,
            error : error.message,
        })
    }
}