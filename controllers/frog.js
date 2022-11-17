var Frog = require('../models/frog');
// List of all Frog
exports.frog_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Frog list');
};
// for a specific Frog. 
exports.frog_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Frog.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    }
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

// Handle Frog create on POST. 
exports.frog_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Frog();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"frog_type":"goat", "cost":12, "size":"large"} 
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

// Handle Frog update form on PUT. 
exports.frog_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Frog.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.age) toUpdate.age = req.body.age; 
        if(req.body.color) toUpdate.color = req.body.color; 
        if(req.body.lifeSpan) toUpdate.lifeSpan = req.body.lifeSpan; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle Frog delete on DELETE. 
exports.frog_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Frog.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 


 // Handle a show one view with id specified by query 
 exports.frog_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Frog.findById( req.query.id) 
        res.render('frogdetail',  
{ title: 'Frog Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a frog. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.frog_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('frogcreate', { title: 'Frog Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a frog.
// query provides the id
exports.frog_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Frog.findById(req.query.id)
    res.render('frogupdate', { title: 'Frog Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query 
    exports.frog_delete_Page = async function(req, res) { 
        console.log("Delete view for id "  + req.query.id) 
        try{ 
            result = await Frog.findById(req.query.id) 
            res.render('frogdelete', { title: 'Frog Delete', toShow: 
    result }); 
        } 
        catch(err){ 
            res.status(500) 
            res.send(`{'error': '${err}'}`); 
        } 
    }; 

