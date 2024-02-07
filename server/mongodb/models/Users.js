//server/mongodb/models/Users.js

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  user: {
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
});

export const UserModel = mongoose.model('User', UserSchema);
