const { users, posts } = require('./data');

const getPostsForUser = (userId, cb) => {
  setTimeout(() => {
    const filteredPosts = posts.filter((post) => {
      return post.createdBy === userId;
    });
    cb(filteredPosts);
  }, 150);
};

const getUserById = (id, cb) => {
  setTimeout(() => {
    const user = users.find((user) => {
      return user.id === id;
    });
    cb(user);
  }, 150);
};

module.exports = {
  getUserById,
  getPostsForUser,
};
