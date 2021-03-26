const { Post } = require('../models');

const postData = [
  {
    post_title: 'Please work',
    post_content: 'Bill is hoping this app is functional',
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;