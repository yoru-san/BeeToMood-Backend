var admin_controller = require('./controllers/admin');
var manager_controller = require('./controllers/manager');
var employee_controller = require('./controllers/employee');
var group_controller = require('./controllers/group');


exports.init = (app) => {
        //Action de l'api sur les employées
    app.get('/api/employees', (req, res) => {
        employee_controller.index(req, res);
    });
    app.post('/api/employees', (req, res) => {
        employee_controller.create(req, res);
    });
    app.put('/api/employees', (req, res) => {
        employee_controller.update(req, res);
    });
    app.delete('/api/employees', (req, res) => {
        employee_controller.drop(req, res);
    });

    //Action de l'api sur les managers
    app.get('/api/managers', (req, res) => {
        manager_controller.index(req, res);
    });
    app.post('/api/managers', (req, res) => {
        manager_controller.create(req, res);
    });
    app.put('/api/managers', (req, res) => {
        manager_controller.update(req, res);
    });
    app.delete('/api/managers', (req, res) => {
        manager_controller.drop(req, res);
    });

    //Action de l'api sur les groupes
    app.get('/api/groups', (req, res) => {
        group_controller.index(req, res);
    });
    app.post('/api/groups', (req, res) => {
        group_controller.create(req, res);
    });
    app.put('/api/groups', (req, res) => {
        group_controller.update(req, res);
    });
    app.delete('/api/groups', (req, res) => {
        group_controller.drop(req, res);
    });

}
