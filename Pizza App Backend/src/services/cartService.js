import { clearCart, getCartByUserId } from "../repositories/cartRepository.js";
import { getProductById } from "../repositories/productRepository.js";
import AppError from "../utils/appError.js";
import BadRequestError from "../utils/badRequestError.js";
import NotFoundError from "../utils/notFoundError.js";

// Get cart by user id and throw error if cart is not found
async function getCart(userId) {
	const cart = await getCartByUserId(userId);

	if (!cart) {
		throw new NotFoundError("Cart");
	}

	return cart;
}

// Add product to cart and update product quantity
async function modifyCart(userId, productId, shouldAdd = true) {
	const quantityValue = shouldAdd === true ? 1 : -1;
	const cart = await getCart(userId);
	const product = await getProductById(productId);

	if (!product) {
		throw new NotFoundError("Product");
	}

	if (!product.inStock && product.quantity <= 0) {
		throw new BadRequestError(["Product is out of stock"]);
	}

	// Check if product is already in cart
	let foundProduct = false;
	cart.items.forEach((item) => {
		if (item.product._id == productId) {
			if (shouldAdd) {
				if (product.quantity >= item.quantity + 1) {
					item.quantity += quantityValue;
				} else {
					throw new AppError(
						"The quantity of request item is not available",
						404
					);
				}
			} else {
				if (item.quantity > 0) {
					item.quantity += quantityValue;
					if (item.quantity == 0) {
						cart.items = cart.items.filter(
							(item) => item.product._id != productId
						);
						foundProduct = true;
						return;
					}
				} else {
					throw new AppError(
						"The quantity of request item is not available",
						404
					);
				}
			}
			foundProduct = true;
		}
	});

	if (!foundProduct) {
		if (shouldAdd) {
			cart.items.push({ product: productId, quantity: 1 });
		} else {
			throw new NotFoundError("Product not found in cart", 404);
		}
	}

	await cart.save();

	return cart;
}

async function clearProductsFromCart(userId) {
	const response = await clearCart(userId);
	return response;
}

export { getCart, modifyCart, clearProductsFromCart };
