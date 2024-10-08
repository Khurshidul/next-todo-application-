import mongoose from "mongoose";

const connectMongoDB = async () => {
  const uri = process.env.MONGODB_URI;
  console.log(uri);
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
