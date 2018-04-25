var group = require('../models/group').Group;

exports.index = (req, res) => {
    group.find().then(data => {
        res.render("listGroups",{allTask: data})
    })
}

exports.action = (req, res) => {
    var group = new group;
    group.name = req.body.name;;

    group.save().then(data => {
        res.redirect("/");
    });
}
