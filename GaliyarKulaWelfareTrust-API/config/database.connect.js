import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mgshk8824:2Op4Berw4P6lwWpv@cluster0.mmhtr.mongodb.net/galiyarthirukoiltrust?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Database connected')
    } catch (e) {
        console.log("Database failed to connect" + e);
    }
};