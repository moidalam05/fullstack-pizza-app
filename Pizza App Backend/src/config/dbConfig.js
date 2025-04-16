import mongoose from "mongoose";
import serverConfig from "./serverConfig.js";

async function connectDB() {
	try {
		await mongoose.connect(serverConfig.MONGODB_URI);
		console.log("DB connected successfully");
	} catch (error) {
		console.log("Error in DB connection", error);
	}
}

export default connectDB;
