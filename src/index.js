import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import 'dotenv/config';
import express from "express";

// immediate executed function
;(async () => {
    try {
       await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`,console.log("Connected to MongoDB"));
    } catch (error) {
        console.error("Failed to connect MongoDB database", error);
        throw error;
    }
})();