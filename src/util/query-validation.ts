import { Query } from './../types/query';

const QueryValidation = async (query: Query): Promise<string> => {
  const { filename, width, height } = query;
  const checkWidth: number = parseInt(query.width);
  const checkHeight: number = parseInt(query.height);

  if (!filename) {
    return `${filename} is not a valid name please choose another valid name`;
  }
  if (filename && !width && !height) {
    return null;
  }
  if (width && height) {
    return null;
  }
  if (!checkWidth || checkWidth < 1) {
    return 'please select number more than 1 for width';
  }
  if (!checkHeight || checkHeight < 1) {
    return 'please select number more than 1 for height';
  }
  return null;
};

export default QueryValidation;
