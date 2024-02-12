//server/mongodb/models/Users.js

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    /* min: 3,
        max: 20, */
    unique: true,
  },
  email: {
    type: String,
    required: true,
    /* max: 50, */
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  generateImageCount: {
    count: {
      type: Number,
      default: 0,
      min: 0,
      max: 15,
    },
  },
});

export const UserModel = mongoose.model('User', UserSchema);
