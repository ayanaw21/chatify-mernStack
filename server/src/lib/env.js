import dotenv from "dotenv";
dotenv.config();

export const ENV = {
	PORT: process.env.PORT || 5000,
	NODE_ENV: process.env.NODE_ENV,
	MONGO_URI: process.env.MONGO_URI,
	JWT_SECRET: process.env.JWT_SECRET,
	RESEND_API_KEY: process.env.RESEND_API_KEY,
	EMAIl_FROM: process.env.EMAIl_FROM,
	EMAIl_FROM_NAME: process.env.EMAIl_FROM_NAME,
	CLIENT_URL: process.env.CLIENT_URL,
	CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
	CLOUDINARY_URL: process.env.CLOUDINARY_URL,

};
