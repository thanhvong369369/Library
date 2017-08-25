var User = require('../models/user');

exports.setup = function(req, res) {
    
    var Vong = new User({
        name: 'Vong Nguyen',
        password: '12345678x@X',
        admin: true
    });

    Vong.save(function(err){
        if(err) throw err;

        console.log('User saved successfully');
        res.status(200).json({success: true});
    });
};

exports.show = function(req, res) {
    var result = User.findById("599eb12ffcf92a3a185a1dcb",function(err,users){
        if(err) throw err;
        res.json(users);
    });
};

// var users = {
    
//      getAll: function(req, res) {
//        var allusers = data; // Spoof a DB call
//        res.json(allusers);
//      },
    
//      getOne: function(req, res) {
//        var id = req.params.id;
//        var user = data[0]; // Spoof a DB call
//        res.json(user);
//      },
    
//      create: function(req, res) {
//        var newuser = req.body;
//        data.push(newuser); // Spoof a DB call
//        res.json(newuser);
//      },
    
//      update: function(req, res) {
//        var updateuser = req.body;
//        var id = req.params.id;
//        data[id] = updateuser // Spoof a DB call
//        res.json(updateuser);
//      },
    
//      delete: function(req, res) {
//        var id = req.params.id;
//        data.splice(id, 1) // Spoof a DB call
//        res.json(true);
//      }
//    };
    
//    var data = [{
//      name: 'user 1',
//      id: '1'
//    }, {
//      name: 'user 2',
//      id: '2'
//    }, {
//      name: 'user 3',
//      id: '3'
//    }];
    
//    module.exports = users;