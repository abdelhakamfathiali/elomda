import mongoose, { Document, Model, Schema } from "mongoose";

interface IProduct extends Document {
  name: string;
  description: string;
  quantity: number;
  price: number;

  id: string;
}

const ProductSchema: Schema<IProduct> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
export default Product;
