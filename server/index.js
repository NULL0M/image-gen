//image-gen/server/index.js
import express from 'express';
import session from 'express-session';
import connectMongoDBSession from 'connect-mongodb-session';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import dalleRoutes from './routes/dalleRoutes.js';
import postRoutes from './routes/postRoutes.js';
import { usersRouter } from './routes/usersRoute.js';
import { resetPasswordRouter } from './routes/resetPasswordRoute.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Configuração do MongoDBStore
const MongoDBStore = connectMongoDBSession(session);
const store = new MongoDBStore({
  uri: process.env.MONGODB_URL,
  collection: 'sessions', // nome da coleção onde as sessões serão armazenadas
});

store.on('error', function (error) {
  console.error('MongoDBStore error:', error);
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/user', usersRouter);
app.use('/api/v1/reset-password', resetPasswordRouter);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8090, () => console.log('Server started on port 8090'));
  } catch (error) {
    console.error('Server startup error:', error);
  }
};

startServer();
