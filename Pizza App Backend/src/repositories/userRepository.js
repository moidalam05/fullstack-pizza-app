import User from "../schema/userSchema.js";
import BadRequestError from "../utils/badRequestError.js";
import InternalServerError from "../utils/internalServerError.js";

async function findUser(parameters) {
	try {
		const response = await User.findOne({ ...parameters });
		return response;
	} catch (error) {
		console.log(error);
		throw {
			reason: "something went wrong, cannot find user",
			statusCode: 500,
		};
	}
}

async function createUser(userDetails) {
	try {
		const response = await User.create(userDetails);
		return response;
	} catch (error) {
		if (error.name == "ValidationError") {
			const errorMessageList = Object.keys(error.errors).map(
				(property) => {
					return error.errors[property].message;
				}
			);
			throw new BadRequestError(errorMessageList);
		}
		console.log(error);
		throw new InternalServerError();
	}
}

export { findUser, createUser };
