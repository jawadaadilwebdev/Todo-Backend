import Todo from "../models/todo.model.js";

// Create Todo

export const createTodo = async(req,res)=>{
    try {
        const {title,description} = req.body;
        // Validation
        if (!title || title.trim()===""){
            return res.status(500).json({
                message : "Title is required",
                succes : false
            })
        }

        const todo = await Todo.create({
            title,
            description
        })
        return res.status(201).json({
            todo,
            message : "Todo created successfully",
            success : true
        })
        
    } catch (error) {
        return res.status(500).json({
            message : "Internal Server Error",
            success : false,
            error : error.message,
        })
    }
}

