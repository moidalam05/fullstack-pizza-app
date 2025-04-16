import express from "express";
import {
	clearCartById,
	getCartByUser,
	modifyProductToCart,
} from "../controllers/cartController.js";
import { isLoggedIn } from "../validation/authValidator.js";

const cartRouter = express.Router();

cartRouter.get("/", isLoggedIn, getCartByUser);
cartRouter.post("/:operation/:productId", isLoggedIn, modifyProductToCart);
cartRouter.delete("/products", isLoggedIn, clearCartById);

export default cartRouter;
