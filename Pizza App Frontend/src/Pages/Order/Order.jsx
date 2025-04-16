import { useState } from "react";
import Layout from "../../Layouts/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { placeOrder } from "../../Redux/Slices/OrderSlice";

const Order = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { cartsData } = useSelector((state) => state.cart);

	const [details, setDetails] = useState({
		paymentMethod: "OFFLINE",
		address: "",
	});

	function handleUserInput(e) {
		const { name, value } = e.target;
		setDetails({ ...details, [name]: value });
	}

	async function handleFormSubmit(e) {
		e.preventDefault();
		if (details.paymentMethod === "" || details.address === "") {
			toast.error("Please fill all the fields");
			return;
		}
		const response = await dispatch(placeOrder());
		if (response?.payload?.data?.success) {
			toast.success("Order placed successfully");
			navigate("/order/success");
		} else {
			toast.error("Oh no! Something went wrong while placing your order");
		}
	}

	return (
		<Layout>
			<section className="text-gray-600 body-font min-h-56">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
							Thanks for choosing Us{" "}
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Total Price -{" "}
							<span className="font-bold text-red-900">
								₹{" "}
								{cartsData?.items?.reduce(
									(acc, item) =>
										acc +
										item?.quantity * item?.product?.price,
									0
								)}
							</span>
						</p>
					</div>

					<form onSubmit={handleFormSubmit}>
						<div className="relative flex-grow w-full">
							<label
								htmlFor="paymentMethod"
								className="leading-7 text-2xl text-gray-600"
							>
								Payment Method
							</label>
							<select
								name="paymentMethod"
								required
								onChange={handleUserInput}
								className="w-full p-2 mt-2 text-base text-gray-700 border rounded-lg bg-white focus:border-primary-500 focus:outline-none"
								id="paymentMethod"
							>
								<option value="OFFLINE">Offline</option>
								<option value="ONLINE">Online</option>
							</select>
						</div>

						<div className="relative flex-grow w-full">
							<label
								htmlFor="address"
								className="leading-7 my-5 inline-block text-2xl text-gray-600"
							>
								Address
							</label>
							<textarea
								name="address"
								placeholder="Enter your address here..."
								required
								rows="5"
								onChange={handleUserInput}
								className="w-full p-2 border rounded-md focus:outline-none focus:border-primary-500 bg-white text-gray-700"
							></textarea>
						</div>
						<button className="text-white bg-yellow-500 mt-5 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
							Place Order
						</button>
					</form>
				</div>
			</section>
		</Layout>
	);
};

export default Order;
