const users = require('../repositores/users');
const { User } = require('../models/user');

const createUser = (data) => {
    const newUser = new User(data)

    if (!newUser.id) {
        throw new Error("Usuario não criado")

    } 
    users.push(newUser);


    return newUser
};

module.exports = { createUser };

