const CompanyRepository = require('../application/repository/CompanyRepository');
const CrudRepository = require('../application/repository/CrudRepsitory');
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

    }
}
