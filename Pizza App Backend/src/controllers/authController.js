import { loginUser } from "../services/authService.js";
import serverConfig from "../config/serverConfig.js";

async function login(req, res) {
	try {
		const loginPayload = req.body;
		const response = await loginUser(loginPayload);

		res.cookie("authToken", response.token, {
			httpOnly: true,
			secure: serverConfig.COOKIE_SECURE,
			sameSite: 'None',
			maxAge: 3 * 24 * 60 * 60 * 1000,
		});

		res.status(200).json({
			success: true,
			message: "User logged in successfully",
			data: {
				userRole: response.userRole,
				userData: response.userData,
			},
			error: {},
		});
	} catch (error) {
		res.status(error.statusCode).json({
			success: false,
			message: error.message,
			data: {},
			error: error,
		});
	}
}

async function logout(req, res) {
	try {
		res.cookie("authToken", "", {
			httpOnly: true,
			secure: serverConfig.COOKIE_SECURE,
			sameSite: 'None',
			maxAge: 0,
		});
		res.status(200).json({
			success: true,
			message: "User logged out successfully",
			data: {},
			error: {},
		});
	} catch (error) {
		res.status(error.statusCode).json({
			success: false,
			message: error.message,
			data: {},
			error: error,
		});
	}
}

export { login, logout };
