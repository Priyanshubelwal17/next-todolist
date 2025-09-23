import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) {
        console.log("MongoDb already connected ✅");
        return;
    }

    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tododb";

    try {
        await mongoose.connect(uri, {
            family: 4,
        });

        isConnected = true;
        console.log("MongoDB connected 🚀");
    } catch (error) {
        console.error("MongoDb connection error ❌", error);
        throw error;
    }
};


