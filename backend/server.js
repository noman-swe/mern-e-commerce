import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json()); // to parse the incoming request with JSON payloads and it is a middleware
// it allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`mern demo server started at http://localhost:${PORT} new server setup`);
});
