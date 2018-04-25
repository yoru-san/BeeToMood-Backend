var addGroup = require('../models/group').group;

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
