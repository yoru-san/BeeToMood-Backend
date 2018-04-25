var addManager = require('../models/manager').Manager;


exports.index = (req, res) => {
    manager.find().then(data => {
        res.render("listManager",{allTask: data})
    })
}

exports.add = (req, res) => {
    var manager = new addManager;
    manager.name = req.body.name;
    manager.password = req.body.password;

    manager.save().then(data => {
        res.redirect("/");
    });
}

exports.update = (req, res) => {

    manager.findOneAndUpdate({_id: req.params.id}, {name: req.body.name, password: req.body.password}).then(data => {
        res.redirect('/');
    });
}

exports.remove = (req,res) => {
    manager.findOneAndRemove({_id: req.params.id}).then(data => {
        res.redirect("/");
    });
}