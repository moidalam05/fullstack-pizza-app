import jwt from "jsonwebtoken";
import serverConfig from "../config/serverConfig.js";
import UnauthorizedError from "../utils/unauthorizedError.js";

async function isLoggedIn(req, res, next) {
	// Get the token from the request
	const token = req.cookies["authToken"];

	// Check if the token is present in the request or not
	if (!token) {
		return res.status(401).json({
			success: false,
			message: "Auth Token not found",
			data: {},
			error: "Not authenticated user",
		});
	}

	try {
		// Verify the token and get the user details from the token
		const decoded = jwt.verify(token, serverConfig.JWT_SECRET);

		// If the token is invalid then return the error message
		if (!decoded) {
			throw new UnauthorizedError();
		}

		// If the token is valid then set the user details in the request object
		req.user = {
			email: decoded.email,
			id: decoded.id,
			role: decoded.role,
		};
		next();
	} catch (error) {
		if (error.name === "TokenExpiredError") {
			res.cookie("authToken", "", {
				httpOnly: true,
				secure: serverConfig.COOKIE_SECURE,
				sameSite: 'None',
				maxAge: 7 * 24 * 60 * 60 * 1000,
			});
			return res.status(200).json({
				success: true,
				message: "Log out successfully",
				data: {},
				error: {},
			});
		}
		return res.status(401).json({
			success: false,
			message: "Invalid Token Provided",
			data: {},
			error: error,
		});
	}
}

// This function will be used to check if the user is an admin or not
function isAdmin(req, res, next) {
	const loggedInUser = req.user;

	if (loggedInUser.role === "ADMIN") {
		next();
	} else {
		return res.status(401).json({
			success: false,
			message: "You are not authorized to access this resource",
			data: {},
			error: {
				reason: "Unauthorized Access",
				statusCode: 401,
			},
		});
	}
}

export { isLoggedIn, isAdmin };
