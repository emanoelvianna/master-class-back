const users = [];

const getAllUsers = () => users;

const createUser = (name) => {
  const user = { id: users.length + 1, name };
  users.push(user);
  return user;
};

module.exports = {
  getAllUsers,
  createUser,
};