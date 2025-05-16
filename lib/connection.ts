import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO;
async function connectToDatabase() {
  await mongoose.connect(MONGODB_URI!);
  console.log(MONGODB_URI);
  return mongoose;
}

export default connectToDatabase;
