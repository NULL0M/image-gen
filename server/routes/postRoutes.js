import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const { prompt, photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo, {
      folder: 'posts',
    });
    console.log(photoUrl);
    const newPost = await Post.create({
      prompt,
      photo: photoUrl.url,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.json({
      success: false,
      message: err,
      // message: 'Unable to create a post, please try again',
    });
  }
});

router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Fetching posts failed, please try again',
    });
  }
});
// router.route('/test').post(async (req, res) => {

// });

export default router;