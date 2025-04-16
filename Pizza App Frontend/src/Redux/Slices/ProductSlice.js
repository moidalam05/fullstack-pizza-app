import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
	productsData: [],
};

export const getAllProducts = createAsyncThunk("/products/getAll", async () => {
	try {
		const products = axiosInstance.get("/products");
		toast.promise(products, {
			success: (resolvedPromise) => {
				return resolvedPromise?.data?.message;
			},
			loading: "Hold on, fetching products...",
			error: "Oh no! Something went wrong",
		});
		const apiResponse = await products;
		return apiResponse;
	} catch (error) {
		console.log("error", error);
		toast.error("Oh no! Something went wrong");
	}
});

export const getProductDetails = createAsyncThunk(
	"/products/getDetails",
	async (id) => {
		try {
			const product = axiosInstance.get(`/products/${id}`);
			toast.promise(product, {
				success: (resolvedPromise) => {
					return resolvedPromise?.data?.message;
				},
				loading: "Hold on, fetching product details...",
				error: "Oh no! Something went wrong",
			});
			const apiResponse = await product;
			return apiResponse;
		} catch (error) {
			console.log("error", error);
			toast.error("Oh no! Something went wrong");
		}
	}
);

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProducts.fulfilled, (state, action) => {
			state.productsData = action?.payload?.data?.data;
		});
	},
});

export default productSlice.reducer;
