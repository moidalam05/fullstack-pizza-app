import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		productName: {
			type: String,
			required: [true, "Product name is required"],
			trim: true,
			minlength: [5, "Product name should be at least 5 characters long"],
		},
		description: {
			type: String,
			trim: true,
			minlength: [
				10,
				"Product description should be at least 10 characters long",
			],
		},
		productImage: {
			type: String,
		},
		quantity: {
			type: Number,
			required: [true, "Product quantity is required"],
			default: 10,
		},
		price: {
			type: Number,
			required: [true, "Product price is required"],
		},
		category: {
			type: String,
			enum: ["Veg", "Non-Veg", "Drinks", "Sides"],
			default: "Veg",
		},
		inStock: {
			type: Boolean,
			required: [true, "Product stock is required"],
			default: true,
		},
		size: {
			type: String,
			enum: ["Small", "Medium", "Large"],
			default: "Medium",
		},
	},
	{ timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
