const express = require('express');
const bodyParser = require("body-parser");
const apiRoutes = require('../framework/routes/index');
const projectDependencies = require('./projectDependencies');


// Application
const app = express();
const port = process.env.PORT || 3000;


function initDataBase(){
    /*return typeorm.createConnection({
        type: "mssql",
        host: "localhost",
        port: 1433,
        database: "checking",
        entitySchemas: [
            require("../model/Company"),
        ]
    }).then(function (connection){
        console.log("wao");
    });*/
    return new Promise( (res, rej) => res(true) );
}


projectDependencies.DatabaseService.initDatabase().then(() => {
    // load middlewares.
    app.use(bodyParser.json());

    //load routes (load all of the routes once the controller is made)
    app.use('/api/v1', apiRoutes(projectDependencies));

    // generic error handler. (load the error handler once it is made)

    // initalize the server
    app.listen(port, () => console.log(`The application started at PORT: ${port}`));

}, (err) => {
    console.log('Failed to connect to DB');
}).catch( (err) => console.log(err.message) )
