import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import cookieParser from 'cookie-parser'
const app = express();
const __dirname = path.resolve();

const PORT =ENV.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser())
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);


// Production setup
if (ENV.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/dist")));

	// ✅ Fixed catch-all route
	// app.get("/(.*)", (_, res) => {
	// 	res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
	// });

	app.use((_, res) => {
		res.sendFile(path.join(__dirname, "../client/dist/index.html"));
	});
}

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
	connectDB();
});
