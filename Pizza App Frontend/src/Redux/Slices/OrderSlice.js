import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
	ordersData: null,
};

export const placeOrder = createAsyncThunk("/order/placeOrder", async () => {
	try {
		const response = axiosInstance.post(`/orders`);
		toast.promise(response, {
			success: "Order placed successfully",
			loading: "Placing your order...",
			error: "Oh no! Something went wrong while placing your order",
		});
		const apiResponse = await response;
		return apiResponse;
	} catch (error) {
		console.log("error", error);
		toast.error("Oh no! Something went wrong");
	}
});

const OrderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(placeOrder.fulfilled, (state, action) => {
			state.ordersData = action?.payload?.data;
		});
	},
});

export default OrderSlice.reducer;
