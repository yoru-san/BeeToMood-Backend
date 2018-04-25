var add_controller = require('./controllers/add');
var admin_controller = require('./controllers/admin');
var historique_controller = require('./controllers/historique');
var chat_controller = require('./controllers/chat');


exports.init = (app) => {
    
    app.get('/', (req, res) => {
        res.render("index");
    });
    
    app.get('/presentation', (req, res) => {
        res.render("presentation");
    });

    app.get('/contact', (req, res) => {
        res.render("contact");
    });

    app.get('/parcours', (req, res) => {
        res.render("parcours");
    });

    app.post('/chat', (req, res) => {
        chat_controller.action(req, res);
    });

    app.get('/chat', (req, res) => {
        chat_controller.index(req, res);
    });

    app.get('/admin', (req, res) => {
        admin_controller.index(req, res);
    });

    app.get('/historique', (req, res) => {
        historique_controller.index(req, res);
    });
}
