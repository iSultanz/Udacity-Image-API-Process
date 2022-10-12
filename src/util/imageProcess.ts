import sharp from 'sharp';
import { SharpResize } from './../types/shapeResize';
const imageProcess = async (resize: SharpResize): Promise<string> => {
  try {
    await sharp(resize.source)
      .resize(resize.width, resize.height)
      .toFormat('jpeg')
      .toFile(resize.target);
    return null;
  } catch (err) {
    console.log(err);
    return 'Image could not be processed.';
  }
};

export default imageProcess;
