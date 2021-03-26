const { User } = require('../models');

const usersData = [
  {
    username: 'Bill',
    email: 'bill@gmail.com',
    password: 'billpw123'
  }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;