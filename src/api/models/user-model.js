const userItems = [
  {
    user_id: 3609,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@metropolia.fi',
    role: 'user',
    password: 'password',
  },
  {
    user_id: 3610,
    name: 'Jane Doe',
    username: 'janedoe',
    email: 'jane@metropolia.fi',
    role: 'user',
    password: 'password',
  },
];

const listAllUsers = () => userItems;

const findUserById = (id) => userItems.find((item) => item.user_id == id);

const addUser = (user) => {
  const newId = userItems.length ? userItems[0].user_id + 1 : 1;
  const newUser = {user_id: newId, ...user};
  userItems.unshift(newUser);
  return {user_id: newId};
};

export {listAllUsers, findUserById, addUser};
