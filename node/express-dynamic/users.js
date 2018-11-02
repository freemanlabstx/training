const users = [
  {
    id: 1,
    username: "signalnerve"
  },
  {
    id: 2,
    username: "k-punk"
  },
  {
    id: 3,
    username: "hax0r"
  }
];

const createUser = body => body;
const updateUser = body => body;
const deleteUser = id => {};

const getUser = id => users.find(u => u.id == id);
const getUsers = () => users;

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getUser,
  getUsers
};
