const express = require('express');
const CompanyController = require('../../controller/company-controller/CompanyController');
const { setRoute, setCrudRoutes } = require('../../utilities/routing')
const { validator } = require('../../utilities/validator');

const CreateCompanyInput = require('../../controller/company-controller/validators/CreateCompany');

// get the Controller Name

const routePrefix = 'Company'; //getControllerClassName(CompanyController);

const companyRouter = (dependencies) => {
    const router = express.Router();

    const { CreateCompany, ...rest } = CompanyController(dependencies);

    setRoute(router, CreateCompany, 'POST', validator(CreateCompanyInput));

    // this has limitations.
    setCrudRoutes(router, rest);

    return router;
}


module.exports = { companyRouter, routePrefix };


// i can use two methods, either manually passing Methods (get, post, etc.) or dynamically passing Methods (get, post etc.)
