

const setRoute = (router, routerFunction, routeMethod ,...routeMiddleware) => {
    let methodName = routerFunction.name;

    if(routeMethod.toLowerCase() === 'get') router.get('/' + methodName, routeMiddleware , routerFunction);
    else if (routeMethod.toLowerCase() === 'post') router.post('/' + methodName, routeMiddleware , routerFunction);
    else if (routeMethod.toLowerCase() === 'put') router.put('/' + methodName, routeMiddleware , routerFunction);
    else if (routeMethod.toLowerCase() === 'delete') router.delete('/' + methodName, routeMiddleware , routerFunction);
    else throw new Error ( "Method name " + methodName + " has wrong routing method");
}

const setAllRoutes = (router, routerFunctionArr, ...routerMiddleware) => {
}

const setCrudRoutes = (router, routerObj, ...routerMiddleware) => {
    router.get('/GetAll' , routerObj.GetAll ).get( '/GetById', routerObj.GetById );
    router.post('/Create', routerObj.Create);
    router.put('/Update', routerObj.Update);
    router.delete('/Delete', routerObj.Delete)
}

const getControllerClassName = (controllerClass) => {
    let classNameArr = controllerClass.name.split(/Controller$/);
    if(classNameArr.length == 2)
        return classNameArr[0];
    else return null;
}

module.exports = { setRoute, getControllerClassName, setAllRoutes, setCrudRoutes };
