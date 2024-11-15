
const users = require('../repositores/users');



const deleteUser = (request, response) => {
    const { id } = request.params;
    const userIndex = users.findIndex((_user) => _user.id === parseInt(id));

    if (userIndex === -1) {
        return response.status(404).json({ message: "Recurso não encontrado" });
    }

    users.splice(userIndex, 1);
    return response.sendStatus(204);
};


module.exports = { deleteUser };