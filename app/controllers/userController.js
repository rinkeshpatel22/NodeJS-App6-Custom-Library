// import the custom library
const responseLib = require('./../libs/responseLib');

let getUsers = (req, res) => {
    let apiResponse = responseLib.generateResponse(false, 'Users found', 200, 'This is user data');
    res.send(apiResponse);
}

// export controller
module.exports = {
    getUsers: getUsers
}