var addGroup = require('../models/group').Group;

exports.index = (req, res) => {
    Group.find().then(data => {
        res.render("listGroups",{allTask: data})
    })
}

exports.action = (req, res) => {
    var group = new addGroup;
    group.name = req.body.name;;

    group.save().then(data => {
        res.redirect("/");
    });
}
exports.update = (req, res) => {

    employee.findOneAndUpdate({_id: req.params.id}, {name: req.body.name}).then(data => {
        res.redirect('/');
    });
}

exports.remove = (req,res) => {
    employee.findOneAndRemove({_id: req.params.id}).then(data => {
        res.redirect("/");
    });
}