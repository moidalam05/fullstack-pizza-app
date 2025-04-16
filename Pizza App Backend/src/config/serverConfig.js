import dotenv from "dotenv";
dotenv.config();

export default {
	PORT: process.env.PORT || 3000,
	MONGODB_URI: process.env.MONGODB_URI,

	// JWT
	JWT_SECRET: process.env.SECRET_KEY,
	JWT_EXPIRY: process.env.JWT_EXPIRY,

	// Cloudinary
	CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,

	FRONTEND_URL: process.env.FRONTEND_URL,
	COOKIE_SECURE: process.env.COOKIE_SECURE,
};
