// import controllers
const employeeController = require('./../controllers/employeeController');
const userController = require('./../controllers/userController');
const sharedController = require('./../controllers/sharedController');

// set routes with middlewares and contollers. 
let setRouter = (app) => {
    app.get('/employees', employeeController.getEmployees);
    app.get('/users', userController.getUsers);
    app.get('/', sharedController.generateMessage);
}

// export routes
module.exports = {
    setRouter: setRouter
}