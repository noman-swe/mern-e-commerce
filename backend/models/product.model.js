import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
},
{
    timestamps: true,
});

const Product = mongoose.model("Product", productSchema);  // in mongoose Product is the model name and productSchema is the schema and Product will show as products in the collection
export default Product;
