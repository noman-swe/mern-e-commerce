// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();
const app = express();

app.use(express.json()); // to parse the incoming request with JSON payloads and it is a middleware
// it allows us to accept JSON data in the req.body

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.post("/api/products", async (req, res) => {
  const product = req.body; // user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ sucess: false, message: "Please provide all the fields" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in product creation", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// console.log(process.env.MONGO_URI);

app.listen(7000, () => {
  connectDB();
  console.log("server started at http://localhost:7000 new server setup");
});

//  Pyry6MQpOnBA31z0
