import express from 'express';
import { promises as fs } from 'fs';
import { Query } from '../../types/query';
import path from 'path';
import QueryValidation from './../../util/query-validation';
import resizeImage from '../../util/resize-image';

const fullPath = './assets/full';
const thumbPath = './assets/thumb';

const createThumbImage = async (param: Query): Promise<string> => {
  const { filename, width, height } = param;

  //return nothing if user don't send anything
  if (!filename && !width && !height) {
    return null;
  }

  //if user don't enter a height or width return original image store in full folder
  if (!width && !height) {
    const originalImage: string = await getImagePath(param);
    return originalImage;
  }

  //use path library to setup path for resize with sharp library
  const fullForResize: string = path.resolve(fullPath, `${filename}.jpg`);
  const thumbForResize: string = path.resolve(
    thumbPath,
    `${filename}-${width}x${height}.jpg`,
  );

  //send data for sharp to resize the image
  //resize image contain the logic for resize stored as utility
  await resizeImage({
    source: fullForResize,
    target: thumbForResize,
    width: parseInt(width),
    height: parseInt(height),
  });
  //return the image path to display
  const imagePath: string = await getImagePath(param);
  console.log(`Path of the photo ${imagePath}`);
  return imagePath;
};

const getImagePath = async (param: Query): Promise<string> => {
  const { filename, width, height } = param;
  if (!filename) {
    return null;
  }

  // check if width and height exist else return the original path for the image
  const filePath: string =
    width && height
      ? path.resolve(thumbPath, `${filename}-${width}x${height}.jpg`)
      : path.resolve(fullPath, `${filename}.jpg`);

  return filePath;
};
const images: express.Router = express.Router();
images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const query: Query = req.query;

    //check the query if it have the required data
    const validationMessage = await QueryValidation(query);
    if (validationMessage) {
      res.send(validationMessage);
      return;
    }
    const thumbImage = await createThumbImage(query);

    // check the image found then return it else return not found message...
    if (thumbImage) {
      res.sendFile(thumbImage);
    } else {
      res.send('File Not Found');
    }
    return;
  },
);
export default images;
