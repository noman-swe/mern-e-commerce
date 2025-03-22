import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();

app.use(express.json()); // to parse the incoming request with JSON payloads and it is a middleware
// it allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(7000, () => {
  connectDB();
  console.log("server started at http://localhost:7000 new server setup");
});
