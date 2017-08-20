var jwt = require('jwt-simple');
var config = require('../config/config');

exports.login = function(req, res) {
    var username = req.body.username || '';
    var password = req.body.password || '';

    if (username == '' || password == '') {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid credentials"
        });
        return;
    }

    // Fire a query to your DB and check if the credentials are valid
    var dbUserObj = exports.validate(username, password);
    
    if (!dbUserObj) { // If authentication fails, we send a 401 back
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid credentials"
        });
        return;
    }

    if (dbUserObj) {
        res.json(genToken(dbUserObj));
    }

 }

 exports.validate = function(username, password) {
    // spoofing the DB response for simplicity
    var dbUserObj = { // spoofing a userobject from the DB. 
        name: 'ntvong',
        role: 'admin',
        username: 'ntvong@gmail.com'
    };
    if (username != 'ntvong@gmail.com' && password != '123456789')
        dbUserObj = null;
    return dbUserObj;
 }

 exports.validateUser = function(username) {
    // spoofing the DB response for simplicity
    var dbUserObj = { // spoofing a userobject from the DB. 
        name: 'arvind',
        role: 'admin',
        username: 'ntvong@gmail.com'
    };

    return dbUserObj;
 }


// private method
function genToken(user) {
    var expires = expiresIn(7); // 7 days
    var token = jwt.encode({
        exp: expires
    }, config.secret);

    return {
        token: token,
        expires: expires,
        user: user
    };
}

function expiresIn(numDays) {
 var dateObj = new Date();
 return dateObj.setDate(dateObj.getDate() + numDays);
}
