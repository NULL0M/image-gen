import Express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = Express();
app.use(cors());
app.use(Express.json());

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log(`Server listening on port 8080`);
});
