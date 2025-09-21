import mongoose from "mongoose";

let isConnected = false

export const connectDB = async ()=>{
    if(isConnected){
        console.log(("MongoDb already connected ✅"));
    }

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/tododb",{
            family:4
        })

        isConnected = true
        console.log("MongoDB connected 🚀");
    } catch (error) {
        console.error("MongoDb connection error ❌",error);
    }
} ;

