import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, "First name is required"],
			trim: true,
			minLength: [3, "First name must be at least 3 characters long"],
			maxLength: [20, "First name must be at most 20 characters long"],
			lowercase: true,
		},

		lastName: {
			type: String,
			trim: true,
			minLength: [3, "First name must be at least 3 characters long"],
			maxLength: [20, "First name must be at most 20 characters long"],
			lowercase: true,
		},

		mobileNumber: {
			type: String,
			required: [true, "Mobile number is required"],
			trim: true,
			unique: [true, "Mobile number already exists"],
			match: [
				/^\d{10}$/,
				"Mobile number must be 10 digits long and must contain only numbers",
			],
		},

		email: {
			type: String,
			required: [true, "Email is required"],
			trim: true,
			unique: [true, "Email already exists"],
			lowercase: true,
			match: [
				/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
				"Please fill a valid email address",
			],
		},

		password: {
			type: String,
			required: [true, "Password is required"],
			minLength: [6, "Password must be at least 6 characters long"],
			maxLength: [20, "Password must be at most 20 characters long"],
		},

		role: {
			type: String,
			enum: ["USER", "ADMIN"],
			default: "USER",
		},

		address: {
			type: String,
			// required: [true, "Address is required"],
			trim: true,
			minLength: [3, "Address must be at least 3 characters long"],
			maxLength: [100, "Address must be at most 100 characters long"],
			lowercase: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

userSchema.pre("save", async function (next) {
	const hashedPassword = await bcrypt.hash(this.password, 10);
	this.password = hashedPassword;
	next();
});

const User = mongoose.model("User", userSchema);
export default User;
