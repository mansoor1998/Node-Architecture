const express = require('express');
const { companyRouter, routePrefix : companyPrefix } = require('./company');
const { setAllRoutes, getControllerClassName } = require('../../utilities/routing');

/*Controllers*/
const PersonController = require('../../controller/person-controller/PersonController')

const apiRouter = (dependencies) => {
    const router = express.Router();

    /*dynamic routes*/
    const result = companyRouter(dependencies);

    /*dynamic controllers*/
    const personController = PersonController(dependencies);

    router.use(`/${companyPrefix}`, result);

    /*dynamic routers*/
    router.use(`/Person`, setAllRoutes(personController));

    return router;
};


module.exports = apiRouter;
