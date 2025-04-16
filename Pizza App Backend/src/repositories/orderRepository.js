import Order from "../schema/orderSchema.js";
import BadRequestError from "../utils/badRequestError.js";

async function createNewOrder(orderDetails) {
	try {
		const order = await Order.create(orderDetails);
		return order;
	} catch (error) {
		if (error.name == "ValidationError") {
			const errorMessageList = Object.keys(error.errors).map(
				(property) => {
					return error.errors[property].message;
				}
			);
			throw new BadRequestError(errorMessageList);
		}
		console.log(error);
		throw new InternalServerError();
	}
}

async function getOrdersByUserId(userId) {
	try {
		const orders = await Order.find({ user: userId }).populate(
			"items.product"
		);
		return orders;
	} catch (error) {
		console.log(error);
		throw new InternalServerError();
	}
}

async function getOrderById(orderId) {
	try {
		const order = await Order.findById(orderId).populate("items.product");
		return order;
	} catch (error) {
		console.log(error);
		throw new InternalServerError();
	}
}

async function updateOrderStatus(orderId, status) {
	try {
		const order = await Order.findByIdAndUpdate(
			orderId,
			{
				status: status,
			},
			{ new: true }
		).populate("items.product");
		return order;
	} catch (error) {
		console.log(error);
		throw new InternalServerError();
	}
}

export { createNewOrder, getOrdersByUserId, getOrderById, updateOrderStatus };
