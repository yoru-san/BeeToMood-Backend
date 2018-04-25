
var add_controller = require('./controllers/admin');
var update_controller = require('./controllers/email');
var delete_controller = require('./controllers/employee');
var list_controller = require('./controllers/group');
var search_controller = require('./controllers/manager');


exports.init = (app) => {


	//ROUTES EMPLOYEE
    app.get('/', (req, res) => {
        list_controller.index(req, res);
    });

    app.get('/employee', (req, res) => {
        add_controller.add(req, res);
    });

    app.post('/employee', (req, res) => {
        add_controller.add(req, res);
    });

    app.get('/employee/:id', (req, res) => {
        update_controller.update(req, res);
    });

    app.post('/employee/:id', (req, res) => {
        update_controller.update(req, res);
    });

    app.get('/employee/:id', (req, res) => {
        delete_controller.delete(req, res);
    });

    app.post('/employee/:id', (req, res) => {
        delete_controller.delete(req, res);
    });



    //R
     app.get('/', (req, res) => {
     list_controller.index(req, res);
    });

    app.get('/manager', (req, res) => {
        add_controller.add(req, res);
    });

    app.post('/manager', (req, res) => {
        add_controller.add(req, res);
    });

    app.get('/manager/:id', (req, res) => {
        update_controller.update(req, res);
    });

    app.post('/manager/:id', (req, res) => {
        update_controller.update(req, res);
    });

    app.get('/manager/:id', (req, res) => {
        delete_controller.delete(req, res);
    });

    app.post('/manager/:id', (req, res) => {
        delete_controller.delete(req, res);
    });




}