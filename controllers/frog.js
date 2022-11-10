var Frog = require('../models/frog');
// List of all Frog
exports.frog_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Frog list');
};
// for a specific Frog.
exports.frog_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Frog detail: ' + req.params.id);
};
// Handle Frog create on POST.
exports.frog_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Frog create POST');
};
// Handle Frog delete form on DELETE.
exports.frog_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Frog delete DELETE ' + req.params.id);
};
// Handle Frog update form on PUT.
exports.frog_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Frog update PUT' + req.params.id);
};
// List of all Frogs
exports.frog_list = async function (req, res) {
    try {
        theFrogs = await Frog.find();
        res.send(theFrogs);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.frog_view_all_Page = async function (req, res) {
    try {
        theFrogs = await Frog.find();
        res.render('frog', { title: 'Frog Search Results', results: theFrogs });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume create on POST. 
exports.frog_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Frog();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.age = req.body.age;
    document.color = req.body.color;
    document.lifeSpan = req.body.lifeSpan;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}; 