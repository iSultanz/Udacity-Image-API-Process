import { createThumbImage } from '../routes/api/images';
import { Query } from '../types/query';

//check if the function of creating thumb and using sharp library is working
describe('Test the input for creating thumb', (): void => {
  it('should raise error because of the width', async (): Promise<void> => {
    const testParam: Query = {
      filename: 'encenadaport',
      width: '-100',
      height: '500',
    };
    const error = await createThumbImage(testParam);
    expect(error).not.toBeNull();
  });

  it('should raise error because of the file name is not exist', async (): Promise<void> => {
    const testParam: Query = {
      filename: 'dummy name',
      width: '100',
      height: '500',
    };
    const test = await createThumbImage(testParam);
    expect(test).not.toBeNull();
  });

  // Note: Could also fail because of directory permissions
  it('valid input should return null if success', async (): Promise<void> => {
    const testParam: Query = {
      filename: 'palmtunnel',
      width: '100',
      height: '500',
    };
    const test = await createThumbImage(testParam);
    expect(test).toBeNull();
  });
});
