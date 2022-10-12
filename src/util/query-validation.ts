import File from './file';
import { Query } from './../types/query';

const QueryValidation = async (query: Query): Promise<string> => {
  const { filename, width, height } = query;

  // Check if requested file is available
  if (!(await File.checkImage(filename))) {
    return `${filename} is not a valid name please choose another valid name`;
  }
  if (width && height) {
    return null;
  }
  const checkWidth: number = parseInt(query.width);
  if (width.length === 0 || checkWidth < 1) {
    return 'please select number more than 1 for width';
  }
  const checkHeight: number = parseInt(query.height);
  if (height.length === 0 || checkHeight < 1) {
    return 'please select number more than 1 for height';
  }
  return null;
};

export default QueryValidation;
