// server/routes/postRoutes.js
import express from 'express';
import cloudinary from 'cloudinary';
import Post from '../mongodb/models/post.js';
import { UserModel } from '../mongodb/models/Users.js';
import { verifyToken } from '../middleware/auth.js'; // Import the token verification function

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Query the database to find posts associated with the user ID
    const userPosts = await Post.find({ userID: userId }).populate('userID');

    res.status(200).json({ success: true, data: userPosts });
  } catch (err) {
    console.error('Error fetching user posts:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching user posts, check console for details',
    });
  }
});

router.post('/', verifyToken, async (req, res) => {
  try {
    // console.log(req.body);
    const { prompt, photo } = req.body;
    const userId = req.user.id;

    const user = await UserModel.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }
    // console.log(user);
    // console.log('Upload image of Cloudinary...');
    const photoUrl = await cloudinary.uploader.upload(photo, {
      folder: 'posts',
    });
    // console.log('URL of image:', photoUrl);
    // console.log('Create new post...');
    // console.log(user);
    const newPost = await Post.create({
      userID: user._id,
      prompt,
      photo: photoUrl.url,
    });

    const getPost = await Post.findById(newPost._id).populate('userID');
    console.log('test', getPost);
    res.status(200).json({ success: true, data: getPost });
  } catch (err) {
    console.error('Error create post:', err); // Add a console.error to log any errors that occur during the process
    res.status(500).json({
      success: false,
      message: 'Error creating post, check console for details',
    });
  }
});

// Add a console.error to log any errors that occur during the process
router.get('/', async (req, res) => {
  try {
    let posts = await Post.find().populate('userID');
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    console.error('Error fetching posts:', err); // Add a console.error to log any errors that occurred during the process
    res.status(500).json({
      success: false,
      message: 'Error fetching posts, check console for details',
    });
  }
});

export default router;
