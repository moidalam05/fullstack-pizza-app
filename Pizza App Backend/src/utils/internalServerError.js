import AppError from "./appError.js";

class InternalServerError extends AppError {
	constructor() {
		super("It's not you it's our server where something went wrong", 500);
	}
}

export default InternalServerError;
