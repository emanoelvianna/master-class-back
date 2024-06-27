const userController = require('../../controllers/userController');
const userModel = require('../../models/userModel');

jest.mock('../../models/userModel');

describe('User Controller', () => {
  it('should get all users', () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };

    userModel.getAllUsers.mockReturnValue([{ id: 1, name: 'John Doe' }]);
    userController.getUsers(req, res);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'John Doe' }]);
  });

  it('should add a new user', () => {
    const req = { body: { name: 'Jane Doe' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    userModel.createUser.mockReturnValue({ id: 1, name: 'Jane Doe' });
    userController.addUser(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ id: 1, name: 'Jane Doe' });
  });
});