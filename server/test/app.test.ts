import request from 'supertest';
import app from '../src/app';

describe('app', () => {
  it('returns a 200 response if app is up', async () => {
    return request(app).get('/health').send().expect(200);
  });
});
