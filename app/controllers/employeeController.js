// import the custom library
const responseLib = require('./../libs/responseLib');

let getEmployees = (req, res) => {
    let apiResponse = responseLib.generateResponse(false, 'Employees found', 200, 'This is employee data');
    res.send(apiResponse);
}

// export controller
module.exports = {
    getEmployees: getEmployees
}