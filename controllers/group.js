var group = require('../models/group').Group;

exports.index = (req, res) => {
    group.find().then(data => {
        res.render("listGroups",{allTask: data})
    })
}

<<<<<<< HEAD
exports.add = (req, res) => {
    var group = new addGroup;
=======
exports.action = (req, res) => {
    var group = new group;
>>>>>>> 81234c719ce46f9c80bd513460a3a9a5bb9a8a95
    group.name = req.body.name;;

    group.save().then(data => {
        res.redirect("/");
    });
}
exports.update = (req, res) => {

    group.findOneAndUpdate({_id: req.params.id}, {name: req.body.name}).then(data => {
        res.redirect('/');
    });
}

exports.remove = (req,res) => {
    group.findOneAndRemove({_id: req.params.id}).then(data => {
        res.redirect("/");
    });
}