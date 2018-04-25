var Group = require('../models/group').Group;

exports.index = (req, res) => {
    Group.find().then(data => {
        res.render("listGroups",{allTask: data})
    })
}