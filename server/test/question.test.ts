import request from 'supertest';
import app from '../src/app';

describe('Questions', () => {
  it('returns a list of three questions', async () => {
    const res = await request(app).get('/api/v1/questions').send().expect(200);
    expect(res.body.questions.length).toBe(3);
  });
});
