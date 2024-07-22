import dotenv from "dotenv";
import express from "express";
import connectDB from './db/mongoDBConnection.js';
import { app } from "./app.js";

dotenv.config();
connectDB()
.then(() => {
    const server_port=process.env.PORT || 8000;
    app.listen(server_port, () => {
        console.log(`Server is RUNNING!! at PORT: ${server_port}`);
    })
})
.catch((err) => {
    console.error("MONGO DB Connection FAILED !!!!", err);
}

);









// // immediate executed function
// ;(async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`,console.log("Connected to MongoDB"));
//     } catch (error) {
//         console.error("Failed to connect MongoDB database", error);
//         throw error;
//     }
// })();