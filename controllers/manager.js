var manager = require('../models/manager').Manager;


exports.index = (req, res) => {
    manager.find().then(data => {
        res.render("listManager",{allTask: data})
    })
}

<<<<<<< HEAD
exports.add = (req, res) => {
    var manager = new addManager;
=======
exports.action = (req, res) => {
    var manager = new manager;
>>>>>>> 81234c719ce46f9c80bd513460a3a9a5bb9a8a95
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