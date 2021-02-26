const CompanyRepository = require('../application/repository/CompanyRepository');
const CrudRepository = require('../application/repository/CrudRepsitory');
const mongoose = require('mongoose');




/**/

module.exports = class DatabaseService {
    constructor() {
        // create all repositories.
        this.companyRepository = new CompanyRepository();
    }

    // Model is a class type
    getDynamicCrudRepo(Model){
        return new CrudRepository(Model);
    }

    async initDatabase(){
        const uri = "mongodb+srv://mansoor:mansoor1@cluster0.eyb6v.mongodb.net/Cluster0?retryWrites=true&w=majority";

        return mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log('MongoDB Connected...')
        })
        .catch(err => console.log(err.message))
    }
}
