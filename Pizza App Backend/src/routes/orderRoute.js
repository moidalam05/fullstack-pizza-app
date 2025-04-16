import express from "express";
import { isAdmin, isLoggedIn } from "../validation/authValidator.js";
import {
	cancelOrder,
	changeOrderStatus,
	createNewOrder,
	getAllOrdersByUser,
	getOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/", isLoggedIn, createNewOrder);
orderRouter.get("/", isLoggedIn, getAllOrdersByUser);
orderRouter.get("/:orderId", isLoggedIn, getOrder);
orderRouter.put("/:orderId/cancel", isLoggedIn, cancelOrder);
orderRouter.put("/:orderId/status", isLoggedIn, isAdmin, changeOrderStatus);

export default orderRouter;
