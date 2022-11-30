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

// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET frogs */
router.get('/', frog_controlers.frog_view_all_Page );
module.exports = router;

/* GET detail frog page */ 
router.get('/detail', frog_controlers.frog_view_one_Page); 

/* GET create frog page */ 
router.get('/create', frog_controlers.frog_create_Page); 
 
/* GET update costume page */ 
router.get('/update', secured, frog_controlers.frog_update_Page); 
 

/* GET delete frog page */ 
router.get('/delete', frog_controlers.frog_delete_Page); 

