// server/routes/usersRoute.js

import Express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../mongodb/models/Users.js';

const router = Express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    // return res.status(400).json({ message: 'Username already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    username,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  res.json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .json({ message: 'Username or password is incorrect' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: 'Username or password is incorrect' });
  }
  const token = jwt.sign({ id: user._id }, 'secret');
  res.json({ token, userID: user._id, user: user });
});

// New route to get user information
router.get('/users/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export { router as usersRouter };
