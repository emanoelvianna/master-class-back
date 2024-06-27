const request = require('supertest');
const app = require('../../app');

describe('User Router', () => {
  it('should get all users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'John Doe' });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ id: 1, name: 'John Doe' });

    const getUsersResponse = await request(app).get('/api/users');
    expect(getUsersResponse.statusCode).toBe(200);
    expect(getUsersResponse.body.length).toBe(1);
  });
});