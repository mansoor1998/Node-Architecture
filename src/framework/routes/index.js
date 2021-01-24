const express = require('express');
const { companyRouter, routePrefix : companyPrefix } = require('./company');

const apiRouter = (dependencies) => {
    const router = express.Router();

    const result = companyRouter(dependencies);

    router.use(`/${companyPrefix}`, result);
    return router;
};


module.exports = apiRouter;
