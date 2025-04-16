import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUser } from "../repositories/userRepository.js";
import serverConfig from "../config/serverConfig.js";

async function loginUser(authDetails) {
	const email = authDetails.email;
	const plainPassword = authDetails.password;

	// Check if the email exists in the database
	const user = await findUser({ email });
	if (!user) {
		throw {
			message: "User not found with this email",
			statusCode: 404,
		};
	}

	// If user found Check if the password is correct or not
	const isPasswordValidated = await bcrypt.compare(
		plainPassword,
		user.password
	);

	if (!isPasswordValidated) {
		throw {
			message: "Password is incorrect please try again",
			statusCode: 401,
		};
	}

	// If password is correct then generate token
	const userRole = user.role ? user.role : "USER";
	const token = jwt.sign(
		{ email: user.email, id: user._id, role: userRole },
		serverConfig.JWT_SECRET,
		{ expiresIn: serverConfig.JWT_EXPIRY }
	);

	return {
		token,
		userRole,
		userData: {
			email: user.email,
			firstName: user.firstName,
		},
	};
}

export { loginUser };
