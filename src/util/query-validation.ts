import path from 'path';
import { promises as fs } from 'fs';
import { Query } from './../types/query';

const QueryValidation = async (query: Query): Promise<string> => {
  const { filename, width, height } = query;
  const checkWidth = Number(width);
  const checkHeight = Number(height);
  const fullPath = './assets/full';

  if (!filename) {
    return `${filename} is not a valid name please choose another valid name`;
  }

  if (filename) {
    try {
      await fs.access(path.resolve(fullPath, `${query.filename}.jpg`));
    } catch {
      return `${filename} is not a valid name please choose another valid name`;
    }
  }
  if (filename && !width && !height) {
    return null;
  }
  if (Number.isNaN(checkWidth) || checkWidth < 1) {
    return 'please select number more than 1 for width';
  }
  if (Number.isNaN(checkHeight) || checkHeight < 1) {
    return 'please select number more than 1 for height';
  }
  return null;
};
export default QueryValidation;
