import mongoose from "mongoose";

export const connectDB = async (url) => {
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');

  } catch (err) {
    console.error('Database error', err)
  }
}

