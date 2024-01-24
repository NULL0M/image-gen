//image-gen/server/mongodb/connect.js

import mongoose from 'mongoose';

const connectDB = async (url) => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB');
    console.error(error);
    // Throw the error again to propagate it up to the calling function
    throw error;
  }
};

export default connectDB;
