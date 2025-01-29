import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://nagamuraliweb:tFRJ892EsTSC6p0g@mongodbcluster.e5qbd.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBCluster");
        console.log('Database connected')
    } catch (e) {
        console.log("Database failed to connect" + e);
    }
};