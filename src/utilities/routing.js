

const setRoute = (router, routerFunction, routeMethod ,...routeMiddleware) => {
    let methodName = routerFunction.name;

    if(routeMethod.toLowerCase() === 'get') router.get('/' + methodName, routeMiddleware , routerFunction);
    else if (routeMethod.toLowerCase() === 'post') router.post('/' + methodName, routeMiddleware , routerFunction);
    else if (routeMethod.toLowerCase() === 'put') router.put('/' + methodName, routeMiddleware , routerFunction);
    else if (routeMethod.toLowerCase() === 'delete') router.delete('/' + methodName, routeMiddleware , routerFunction);
    else throw new Error ( "Method name " + methodName + " has wrong routing method");
}

const setAllRoutes = (routerObj, ...routerMiddleware) => {
    const customRouter = require('express')();

    for(let func in routerObj){
        let funcName = routerObj[func].name;

        if ( (/^(create|post)/i).test(funcName) ){
            customRouter.post( `/${funcName}`, routerMiddleware , routerObj[func] );
        } else if( (/^(update|put)/i).test(funcName) ){
            customRouter.put( `/${funcName}`, routerMiddleware, routerObj[func] )
        } else if ( (/^(delete)/i).test(funcName) ){
            customRouter.delete(`/${funcName}`, routerMiddleware, routerObj[func]);
        } else if ( (/^(get)/i).test(funcName) ) {
            customRouter.get( `/${funcName}`, routerMiddleware, routerObj[func] );
        } else if( (/^(getbyid)/i).test(funcName) ) {
            customRouter.get(`/${funcName}/:id`, routerMiddleware, routerObj[func])
        } else {
            const methodParseError = new Error ('MethodParseError');
            methodParseError.message = 'cannot parse function ' + funcName + '. Should start with get, post, put, delete'
        }
    }

    return customRouter;
}

const setCrudRoutes = (router, routerObj, ...routerMiddleware) => {
    router.get('/GetAll' , routerObj.GetAll ).get( '/GetById', routerObj.GetById );
    router.post('/Create', routerObj.Create);
    router.put('/Update', routerObj.Update);
    router.delete('/Delete', routerObj.Delete)
}

const setDynamicRoutes = (router, routerObj) => {

}

const getControllerClassName = (controllerClass) => {
    let classNameArr = controllerClass.name.split(/Controller$/);
    if(classNameArr.length == 2)
        return classNameArr[0];
    else throw new Error('No prefix controller');
}

module.exports = { setRoute, getControllerClassName, setAllRoutes, setCrudRoutes };
