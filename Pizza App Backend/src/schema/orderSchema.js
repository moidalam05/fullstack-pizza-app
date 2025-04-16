import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},

		items: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
					default: 1,
				},
			},
		],

		totalPrice: {
			type: Number,
			required: true,
			default: 0,
		},

		status: {
			type: String,
			enum: [
				"ORDERED",
				"CANCELLED",
				"DELIVERED",
				"PROCESSING",
				"OUT_FOR_DELIVERY",
			],
			default: "ORDERED",
		},

		address: {
			type: String,
			minLength: [10, "Address must be at least 10 characters long"],
		},

		paymentMethod: {
			type: String,
			enum: ["CASH", "ONLINE"],
			default: "CASH",
		},
	},
	{ timestamps: true, versionKey: false }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
