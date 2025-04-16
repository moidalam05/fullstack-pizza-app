import AppError from "./appError.js";

class UnauthorizedError extends AppError {
	constructor() {
		super(`User is not authorized properly`, 401);
	}
}

export default UnauthorizedError;
