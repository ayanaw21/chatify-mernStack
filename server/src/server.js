import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Production setup
if (process.env.NODE_ENV === "production") {
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
