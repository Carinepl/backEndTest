const createUser = require('../userCase/createUser');

const createUserControls = (request, response) => {
    try {
        const data = request.body;
        const newUser = createUser(data);
        return response.status(201).json(newUser);
    } catch (e){
        return response.status(400).send(e)
    }
    
};


module.exports = { createUserControls};