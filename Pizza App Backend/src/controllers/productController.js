import {
	CreateProduct,
	DeleteProduct,
	GetProduct,
	GetProducts,
} from "../services/productService.js";
import AppError from "../utils/appError.js";

async function addProduct(req, res) {
	try {
		const product = await CreateProduct({
			productName: req.body.productName,
			description: req.body.description,
			imagePath: req.file?.path,
			price: req.body.price,
			inStock: req.body.inStock,
			category: req.body.category,
			size: req.body.size,
		});
		return res.status(201).json({
			success: true,
			message: "Product created successfully",
			data: product,
			error: {},
		});
	} catch (error) {
		if (error instanceof AppError) {
			return res.status(error.statusCode).json({
				success: false,
				message: error.message,
				data: {},
				error: error,
			});
		}
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Something went wrong!",
			data: {},
			error: error,
		});
	}
}

async function getProduct(req, res) {
	try {
		const response = await GetProduct(req.params.id);
		return res.status(200).json({
			success: true,
			message: "Product retrieved successfully",
			data: response,
			error: {},
		});
	} catch (error) {
		if (error instanceof AppError) {
			return res.status(error.statusCode).json({
				success: false,
				message: error.message,
				data: {},
				error: error,
			});
		}
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Something went wrong!",
			data: {},
			error: error,
		});
	}
}

async function getProducts(req, res) {
	try {
		const response = await GetProducts();
		return res.status(200).json({
			success: true,
			message: "All Products retrieved successfully",
			data: response,
			error: {},
		});
	} catch (error) {
		if (error instanceof AppError) {
			return res.status(error.statusCode).json({
				success: false,
				message: error.message,
				data: {},
				error: error,
			});
		}
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Something went wrong!",
			data: {},
			error: error,
		});
	}
}

async function deleteProduct(req, res) {
	try {
		const response = await DeleteProduct(req.params.id);
		return res.status(200).json({
			success: true,
			message: "Product deleted successfully",
			data: response,
			error: {},
		});
	} catch (error) {
		if (error instanceof AppError) {
			return res.status(error.statusCode).json({
				success: false,
				message: error.message,
				data: {},
				error: error,
			});
		}
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Something went wrong!",
			data: {},
			error: error,
		});
	}
}

export { addProduct, getProduct, getProducts, deleteProduct };
