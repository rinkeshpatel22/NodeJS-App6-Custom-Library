// import the custom library
const responseLib = require('./../libs/responseLib');

let generateMessage = (req, res) => {
    let apiResponse = responseLib.generateResponse(false, 'home page found', 200, 'Check routes:  http://127.0.0.1:3000/employees   &   http://127.0.0.1:3000/users');
    res.send(apiResponse);
}

// export controller
module.exports = {
    generateMessage: generateMessage
}