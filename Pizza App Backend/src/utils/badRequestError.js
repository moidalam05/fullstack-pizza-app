import AppError from "./appError.js";

class BadRequestError extends AppError {
	constructor(invalidParams) {
		let message = "";
		invalidParams.forEach((param) => (message += `${param}\n`));

		super(
			`The request has the following invalid parameters \n${invalidParams}`,
			400
		);
	}
}

export default BadRequestError;
