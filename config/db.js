import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected Succesfully");
    } catch (error) {
        console.log("Error in Db Connection");
        console.error(error.message)
        process.exit(1)
    }
}