import {
	createOrder,
	getAllOrdersCreatedByUser,
	getOrderDetailsById,
	updateOrder,
} from "../services/orderService.js";
import AppError from "../utils/appError.js";

async function createNewOrder(req, res) {
	try {
		const order = await createOrder(req.user.id, req.body.paymentMethod);

		return res.status(201).json({
			success: true,
			message: "Order created successfully",
			data: order,
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

async function getAllOrdersByUser(req, res) {
	try {
		const order = await getAllOrdersCreatedByUser(req.user.id);

		return res.status(200).json({
			success: true,
			message: "Orders fetched successfully",
			data: order,
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

async function getOrder(req, res) {
	try {
		const order = await getOrderDetailsById(req.params.orderId);

		return res.status(201).json({
			success: true,
			message: "Order fetched successfully",
			data: order,
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

async function cancelOrder(req, res) {
	try {
		const order = await updateOrder(req.params.orderId, "CANCELLED");

		return res.status(201).json({
			success: true,
			message: "Order cancelled successfully",
			data: order,
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

async function changeOrderStatus(req, res) {
	try {
		const order = await updateOrder(req.params.orderId, req.body.status);

		return res.status(201).json({
			success: true,
			message: "Order updated successfully",
			data: order,
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

export {
	createNewOrder,
	getAllOrdersByUser,
	getOrder,
	cancelOrder,
	changeOrderStatus,
};
