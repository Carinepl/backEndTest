const users = require('../repositores/users');



const getUserById = (request, response) => {
    const { id } = request.params;
    const user = users.find((_user) => _user.id === parseInt(id));

    if (!user) {
        return response.status(404).json({ message: "Recurso não encontrado" });
    }

    return response.status(200).json(user);
};


module.exports =  {getUserById} ;