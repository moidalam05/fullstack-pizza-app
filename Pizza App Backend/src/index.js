import express from "express";
import cookieParser from "cookie-parser";
import serverConfig from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import authRouter from "./routes/authRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cors from "cors";

const app = express();
app.use(
	cors({
		origin: serverConfig.FRONTEND_URL,
		credentials: true,
	})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/users", userRouter);
app.use("/carts", cartRouter);
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.listen(serverConfig.PORT, async () => {
	console.log(`Server is running on port ${serverConfig.PORT}`);
	await connectDB();
});
