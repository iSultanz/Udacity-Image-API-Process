import express from 'express';
import routes from './routes/routes';
import { promises as fs } from 'fs';
const app: express.Application = express();
const port = 3000;

app.use(routes);
//to create the thumb folder if not exists
const createThumbFolder = async () => {
  const thumbPath = './assets/thumb';
  try {
    await fs.access(thumbPath);
  } catch {
    fs.mkdir(thumbPath);
  }
};
app.listen(port, async (): Promise<void> => {
  await createThumbFolder();
  console.log(`Server is Listing on http://localhost:${port}`);
});

export default app;
