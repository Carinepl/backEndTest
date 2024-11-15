const users = require('../repositories/users'); 
const {User} = require('../models/user');

const deleteUser = (id) => {
    const userIndex = users.findIndex((_user) => _user.id === parseInt(id));

    if (userIndex === -1) {
        throw new Error("Recurso não encontrado");
    }

    users.splice(userIndex, 1);
};

module.exports = { deleteUser };


    
    

