var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var frog_controller = require('../controllers/frog');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// FROG ROUTES ///
// POST request for creating a Frog.
router.post('/frogs', frog_controller.frog_create_post);
// DELETE request to delete Frog.
router.delete('/frogs/:id', frog_controller.frog_delete);
// PUT request to update Frog.
router.put('/frogs/:id', frog_controller.frog_update_put);
// GET request for one Frog.
router.get('/frogs/:id', frog_controller.frog_detail);
// GET request for list of all Frog items.
router.get('/frogs', frog_controller.frog_list);
module.exports = router;