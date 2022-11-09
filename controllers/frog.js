var Frog = require('../models/frog');
// List of all Frog
exports.frog_list = function(req, res) {
res.send('NOT IMPLEMENTED: Frog list');
};
// for a specific Frog.
exports.frog_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Frog detail: ' + req.params.id);
};
// Handle Frog create on POST.
exports.frog_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Frog create POST');
};
// Handle Frog delete form on DELETE.
exports.frog_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Frog delete DELETE ' + req.params.id);
};
// Handle Frog update form on PUT.
exports.frog_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Frog update PUT' + req.params.id);
};
// List of all Frogs
exports.frog_list = async function(req, res) {
    try{
    theFrogs = await Frog.find();
    res.send(theFrogs);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };