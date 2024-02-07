// migration.js

import mongoose from 'mongoose';
import { UserModel } from './mongodb/models/Users.js';
import dotenv from 'dotenv';

dotenv.config();

async function updateIndexes() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Remove the old index
    await UserModel.collection.dropIndex('username_1');
    console.log('Old index dropped.');

    // Add a new index
    await UserModel.collection.createIndex({ user: 1 }, { unique: true });
    console.log('New index created.');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  } catch (err) {
    console.error('Error updating indexes:', err); // Corrigido aqui
  }
}

updateIndexes();
