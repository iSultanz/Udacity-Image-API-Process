import express from 'express';
import routes from './routes/routes';

const app: express.Application = express();
const port = 3000;

app.use(routes);

app.listen(port, async (): Promise<void> => {
  console.log(`Server is Listing on http://localhost:${port}`);
});

export default app;
