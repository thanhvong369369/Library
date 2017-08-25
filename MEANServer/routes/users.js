var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/setup', user_controller.setup);
router.get('/show', user_controller.show);

module.exports = router;
