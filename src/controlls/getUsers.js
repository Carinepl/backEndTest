const users = require('../repositores/users');


const getUsers = (request, response) => {
    return response.status(200).json(users);
};


module.exports = { getUsers };