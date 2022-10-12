import { promises as fs } from 'fs';
import path from 'path';
import imageProcess from './imageProcess';
import { Query } from './../types/query';

export default class File {
  static fullPath = path.resolve(__dirname, '../../assets/full');
  static thumbPath = path.resolve(__dirname, '../../assets/thumb');

  static async checkImage(filename = ''): Promise<boolean> {
    if (!filename) {
      return false;
    }
    return true;
  }
  static async createThumb(params: Query): Promise<string> {
    const { filename, width, height } = params;
    if (!filename || !width || !height) {
      //return nothing if user don't send anything
      return null;
    }
    const filePathFull: string = path.resolve(File.fullPath, `${filename}.jpg`);
    const filePathThumb: string = path.resolve(
      File.thumbPath,
      `${filename}-${width}x${height}.jpg`,
    );

    console.log(`Creating thumb ${filePathThumb}`);

    // use sharp to create thumb of original image
    await imageProcess({
      source: filePathFull,
      target: filePathThumb,
      width: parseInt(params.width),
      height: parseInt(params.height),
    });
    //return the image path to display
    const imagePath: string = await File.getImagePath(params);
    return imagePath;
  }
  //retrieve the image path to show it ...
  static async getImagePath(params: Query): Promise<null | string> {
    const { filename, width, height } = params;
    if (!params.filename) {
      return null;
    }
    // check if width and height exist else return the original path for the image
    const filePath: string =
      width && height
        ? path.resolve(File.thumbPath, `${filename}-${width}x${height}.jpg`)
        : path.resolve(File.fullPath, `${filename}.jpg`);
    // Check file existence
    try {
      await fs.access(filePath);
      return filePath;
    } catch {
      return null;
    }
  }
}
