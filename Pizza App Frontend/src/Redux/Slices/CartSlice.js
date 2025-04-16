import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
	cartsData: "",
};

export const addProductToCart = createAsyncThunk(
	"/cart/addProduct",
	async (productId) => {
		try {
			const response = axiosInstance.post(`/carts/add/${productId}`);
			toast.promise(response, {
				success: "Product added to cart successfully",
				loading: "Adding product to cart...",
				error: "Oh no! Something went wrong while adding product to cart",
			});
			const apiResponse = await response;
			return apiResponse;
		} catch (error) {
			console.log("error", error);
			toast.error("Oh no! Something went wrong");
		}
	}
);

export const removeProductFromCart = createAsyncThunk(
	"/cart/removeProduct",
	async (productId) => {
		try {
			const response = axiosInstance.post(`/carts/remove/${productId}`);
			toast.promise(response, {
				success: "Product removed from cart successfully",
				loading: "Removing product from cart...",
				error: "Oh no! Something went wrong while removing product from cart",
			});
			const apiResponse = await response;
			return apiResponse;
		} catch (error) {
			console.log("error", error);
			toast.error("Oh no! Something went wrong");
		}
	}
);

export const getCartDetails = createAsyncThunk("/cart/getDetails", async () => {
	try {
		const response = axiosInstance.get(`/carts`);
		toast.promise(response, {
			success: "Cart details fetched successfully",
			loading: "Fetching cart details...",
			error: "Oh no! Something went wrong while fetching cart details",
		});
		const apiResponse = await response;
		return apiResponse;
	} catch (error) {
		if (error.response.status === 401) {
			toast.error("Please login to view your cart");
			return {
				isUnAuthorized: true,
			};
		}
		console.log("error", error);
		toast.error("Oh no! Something went wrong");
	}
});

// export const deleteProductFromCart = createAsyncThunk("/cart/getDetails", async () => {
// 	try {
// 		const response = axiosInstance.get(`/carts`);
// 		toast.promise(response, {
// 			success: (resolvedPromise) => {
// 				return resolvedPromise?.data?.message;
// 			},
// 			loading: "Fetching cart details...",
// 			error: "Oh no! Something went wrong while fetching cart details",
// 		});
// 		const apiResponse = await response;
// 		return apiResponse;
// 	} catch (error) {
// 		console.log("error", error);
// 		toast.error("Oh no! Something went wrong");
// 	}
// });

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCartDetails.fulfilled, (state, action) => {
			state.cartsData = action.payload?.data?.data;
		});
	},
});

export default cartSlice.reducer;
