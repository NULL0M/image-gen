//image-gen/server/index.js

import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));


const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8090, () => console.log('Server started on port 8090'));
  } catch (error) {
    console.error('Server startup error:', error);
  }
};

startServer();