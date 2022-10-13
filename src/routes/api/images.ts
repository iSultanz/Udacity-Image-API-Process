import express from 'express';
import { promises as fs } from 'fs';
import { Query } from '../../types/query';
import path from 'path';
import QueryValidation from './../../util/query-validation';
import resizeImage from '../../util/resize-image';

const fullPath = './assets/full';
const thumbPath = './assets/thumb';

export const createThumbImage = async (param: Query): Promise<string> => {
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
  const result = await resizeImage({
    source: fullForResize,
    target: thumbForResize,
    width: parseInt(width),
    height: parseInt(height),
  });
  //return the image path to display
  return result;
};

export const getImagePath = async (param: Query): Promise<string> => {
  const { filename, width, height } = param;
  if (!filename) {
    return null;
  }
  // check if width and height exist else return the original path for the image
  const filePath: string =
    width && height
      ? path.resolve(thumbPath, `${filename}-${width}x${height}.jpg`)
      : path.resolve(fullPath, `${filename}.jpg`);
  //check if the thumb is already created for caching purpose...
  try {
    await fs.access(filePath);
  } catch (error) {
    await createThumbImage(param);
    console.log(`Path of the photo ${filePath}`);
  }
  return filePath;
};

const images: express.Router = express.Router();
images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<any> => {
    const query: Query = req.query;
    //check the query if it have the required data
    const validationMessage = await QueryValidation(query);
    if (validationMessage) {
      return res.status(400).send(validationMessage);
    }
    const imagePath: string = await getImagePath(query);
    // check the image found then return it else return not found message...
    if (imagePath) {
      res.sendFile(imagePath);
    } else {
      res.send('File Not Found');
    }
    return;
  },
);
export default images;
