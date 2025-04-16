import { createUser, findUser } from "../repositories/userRepository.js";
import { createCart } from "../repositories/cartRepository.js";

async function registerUser(userDetails) {
	const user = await findUser({
		email: userDetails.email,
		mobileNumber: userDetails.mobileNumber,
	});

	if (user) {
		throw {
			reason: "User with this email or mobileNumber already exists",
			statusCode: 400,
		};
	}

	const newUser = await createUser({
		email: userDetails.email,
		mobileNumber: userDetails.mobileNumber,
		firstName: userDetails.firstName,
		lastName: userDetails.lastName,
		password: userDetails.password,
	});

	if (!newUser) {
		throw {
			reason: "something went wrong, cannot create user",
			statusCode: 500,
		};
	}

	await createCart(newUser._id);

	return newUser;
}

export { registerUser };
