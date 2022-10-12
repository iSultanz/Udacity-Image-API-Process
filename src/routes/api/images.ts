import express from 'express';
import File from './../../util/file';
import QueryValidation from './../../util/query-validation';

const images: express.Router = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    //check the query if it have the required data
    const validationMessage = await QueryValidation(req.query);
    if (validationMessage) {
      res.send(validationMessage);
      return;
    }

    let thumbImage: null | string = '';
    thumbImage = await File.createThumb(req.query);

    // Handle image processing error
    if (thumbImage) {
      res.sendFile(thumbImage);
    } else {
      res.send('File Not Found');
    }
    return;
  },
);

export default images;
