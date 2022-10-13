import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test to check the endpoint response', (): void => {
  //check the main endpoint
  describe('test main endpoint: /', (): void => {
    it('gets /', async (): Promise<void> => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });
  describe('test the api endpoint: /api/images', (): void => {
    //check the response of good request
    it('gets /api/images?filename=fjord', async (): Promise<void> => {
      const response = await request.get('/api/images?filename=fjord');
      expect(response.status).toBe(200);
    });
    //check if the request with height and width
    it('gets /api/images?filename=fjord&width=199&height=199', async (): Promise<void> => {
      const response = await request.get(
        '/api/images?filename=fjord&width=199&height=199',
      );
      expect(response.status).toBe(200);
    });
    //check with invalid params (negative numbers and empty parameter)
    // it should return status 400 which mean BadRequest
    it('gets /api/images?filename=fjord&width=-200&height=200', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/images?filename=fjord&width=-200&height=200',
      );
      expect(response.status).toBe(400);
    });
    //no parameter given
    it('gets /api/images', async (): Promise<void> => {
      const response = await request.get('/api/images');

      expect(response.status).toBe(400);
    });
  });
  //empty height
  it('gets /api/images?filename=fjord&width=200&height=', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/images?filename=fjord&width=-200&height=',
    );
    expect(response.status).toBe(400);
  });
});
