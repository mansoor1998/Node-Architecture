const Company = require('../../model/Company');
const CrudRepository = require('./CrudRepsitory');

module.exports = class CompanyRepository extends CrudRepository{
    constructor() {
        super(Company);
    }

    randomCurdFunction(){
        console.log('Company repository is called');
        console.log(this.Model);
    }
}
