import express from 'express';
import images from './api/images';

const routes: express.Router = express.Router();

routes.use('/api/images', images);

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    `<h1>Welcome To Image API Process!</h1>
    <p>to start go to /api/image then add the filename as query param desired selected Images</p>`,
  );
});

export default routes;
