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
