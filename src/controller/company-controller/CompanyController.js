const { CrudAppController } = require("../CRUDAppController");

module.exports = (dependencies) => {

    const { companyRepository } = dependencies.DatabaseService;

    const CreateCompany = (req, res) => {
        const entity = req.body;
        // create the entity
        console.log(companyRepository);
        // return the entity.
        res.send(entity);
    }

    return {
        CreateCompany,
        ...CrudAppController(companyRepository)
    }
}


// call another function refrence which takes all functions and add it into a route.

/*
module.exports = class CompanyController { //extends CrudAppController{
    constructor(dependencies) {
        //super(dependencies);
        this.dependencies = dependencies;
    }

    /!*
        for Validation data go check company routes
     *!/
    CreateCompany(req, res){
        const entity = req.body;
        // create the entity
        console.log( this );
        // return the entity.
        res.send(entity);
    }

}
*/
