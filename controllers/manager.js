var addManager = require('../models/manager').Manager;


exports.index = (req, res) => {
    manager.find().then(data => {
        res.render("listManager",{allTask: data})
    })
}

exports.action = (req, res) => {
    var manager = new addManager;
    manager.name = req.body.name;
    manager.password = req.body.password;

    manager.save().then(data => {
        res.redirect("/");
    });
}