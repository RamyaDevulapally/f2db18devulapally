// var express = require('express');
// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Frog', { title: 'Search Results' });
// });
// module.exports = router;

var express = require('express');
const frog_controlers= require('../controllers/frog');
var router = express.Router();
/* GET costumes */
router.get('/', frog_controlers.frog_view_all_Page );
module.exports = router;