const { CrudAppController } = require("../CRUDAppController");

module.exports = (dependencies) => {

    const { companyRepository } = dependencies.DatabaseService;

    const GetPersonDetails = (req, res) => {
        res.send({ 'message': 'details are sent.' })
    }

    const GetPersonStatus = (req, res) => {
        res.send({ 'message': 'status is sent. ' });
    }


    return {
        GetPersonDetails,
        GetPersonStatus,
        ...CrudAppController(companyRepository)
    }
}

