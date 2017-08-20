var express = require('express');
var router = express.Router();

// Require controller modules
var auth = require('../controllers/authenticationController');
var book_controller = require('../controllers/bookController');
var user_controller = require('../controllers/userController');
/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);

/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/books', book_controller.book_list);
router.all('/api/catalog/*', function(req, res, next){
   console.log(req.url);
    res.redirect('/catalog');
});
/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/admin/users', user_controller.getAll);
router.get('/api/admin/user/:id', user_controller.getOne);
router.post('/api/admin/user/', user_controller.create);
router.put('/api/admin/user/:id', user_controller.update);
router.delete('/api/admin/user/:id', user_controller.delete);

// router.get('/', function(req, res, next) {
//   //res.redirect('/catalog');
//   //res.render('index', { title: 'Express' });
//   res.json({"OK":true});
// });

module.exports = router;
