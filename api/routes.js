var review_controller = require('./controllers/review');
var user_controller = require('./controllers/user');
var group_controller = require('./controllers/group');


exports.init = (app) => {
        //Action de l'api sur les utilisateurs
    app.get('/api/users', (req, res) => {
        user_controller.index(req, res);
    });
    app.get('/api/users/:id', (req, res) => {
        user_controller.show(req, res);
    });
    app.post('/api/users', (req, res) => {
        user_controller.create(req, res);
    });
    app.put('/api/users/:id', (req, res) => {
        user_controller.update(req, res);
    });
    app.patch("/api/users/:id", (req, res) => {
        user_controller.updatePassword(req, res);
    });
    app.delete('/api/users/:id', (req, res) => {
        user_controller.drop(req, res);
    });

    //Action de l'api sur la connexion des utilisateurs
    app.post('/api/connexion', (req, res) => {
        user_controller.connect(req, res);
    });

    app.patch('/api/connexion/:id', (req, res) => {
        user_controller.changeStatus(req, res);
    });

    //Action de l'api sur les groupes
    app.get('/api/groups', (req, res) => {
        group_controller.index(req, res);
    });
    app.get('/api/groups/:id', (req, res) => {
        group_controller.show(req, res);
    });
    app.post('/api/groups', (req, res) => {
        group_controller.create(req, res);
    });
    app.put('/api/groups/:id', (req, res) => {
        group_controller.update(req, res);
    });
    app.delete('/api/groups/:id', (req, res) => {
        group_controller.drop(req, res);
    });

    //Action de l'api sur les reviews
    app.get('/api/reviews/:id', (req, res) => {
        review_controller.index(req, res);
    });

    app.get('/api/reviews', (req, res) => {
        review_controller.show(req, res);
    });


    app.post('/api/reviews', (req, res) => {
        review_controller.create(req, res);
    });

}
