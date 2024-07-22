import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
        console.log(`\n Mongo DB Connected at !! DB_HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Mongo DB Connection FAILED!!", error);
        process.exit(1); // Exit App
    }
}

export default connectDB;