const { createUser } = require('../userCase/CreatUser');

const createUser = (request, response) => {
    try {
        const data = request.body;
        const newUser = createUser(data);
        return response.status(201).json(newUser);
    } catch (e){
        return response.status(400).send(e)
    }
    
};


module.exports = { createUser };