import {
	clearProductsFromCart,
	getCart,
	modifyCart,
} from "../services/cartService.js";
import AppError from "../utils/appError.js";

async function getCartByUser(req, res) {
	try {
		const cart = await getCart(req.user.id);
		return res.status(200).json({
			success: true,
			message: "Cart found successfully",
			data: cart,
			error: {},
		});
	} catch (error) {
		console.log(error);
		if (error instanceof AppError) {
			return res.status(error.statusCode).json({
				success: false,
				message: error.message,
				data: {},
				error: error,
			});
		}
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
			data: {},
			error: error,
		});
	}
}

async function modifyProductToCart(req, res) {
	try {
		const cart = await modifyCart(
			req.user.id,
			req.params.productId,
			req.params.operation == "add"
		);
		return res.status(200).json({
			success: true,
			message: "Product added to cart successfully",
			data: cart,
			error: {},
		});
	} catch (error) {
		console.log(error);
		if (error instanceof AppError) {
			return res.status(error.statusCode).json({
				success: false,
				message: error.message,
				data: {},
				error: error,
			});
		}
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
			data: {},
			error: error,
		});
	}
}

async function clearCartById(req, res) {
	try {
		const cart = await clearProductsFromCart(req.user.id);
		return res.status(200).json({
			success: true,
			message: "Cart cleared successfully",
			data: cart,
			error: {},
		});
	} catch (error) {
		console.log(error);
		if (error instanceof AppError) {
			return res.status(error.statusCode).json({
				success: false,
				message: error.message,
				data: {},
				error: error,
			});
		}
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
			data: {},
			error: error,
		});
	}
}

export { getCartByUser, modifyProductToCart, clearCartById };
