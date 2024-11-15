class User {
    id
    name
    age
    job

    constructor (data) {
        this.name = data.name
        this.age = data.age
        this.job = data.job 

        if (!data.id){
            this.id = Date.now()
        } else {

            this.id = data.id
        }
         
    }
    
}
module.exports = {User};