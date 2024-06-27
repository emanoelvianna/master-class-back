const userModel = require('../models/userModel');

const getUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.json(users);
};

const addUser = (req, res) => {
  const { name } = req.body;
  const user = userModel.createUser(name);
  res.status(201).json(user);
};

module.exports = {
  getUsers,
  addUser,
};