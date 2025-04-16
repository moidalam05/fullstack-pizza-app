import React, { useEffect } from "react";
import Layout from "../Layouts/Layout";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import pizzaImage from "../assets/Images/pizza2.png";
import cookImage from "../assets/Images/cooking1.png";
import orderFood from "../assets/Images/orderFood.png";
import enjoyFood from "../assets/Images/enjoy.png";
import pickupFood from "../assets/Images/pickup.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Slices/ProductSlice";
import { Link } from "react-router-dom";

const Home = () => {
	const dispatch = useDispatch();
	const { productsData } = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(getAllProducts());
	}, []);
	return (
		<Layout>
			<div>
				{/* Hero section */}
				<section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300">
					<div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
						<div className="flex justify-center text-4xl md:justify-normal">
							<h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
								Enjoy the Slice{" "}
							</h1>
							<h1>😋</h1>
						</div>

						<p className="pb-4 text-[#6B7280]">
							The pizza app brings you hot, fresh, and delicious
							pizzas with a side of joy. Order now and get a free
							drink with your favorite pizza – because you deserve
							more than just a meal, you deserve an experience!
							🍕🥤
						</p>

						<button className="px-4 py-2 flex items-center gap-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 group">
							Order Now
							<span className="transition-transform ease-in-out group-hover:translate-x-2">
								{" "}
								<FaArrowRightLong />
							</span>
						</button>
					</div>

					<div>
						<img
							src={pizzaImage}
							alt="pizza"
							width={550}
							height={550}
						/>
					</div>
				</section>

				{/* Services section */}
				<section className="py-4 mt-6 bg-gradient-to-r from-orange-400 to-amber-50">
					<div className="container flex flex-col md:flex-row">
						<div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
							<img
								src={cookImage}
								alt="cooking"
								width={500}
								className="rounded-lg"
							/>
						</div>

						<div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
							<div className="flex flex-col items-center lg:items-start">
								<div>
									<h2 className="mb-2 text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
										Cooked by the best <br /> chefs in the
										world
									</h2>
									<p className="text-base leading-relaxed text-[#687280]">
										There are many benefits regarding to
										that but the main ones are:
									</p>
								</div>
							</div>

							<div className="w-full p-1">
								<div className="flex items-center h-full p-2 text-2xl rounded">
									<BsPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
									<span className="font-bold title-font">
										Perfect taste
									</span>
								</div>
							</div>
							<div className="w-full p-1">
								<div className="flex items-center h-full p-2 text-2xl rounded">
									<BsPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
									<span className="font-bold title-font">
										Prepared Quickly
									</span>
								</div>
							</div>
							<div className="w-full p-1">
								<div className="flex items-center h-full p-2 text-2xl rounded">
									<BsPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
									<span className="font-bold title-font">
										Food heygiene guaranteed
									</span>
								</div>
							</div>

							<div className="px-5 py-4 mx-auto">
								<div className="flex justify-center py-4">
									<div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
								</div>

								<div className="flex flex-wrap space-y-6 md:space-y-0 ">
									<div className="flex flex-col items-center text-center p-4 md:w-1/3">
										<div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full shadow-lg">
											<img
												src={orderFood}
												alt="orderfood"
											/>
										</div>
										<div className="flex-grow">
											<h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
												Order Food
											</h2>
											<p className="text-base leading-relaxed">
												As easy as 1, 2, 3. Choose your
												favorite pizza add to cart and
												place your order.
											</p>
										</div>
									</div>
									<div className="flex flex-col items-center text-center p-4 md:w-1/3">
										<div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full shadow-lg">
											<img
												src={pickupFood}
												alt="pickupfood"
											/>
										</div>
										<div className="flex-grow">
											<h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
												Pickup Food
											</h2>
											<p className="text-base leading-relaxed">
												Order your favorite pizza and
												pick it up from the nearest
												store.
											</p>
										</div>
									</div>
									<div className="flex flex-col items-center text-center p-4 md:w-1/3">
										<div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full shadow-lg">
											<img
												src={enjoyFood}
												alt="enjoyfood"
											/>
										</div>
										<div className="flex-grow">
											<h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
												Enjoy Food
											</h2>
											<p className="text-base leading-relaxed">
												Enjoy your favorite pizza with a
												free drink and have a great
												time.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="mx-auto">
					<div className="flex flex-wrap justify-center">
						{productsData.map((item) => {
							return (
								item.inStock && (
									<div
										className="p-4 md:w-1/3"
										key={item._id}
									>
										<Link to={`/product/${item._id}`}>
											<div className="overflow-hidden border rounded-lg border-opacity-60">
												<img
													src={item.productImage}
													alt="Pizza Image"
													className="object-cover object-center w-full lg:h-48 md:h-36"
												/>
												<div className="p-6 border">
													<h2 className="text-xs font-medium tracking-widest text-gray-400 title-font">
														{item.category}
													</h2>
													<h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
														{item.productName}
													</h1>
													<p className="mb-4 text-base leading-relaxed">
														{item.description}
													</p>
													<p className="text-lg font-medium text-gray-900 title-font">
														${item.price}
													</p>
												</div>
											</div>
										</Link>
									</div>
								)
							);
						})}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
