import { registerUser } from "../services/userService.js";
import AppError from "../utils/appError.js";

async function createUser(req, res) {
	console.log(req.body);

	try {
		const response = await registerUser(req.body);

		return res.status(201).json({
			message: "User created successfully",
			success: true,
			data: response,
			error: {},
		});
	} catch (error) {
		if (error instanceof AppError) {
			return res.status(error.statusCode).json({
				success: false,
				message: error.message,
				data: {},
				error: error,
			});
		}
		return res.status(error.statusCode).json({
			message: error.reason,
			success: false,
			data: {},
			error: error,
		});
	}
}

export { createUser };
