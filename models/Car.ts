import mongoose, { Schema, model } from "mongoose";

const CarsSchema = new Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Date, required: true },
  price: { type: Number, required: true },
  images: [{ type: String }], // ✅ MUST be an array of strings,
});

const Car = mongoose.models.Car || model("Car", CarsSchema);
export default Car;
