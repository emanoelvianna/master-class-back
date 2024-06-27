const userModel = require('../../models/userModel');

describe('User Model', () => {
  it('should create a new user', () => {
    const user = userModel.createUser('John Doe');
    expect(user).toEqual({ id: 1, name: 'John Doe' });
  });

  it('should get all users', () => {
    userModel.createUser('Jane Doe');
    const users = userModel.getAllUsers();
    expect(users.length).toBe(2);
  });
});