
const  {deleteUser } = require('../repositores/users');


const deleteUserControls = (request, response) => {
    const { id } = request.params;

    try {
        deleteUser(id);
        
        
        return response.sendStatus(204);
    } catch (error) {
        if (error.message === "Recurso não encontrado") {
            return response.status(404).json({ message: error.message });
        }
        
        return response.status(500).json({ message: "Erro interno do servidor" });
    }
};

module.exports =  {deleteUserControls};
